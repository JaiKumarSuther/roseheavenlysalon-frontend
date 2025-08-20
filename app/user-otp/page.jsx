"use client";
import { useState } from "react";
import Image from "next/image";

export default function UserOtp() {
  const [otp, setOtp] = useState("");

  const onSubmit = (e) => { 
    e.preventDefault(); 
    alert(`Submitted OTP: ${otp}`); 
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-purple-50/50 opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
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
            <h1 className="font-serif text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Rose Heavenly
            </h1>
            <p className="text-gray-600">Verify your account</p>
          </div>

          {/* OTP Form */}
          <div className="card p-8 backdrop-blur-sm bg-white/80 border border-white/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Code Verification</h2>
              <p className="text-gray-600">Enter the verification code sent to your email</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <input 
                  type="text" 
                  name="otp" 
                  placeholder="Enter verification code" 
                  value={otp} 
                  onChange={(e) => setOtp(e.target.value)} 
                  required 
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm text-center text-lg font-mono tracking-widest"
                  maxLength={6}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Verify Code
              </button>

              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Didn't receive the code?{" "}
                  <button 
                    type="button"
                    className="text-rose-600 hover:text-rose-700 font-medium transition-colors"
                  >
                    Resend
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}


