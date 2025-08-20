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
        const isSelected = ymd === selectedDate;
        
        const baseClasses = "p-2 text-center cursor-pointer transition-all duration-200 border border-border hover:bg-accent";
        const dayClasses = isToday 
          ? `${baseClasses} bg-primary text-primary-foreground font-bold` 
          : isSelected 
            ? `${baseClasses} bg-accent border-primary` 
            : eventNum > 0 
              ? `${baseClasses} bg-secondary/50` 
              : baseClasses;
        
        cell = (
          <div key={`d-${cb}`} className={dayClasses} onClick={() => onDayClick(dayCount)}>
            <div className="text-sm font-medium">{dayCount}</div>
            <div className="text-xs text-muted-foreground">{eventNum} Events</div>
          </div>
        );
        dayCount++;
      } else {
        let inactiveDay; let inactiveLabel;
        if (cb < currentMonthFirstDay) { 
          const prev = new Date(year, month - 2, 1); 
          const prevMonthTotal = new Date(prev.getFullYear(), prev.getMonth() + 1, 0).getDate(); 
          inactiveDay = prevMonthTotal - (currentMonthFirstDay - 1 - cb); 
          inactiveLabel = "Expired"; 
        } else { 
          inactiveDay = cb - totalDaysOfMonthDisplay; 
          inactiveLabel = "Upcoming"; 
        }
        cell = (
          <div key={`i-${cb}`} className="p-2 text-center text-muted-foreground/50 border border-border">
            <div className="text-sm">{inactiveDay}</div>
            <div className="text-xs">{inactiveLabel}</div>
          </div>
        );
      }
      elements.push(cell);
    }
    const weeks = [];
    for (let i = 0; i < elements.length; i += 7) {
      weeks.push(<div key={`w-${i}`} className="grid grid-cols-7">{elements.slice(i, i + 7)}</div>);
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
    <div className="min-h-screen bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Calendar</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-black">
            View and manage your appointments
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-card rounded-2xl p-8 border border-primary/10 shadow-elegant">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Calendar Header */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-8">
                  <button 
                    onClick={prevMonth}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center space-x-4">
                    <select 
                      className="px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={pad2(month)} 
                      onChange={(e) => setMonth(Number(e.target.value))}
                    >
                      {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                        <option key={m} value={pad2(m)}>{monthNames[m - 1]}</option>
                      ))}
                    </select>
                    
                    <select 
                      className="px-4 py-2 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      value={String(year)} 
                      onChange={(e) => setYear(Number(e.target.value))}
                    >
                      {Array.from({ length: 11 }, (_, i) => year - 5 + i).map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>
                  
                  <button 
                    onClick={nextMonth}
                    className="p-2 rounded-lg hover:bg-accent transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="space-y-2">
                  {/* Day Headers */}
                  <div className="grid grid-cols-7 text-center font-semibold text-muted-foreground">
                    <div className="p-2">Mon</div>
                    <div className="p-2">Tue</div>
                    <div className="p-2">Wed</div>
                    <div className="p-2">Thu</div>
                    <div className="p-2">Fri</div>
                    <div className="p-2">Sat</div>
                    <div className="p-2">Sun</div>
                  </div>
                  
                  {/* Calendar Days */}
                  <div className="space-y-1">
                    {renderWeeks()}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-background rounded-xl p-6 border border-border">
                  <h2 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    <span className="block text-sm text-muted-foreground">{sidebarHeading.weekday}</span>
                    {sidebarHeading.monthLabel} {pad2(sidebarHeading.day)}
                  </h2>
                  
                  {events.length > 0 ? (
                    <div className="space-y-3">
                      <h3 className="font-semibold text-foreground">Appointments</h3>
                      <ul className="space-y-2">
                        {events.map((ev, idx) => (
                          <li key={idx} className="p-3 bg-accent rounded-lg">
                            <div className="text-sm font-medium">{ev.service1}</div>
                            {ev.service2 && <div className="text-xs text-muted-foreground">{ev.service2}</div>}
                            <div className="text-xs text-primary font-medium">{ev.time}</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-muted-foreground text-sm">No appointments scheduled for this date.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


