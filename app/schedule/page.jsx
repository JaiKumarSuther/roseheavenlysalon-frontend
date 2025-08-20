"use client";
import { useState } from "react";

export default function Schedule() {
  const [form, setForm] = useState({ 
    name: "", 
    phone: "", 
    time: "", 
    date: "", 
    service1: "Hair", 
    service2: "" 
  });
  
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const book = async () => {
    const res = await fetch("http://localhost:4000/api/events/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, email: "demo@example.com" }),
    });
    if (!res.ok) alert("Booking failed"); else alert("Booked");
  };

  const services = [
    "Hair",
    "Nails", 
    "Massage",
    "Facial",
    "Bleaching",
    "IPL Hair Removal",
    "Warts Removal"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-purple-50/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-rose-600">
            Make an Appointment
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            Schedule your visit to Rose Heavenly Salon and Spa today
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Book Now!
              </h2>
              <p className="text-gray-600">Fill out the form below to schedule your visit</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); book(); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Name *
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      name="name" 
                      value={form.name} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your number" 
                      name="phone" 
                      value={form.phone} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Time *
                    </label>
                    <input 
                      type="time" 
                      name="time" 
                      min="08:00" 
                      max="20:00" 
                      value={form.time} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Date *
                    </label>
                    <input 
                      type="date" 
                      name="date" 
                      value={form.date} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Service *
                  </label>
                  <select 
                    name="service1" 
                    value={form.service1} 
                    onChange={onChange} 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Service Details
                  </label>
                  <input 
                    type="text" 
                    placeholder="Service details" 
                    name="service2" 
                    value={form.service2} 
                    onChange={onChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Book!
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


