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
    <div className="min-h-screen  bg-gradient-soft">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">Make an Appointment</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto text-black">
            Schedule your visit to Rose Heavenly Salon and Spa today
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-card rounded-2xl p-8 border border-primary/10 shadow-elegant">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Book Now!
              </h2>
              <p className="text-muted-foreground">Fill out the form below to schedule your visit</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); book(); }} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      name="name" 
                      value={form.name} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Phone *
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter your number" 
                      name="phone" 
                      value={form.phone} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                    />
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
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
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Date *
                    </label>
                    <input 
                      type="date" 
                      name="date" 
                      value={form.date} 
                      onChange={onChange} 
                      required 
                      className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Service *
                  </label>
                  <select 
                    name="service1" 
                    value={form.service1} 
                    onChange={onChange} 
                    required
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Service Details
                  </label>
                  <input 
                    type="text" 
                    placeholder="Service details" 
                    name="service2" 
                    value={form.service2} 
                    onChange={onChange} 
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-smooth"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button 
                  type="submit" 
                  className="bg-gradient-primary text-white px-12 py-3 rounded-lg font-semibold hover:scale-105 transition-bounce shadow-elegant"
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


