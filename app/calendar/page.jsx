"use client";

import { useEffect, useMemo, useState } from "react";

const API_BASE = "http://localhost:4000";

function pad2(n) {
  return n < 10 ? `0${n}` : String(n);
}

function toYmd(date) {
  const y = date.getFullYear();
  const m = pad2(date.getMonth() + 1);
  const d = pad2(date.getDate());
  return `${y}-${m}-${d}`;
}

function isoDayOfWeek(date) {
  const d = date.getDay();
  return d === 0 ? 7 : d;
}

const monthNames = [
  "January","February","March","April","May","June","July","August","September","October","November","December",
];

export default function Calendar() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [counts, setCounts] = useState({});
  const [selectedDate, setSelectedDate] = useState(() => toYmd(new Date()));
  const [events, setEvents] = useState([]);

  const firstOfMonth = useMemo(() => new Date(year, month - 1, 1), [year, month]);
  const lastOfMonth = useMemo(() => new Date(year, month, 0), [year, month]);

  const boxDisplay = useMemo(() => {
    const currentMonthFirstDay = isoDayOfWeek(firstOfMonth);
    const totalDaysOfMonth = lastOfMonth.getDate();
    const totalDaysOfMonthDisplay = currentMonthFirstDay === 1 ? totalDaysOfMonth : totalDaysOfMonth + (currentMonthFirstDay - 1);
    return totalDaysOfMonthDisplay <= 35 ? 35 : 42;
  }, [firstOfMonth, lastOfMonth]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/calendar?year=${year}&month=${month}`, { signal: controller.signal });
        if (!res.ok) return;
        const data = await res.json();
        const map = {};
        for (const row of data.counts || []) {
          const ymd = typeof row.d === "string" ? row.d.substring(0, 10) : toYmd(new Date(row.d));
          map[ymd] = row.c;
        }
        setCounts(map);
      } catch {}
    })();
    return () => controller.abort();
  }, [year, month]);

  useEffect(() => {
    const ymd = `${year}-${pad2(month)}-01`;
    const [sy, sm] = (selectedDate || '').split('-');
    if (Number(sy) !== year || Number(sm) !== month) setSelectedDate(ymd);
  }, [year, month]);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/calendar/events?date=${selectedDate}`, { signal: controller.signal });
        if (!res.ok) return;
        const data = await res.json();
        setEvents(data || []);
      } catch {}
    })();
    return () => controller.abort();
  }, [selectedDate]);

  function prevMonth() { const d = new Date(year, month - 2, 1); setYear(d.getFullYear()); setMonth(d.getMonth() + 1); }
  function nextMonth() { const d = new Date(year, month, 1); setYear(d.getFullYear()); setMonth(d.getMonth() + 1); }
  function onDayClick(dayNumber) { setSelectedDate(`${year}-${pad2(month)}-${pad2(dayNumber)}`); }

  function renderWeeks() {
    const elements = [];
    const totalDaysOfMonth = lastOfMonth.getDate();
    const currentMonthFirstDay = isoDayOfWeek(firstOfMonth);
    const totalDaysOfMonthDisplay = currentMonthFirstDay === 1 ? totalDaysOfMonth : totalDaysOfMonth + (currentMonthFirstDay - 1);
    let dayCount = 1;
    for (let cb = 1; cb <= boxDisplay; cb++) {
      let cell;
      if ((cb >= currentMonthFirstDay || currentMonthFirstDay === 1) && cb <= totalDaysOfMonthDisplay) {
        const ymd = `${year}-${pad2(month)}-${pad2(dayCount)}`;
        const eventNum = counts[ymd] || 0;
        const isToday = ymd === toYmd(new Date());
        const classes = ["calendar__day"]; if (isToday) classes.push("today"); if (eventNum > 0) classes.push("event"); else classes.push("no-event");
        cell = (
          <div key={`d-${cb}`} className={classes.join(" ")} onClick={() => onDayClick(dayCount)}>
            <span className="calendar__date">{dayCount}</span>
            <span className={`calendar__task${isToday ? " calendar__task--today" : ""}`}>{eventNum} Events</span>
          </div>
        );
        dayCount++;
      } else {
        let inactiveDay; let inactiveLabel;
        if (cb < currentMonthFirstDay) { const prev = new Date(year, month - 2, 1); const prevMonthTotal = new Date(prev.getFullYear(), prev.getMonth() + 1, 0).getDate(); inactiveDay = prevMonthTotal - (currentMonthFirstDay - 1 - cb); inactiveLabel = "Expired"; }
        else { inactiveDay = cb - totalDaysOfMonthDisplay; inactiveLabel = "Upcoming"; }
        cell = (
          <div key={`i-${cb}`} className="calendar__day inactive">
            <span className="calendar__date">{inactiveDay}</span>
            <span className="calendar__task">{inactiveLabel}</span>
          </div>
        );
      }
      elements.push(cell);
    }
    const weeks = [];
    for (let i = 0; i < elements.length; i += 7) {
      weeks.push(<section key={`w-${i}`} className="calendar__week">{elements.slice(i, i + 7)}</section>);
    }
    return weeks;
  }

  const selected = useMemo(() => {
    const parts = (selectedDate || '').split('-'); const y = Number(parts[0]); const m = Number(parts[1]); const d = Number(parts[2]);
    if (!y || !m || !d) return new Date(NaN); return new Date(y, m - 1, d);
  }, [selectedDate]);
  const sidebarHeading = useMemo(() => ({
    weekday: selected.toLocaleDateString(undefined, { weekday: "long" }),
    monthLabel: selected.toLocaleDateString(undefined, { month: "long" }),
    day: selected.getDate(),
  }), [selected]);

  return (
    <>
      <link rel="stylesheet" href="/css/styleCal.css" />
      <div className="calendar-container">
        <div id="calendar_div">
          <div className="calendar-contain">
            <section className="title-bar">
              <a className="title-bar__prev" onClick={prevMonth}></a>
              <div className="title-bar__month">
                <select className="month-dropdown" value={pad2(month)} onChange={(e) => setMonth(Number(e.target.value))}>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (<option key={m} value={pad2(m)}>{monthNames[m - 1]}</option>))}
                </select>
              </div>
              <div className="title-bar__year">
                <select className="year-dropdown" value={String(year)} onChange={(e) => setYear(Number(e.target.value))}>
                  {Array.from({ length: 11 }, (_, i) => year - 5 + i).map((y) => (<option key={y} value={y}>{y}</option>))}
                </select>
              </div>
              <a className="title-bar__next" onClick={nextMonth}></a>
            </section>

            <aside className="calendar__sidebar" id="event_list">
              <div className="content">
                <h2 className="sidebar__heading">
                  <span className="calendar__heading-highlight">{sidebarHeading.weekday}</span>
                  <br />
                  {sidebarHeading.monthLabel} {pad2(sidebarHeading.day)}
                </h2>
                {events.length > 0 && (
                  <ul className="sidebar__list">
                    <li className="sidebar__list-item sidebar__list-item--complete">Appointments</li>
                    {events.map((ev, idx) => (
                      <li key={idx} className="sidebar__list-item">
                        <span className="list-item__time">{idx + 1}.</span>
                        {ev.service1}
                        <span className="list-item__time"></span>
                        {ev.service2}
                        <span className="list-item__time"></span>
                        {ev.time}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </aside>

            <section className="calendar__days">
              <section className="calendar__top-bar">
                <span className="top-bar__days">Mon</span>
                <span className="top-bar__days">Tue</span>
                <span className="top-bar__days">Wed</span>
                <span className="top-bar__days">Thu</span>
                <span className="top-bar__days">Fri</span>
                <span className="top-bar__days">Sat</span>
                <span className="top-bar__days">Sun</span>
              </section>
              {renderWeeks()}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}


