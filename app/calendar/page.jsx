"use client"; 
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useGetCalendarCounts, useGetCalendarEvents } from "../../lib/hooks";

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

// Sample appointment data for demonstration
const sampleAppointments = {
  "2025-01-15": [
    { service: "Hair Cut", time: "10:00 AM", type: "hair" },
    { service: "Manicure", time: "2:00 PM", type: "nail" }
  ],
  "2025-01-20": [
    { service: "Facial", time: "11:00 AM", type: "facial" }
  ],
  "2025-01-25": [
    { service: "Massage", time: "3:00 PM", type: "massage" },
    { service: "Hair Color", time: "5:00 PM", type: "hair" }
  ]
};

export default function Calendar() {
  // Set default to August 2025 since that's where the booking is
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(8); // August
  const [selectedDate, setSelectedDate] = useState('2025-08-30'); // Set to the date with booking
  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [isYearOpen, setIsYearOpen] = useState(false);

  // Use React Query hooks
  const { data: calendarData, isLoading: isLoadingCounts, error: calendarError, refetch: refetchCounts } = useGetCalendarCounts(year, month);
  const { data: eventsData, isLoading: isLoadingEvents, error: eventsError, refetch: refetchEvents } = useGetCalendarEvents(selectedDate);



  const counts = useMemo(() => {
    if (!calendarData?.counts) {
      return {};
    }
    const map = {};
    for (const row of calendarData.counts) {
      // Backend now returns dates in YYYY-MM-DD format
      const ymd = row.d;
      map[ymd] = row.c;
    }
    return map;
  }, [calendarData]);

  const events = eventsData?.events || eventsData || [];

  const firstOfMonth = useMemo(() => new Date(year, month - 1, 1), [year, month]);
  const lastOfMonth = useMemo(() => new Date(year, month, 0), [year, month]);

  const boxDisplay = useMemo(() => {
    const currentMonthFirstDay = isoDayOfWeek(firstOfMonth);
    const totalDaysOfMonth = lastOfMonth.getDate();
    const totalDaysOfMonthDisplay = currentMonthFirstDay === 1 ? totalDaysOfMonth : totalDaysOfMonth + (currentMonthFirstDay - 1);
    return totalDaysOfMonthDisplay <= 35 ? 35 : 42;
  }, [firstOfMonth, lastOfMonth]);

  useEffect(() => {
    const ymd = `${year}-${pad2(month)}-01`;
    const [sy, sm] = (selectedDate || '').split('-');
    if (Number(sy) !== year || Number(sm) !== month) setSelectedDate(ymd);
  }, [year, month]);

  const getDayClass = (date, isCurrentMonth) => {
    const ymd = toYmd(date);
    const isSelected = selectedDate === ymd;
    const isToday = toYmd(new Date()) === ymd;
    const hasEvents = counts[ymd] > 0;
    
    let baseClass = "w-full h-full flex flex-col items-center justify-center p-2 text-sm font-medium transition-all duration-200 hover:bg-rose-50 hover:scale-105 cursor-pointer";
    
    if (!isCurrentMonth) {
      baseClass += " text-gray-400";
    } else if (isSelected) {
      baseClass += " bg-rose-500 text-white rounded-lg shadow-lg";
    } else if (isToday) {
      baseClass += " bg-rose-100 text-rose-700 rounded-lg border-2 border-rose-300";
    } else if (hasEvents) {
      baseClass += " text-rose-600 font-semibold bg-rose-50";
    } else {
      baseClass += " text-gray-700";
    }
    
    return baseClass;
  };

  const getEventTypeColor = (type) => {
    const colors = {
      hair: "bg-rose-100 text-rose-800 border-rose-200",
      nail: "bg-pink-100 text-pink-800 border-pink-200",
      facial: "bg-purple-100 text-purple-800 border-purple-200",
      massage: "bg-blue-100 text-blue-800 border-blue-200",
      default: "bg-gray-100 text-gray-800 border-gray-200"
    };
    return colors[type] || colors.default;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-purple-50/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6 animate-fade-in">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-rose-600 animate-fade-in-delay">
            Appointment Calendar
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-delay">
            View and manage your appointments with our interactive calendar
          </p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft animate-fade-in-up">
            
            {/* Calendar Header */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <button
                  onClick={() => {
                    if (month === 1) {
                      setMonth(12);
                      setYear(year - 1);
                    } else {
                      setMonth(month - 1);
                    }
                  }}
                  className="p-2 rounded-lg hover:bg-rose-50 transition-colors duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <button
                      onClick={() => setIsMonthOpen(!isMonthOpen)}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700 hover:scale-105"
                    >
                      {monthNames[month - 1]}
                    </button>
                    {isMonthOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 animate-fade-in-up">
                        {monthNames.map((name, index) => (
                          <button
                            key={name}
                            onClick={() => {
                              setMonth(index + 1);
                              setIsMonthOpen(false);
                            }}
                            className="block w-full px-4 py-2 text-left hover:bg-rose-50 transition-colors duration-200"
                          >
                            {name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <button
                      onClick={() => setIsYearOpen(!isYearOpen)}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-gray-700 hover:scale-105"
                    >
                      {year}
                    </button>
                    {isYearOpen && (
                      <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 animate-fade-in-up">
                        {Array.from({ length: 10 }, (_, i) => year - 5 + i).map((y) => (
                          <button
                            key={y}
                            onClick={() => {
                              setYear(y);
                              setIsYearOpen(false);
                            }}
                            className="block w-full px-4 py-2 text-left hover:bg-rose-50 transition-colors duration-200"
                          >
                            {y}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    if (month === 12) {
                      setMonth(1);
                      setYear(year + 1);
                    } else {
                      setMonth(month + 1);
                    }
                  }}
                  className="p-2 rounded-lg hover:bg-rose-50 transition-colors duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <Link
                href="/schedule"
                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Book Appointment
              </Link>
            </div>

            {/* Calendar Grid */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {isLoadingCounts && (
                <div className="text-center py-4 mb-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-rose-500 mx-auto"></div>
                  <p className="text-gray-600 mt-2">Loading calendar data...</p>
                </div>
              )}
              
              {calendarError && (
                <div className="text-center py-4 mb-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600">Error loading calendar: {calendarError.message}</p>
                </div>
              )}
              
           
              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((day) => (
                  <div key={day} className="p-3 text-center text-sm font-semibold text-gray-600">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: boxDisplay }, (_, i) => {
                  const dayOffset = isoDayOfWeek(firstOfMonth) - 1;
                  const dayNumber = i - dayOffset + 1;
                  const date = new Date(year, month - 1, dayNumber);
                  const isCurrentMonth = dayNumber > 0 && dayNumber <= lastOfMonth.getDate();
                  
                  return (
                    <div
                      key={i}
                      className="aspect-square border border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 hover:scale-105"
                    >
                      {isCurrentMonth && (
                        <button
                          onClick={() => setSelectedDate(toYmd(date))}
                          className={getDayClass(date, true)}
                        >
                          <span>{dayNumber}</span>
                          <div className="text-xs mt-1">
                            {(() => {
                              const ymd = toYmd(date);
                              const count = counts[ymd] || 0;
                              return count > 0 ? (
                                <span className="bg-rose-500 text-white px-1 py-0.5 rounded-full text-xs">
                                  {count} {count === 1 ? 'Booking' : 'Bookings'}
                                </span>
                              ) : (
                                <span className="text-gray-400 text-xs">0 Bookings</span>
                              );
                            })()}
                          </div>
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Selected Date Events */}
            {selectedDate && (
              <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Appointments for {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </h3>
                
                {isLoadingEvents ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500 mx-auto"></div>
                    <p className="text-gray-600 mt-2">Loading appointments...</p>
                  </div>
                ) : events.length > 0 ? (
                  <div className="space-y-3">
                    {events.map((event, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border ${getEventTypeColor(event.type)} animate-fade-in-up`}
                        style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-semibold">{event.service}</h4>
                            <p className="text-sm opacity-75">{event.time}</p>
                          </div>
                          <div className="text-xs px-2 py-1 rounded-full bg-white/50">
                            {event.type}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-600">No appointments scheduled for this date</p>
                    <Link
                      href="/schedule"
                      className="inline-block mt-4 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors duration-200 hover:scale-105"
                    >
                      Book an Appointment
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}