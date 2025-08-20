"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function Calendar() {
  const [year, setYear] = useState(() => new Date().getFullYear());
  const [month, setMonth] = useState(() => new Date().getMonth() + 1);
  const [counts, setCounts] = useState({});
  const [selectedDate, setSelectedDate] = useState(() => toYmd(new Date()));
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

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
    setIsLoading(true);
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
      finally {
        setIsLoading(false);
      }
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

  function prevMonth() { 
    const d = new Date(year, month - 2, 1); 
    setYear(d.getFullYear()); 
    setMonth(d.getMonth() + 1); 
  }
  
  function nextMonth() { 
    const d = new Date(year, month, 1); 
    setYear(d.getFullYear()); 
    setMonth(d.getMonth() + 1); 
  }
  
  function onDayClick(dayNumber) { 
    setSelectedDate(`${year}-${pad2(month)}-${pad2(dayNumber)}`); 
  }

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
        
        cell = (
          <div 
            key={`d-${cb}`} 
            onClick={() => onDayClick(dayCount)}
            className={`
              relative p-2 sm:p-3 cursor-pointer transition-all duration-300 rounded-lg sm:rounded-xl border-2 min-h-[60px] sm:min-h-[80px] flex flex-col justify-center
              ${isToday 
                ? 'bg-gradient-to-br from-rose-500 to-pink-500 text-white border-rose-500 shadow-lg shadow-rose-500/25' 
                : isSelected 
                  ? 'bg-gradient-to-br from-rose-100 to-pink-100 border-rose-300 text-rose-700 shadow-md' 
                  : eventNum > 0 
                    ? 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 hover:border-purple-300 hover:shadow-md' 
                    : 'bg-white border-gray-200 hover:border-rose-300 hover:shadow-md hover:bg-rose-50'
              }
            `}
          >
            <div className={`text-sm sm:text-lg font-semibold ${isToday ? 'text-white' : 'text-gray-800'}`}>
              {dayCount}
            </div>
            {eventNum > 0 && (
              <div className={`
                absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-xs font-bold
                ${isToday 
                  ? 'bg-white text-rose-500' 
                  : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                }
              `}>
                {eventNum}
              </div>
            )}
            {eventNum > 0 && (
              <div className={`text-xs mt-1 ${isToday ? 'text-white/90' : 'text-gray-600'}`}>
                {eventNum} appt{eventNum > 1 ? 's' : ''}
              </div>
            )}
          </div>
        );
        dayCount++;
      } else {
        let inactiveDay; 
        let inactiveLabel;
        if (cb < currentMonthFirstDay) { 
          const prev = new Date(year, month - 2, 1); 
          const prevMonthTotal = new Date(prev.getFullYear(), prev.getMonth() + 1, 0).getDate(); 
          inactiveDay = prevMonthTotal - (currentMonthFirstDay - 1 - cb); 
          inactiveLabel = "Prev"; 
        } else { 
          inactiveDay = cb - totalDaysOfMonthDisplay; 
          inactiveLabel = "Next"; 
        }
        cell = (
          <div key={`i-${cb}`} className="p-2 sm:p-3 text-center text-gray-400 border-2 border-gray-100 rounded-lg sm:rounded-xl bg-gray-50 min-h-[60px] sm:min-h-[80px] flex flex-col justify-center">
            <div className="text-sm sm:text-lg font-medium">{inactiveDay}</div>
            <div className="text-xs">{inactiveLabel}</div>
          </div>
        );
      }
      elements.push(cell);
    }
    
    const weeks = [];
    for (let i = 0; i < elements.length; i += 7) {
      weeks.push(
        <div key={`w-${i}`} className="grid grid-cols-7 gap-1 sm:gap-2">
          {elements.slice(i, i + 7)}
        </div>
      );
    }
    return weeks;
  }

  const selected = useMemo(() => {
    const parts = (selectedDate || '').split('-'); 
    const y = Number(parts[0]); 
    const m = Number(parts[1]); 
    const d = Number(parts[2]);
    if (!y || !m || !d) return new Date(NaN); 
    return new Date(y, m - 1, d);
  }, [selectedDate]);
  
  const sidebarHeading = useMemo(() => ({
    weekday: selected.toLocaleDateString(undefined, { weekday: "long" }),
    monthLabel: selected.toLocaleDateString(undefined, { month: "long" }),
    day: selected.getDate(),
  }), [selected]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-purple-50/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Appointment Calendar
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
            View and manage your beauty appointments with our interactive calendar
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="pb-12 sm:pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-white/20 shadow-soft">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Calendar Header */}
              <div className="lg:col-span-3">
                <div className="flex flex-row items-center justify-between mb-6 sm:mb-8 gap-4">
                  <button 
                    onClick={prevMonth}
                    className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 transition-all duration-300 shadow-soft hover:shadow-medium group"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    {/* Month Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsMonthOpen(!isMonthOpen)}
                        className="px-3 sm:px-6 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 shadow-soft text-sm sm:text-base flex items-center space-x-2 hover:border-rose-300"
                      >
                        <span>{monthNames[month - 1]}</span>
                        <svg 
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isMonthOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isMonthOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                          {monthNames.map((monthName, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setMonth(index + 1);
                                setIsMonthOpen(false);
                              }}
                              className={`w-full px-3 py-2 text-left text-sm hover:bg-rose-50 transition-colors ${
                                month === index + 1 ? 'bg-rose-100 text-rose-700 font-medium' : 'text-gray-700'
                              }`}
                            >
                              {monthName}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {/* Year Dropdown */}
                    <div className="relative">
                      <button
                        onClick={() => setIsYearOpen(!isYearOpen)}
                        className="px-3 sm:px-6 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 shadow-soft text-sm sm:text-base flex items-center space-x-2 hover:border-rose-300"
                      >
                        <span>{year}</span>
                        <svg 
                          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isYearOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {isYearOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-48 overflow-y-auto">
                          {Array.from({ length: 11 }, (_, i) => year - 5 + i).map((y) => (
                            <button
                              key={y}
                              onClick={() => {
                                setYear(y);
                                setIsYearOpen(false);
                              }}
                              className={`w-full px-3 py-2 text-left text-sm hover:bg-rose-50 transition-colors ${
                                year === y ? 'bg-rose-100 text-rose-700 font-medium' : 'text-gray-700'
                              }`}
                            >
                              {y}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button 
                    onClick={nextMonth}
                    className="p-2 sm:p-3 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 hover:from-rose-200 hover:to-pink-200 transition-all duration-300 shadow-soft hover:shadow-medium group"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="space-y-3 sm:space-y-4">
                  {/* Day Headers */}
                  <div className="grid grid-cols-7 gap-1 sm:gap-2">
                    {dayNames.map((day) => (
                      <div key={day} className="p-2 sm:p-3 text-center font-semibold text-gray-600 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg sm:rounded-xl text-xs sm:text-sm">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {/* Calendar Days */}
                  <div className="space-y-1 sm:space-y-2">
                    {renderWeeks()}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-white to-rose-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-rose-100 shadow-soft">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800 mb-1">
                      {sidebarHeading.weekday}
                    </h2>
                    <p className="text-base sm:text-lg text-rose-600 font-semibold">
                      {sidebarHeading.monthLabel} {pad2(sidebarHeading.day)}
                    </p>
                  </div>
                  
                  {events.length > 0 ? (
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg flex items-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Appointments ({events.length})
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {events.map((ev, idx) => (
                          <div key={idx} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border border-rose-100 shadow-soft hover:shadow-medium transition-all duration-300">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{ev.service1}</h4>
                              <span className="text-xs bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-2 py-1 rounded-full font-medium">
                                {ev.time}
                              </span>
                            </div>
                            {ev.service2 && (
                              <p className="text-xs sm:text-sm text-gray-600 mb-2">{ev.service2}</p>
                            )}
                            <div className="flex items-center text-xs text-gray-500">
                              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Rose Heavenly Salon
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-6 sm:py-8">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <p className="text-gray-500 mb-4 text-sm sm:text-base">No appointments scheduled for this date.</p>
                      <Link 
                        href="/schedule" 
                        className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-xs sm:text-sm font-medium hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-soft hover:shadow-medium"
                      >
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Book Appointment
                      </Link>
                    </div>
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


