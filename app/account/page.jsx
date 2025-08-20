"use client";
import { useState } from "react";
import Image from "next/image";

export default function Account() {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    phone: "",
    address: "",
    password: "",
  });
  
  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated (demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Image 
                src="/images/image-logo.png" 
                alt="Rose Heavenly Salon" 
                width={80} 
                height={80}
                className="transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">Welcome!</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Manage your account and profile information
          </p>
        </div>
      </section>

      {/* Account Form */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-card rounded-2xl p-8 border border-primary/10 shadow-elegant">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Account Settings
              </h2>
              <p className="text-gray-600">Update your profile information</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your first name" 
                    name="firstname" 
                    value={form.firstname} 
                    onChange={onChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your last name" 
                    name="lastname" 
                    value={form.lastname} 
                    onChange={onChange} 
                    required 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Username */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Username *
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your username" 
                  name="username" 
                  value={form.username} 
                  onChange={onChange} 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  name="phone" 
                  value={form.phone} 
                  onChange={onChange} 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Address *
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your address" 
                  name="address" 
                  value={form.address} 
                  onChange={onChange} 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Password *
                </label>
                <input 
                  type="password" 
                  placeholder="Enter your password to continue" 
                  name="password" 
                  value={form.password} 
                  onChange={onChange} 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button 
                  type="submit" 
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


