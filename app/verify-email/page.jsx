"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { useVerifySignupOtp, useResendSignupOtp } from "../../lib/hooks";

export default function VerifyEmail() {
  const [showOtp, setShowOtp] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRefs = useRef([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const verifyOtp = useVerifySignupOtp();
  const resendOtp = useResendSignupOtp();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    
    // Move to next input if value is entered
    if (value && index < 5) {
      setActiveIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
    
    // Update form value
    const otpString = newOtpValues.join('');
    setValue('otp', otpString);
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      setActiveIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
    if (/^\d{6}$/.test(pastedData)) {
      const newOtpValues = pastedData.split('');
      setOtpValues(newOtpValues);
      setValue('otp', pastedData);
      setActiveIndex(5);
      inputRefs.current[5]?.focus();
    }
  };

  const onSubmit = async (data) => {
    if (!email) {
      alert('Email not found. Please try signing up again.');
      router.push('/signup');
      return;
    }

    const otpString = otpValues.join('');
    if (otpString.length !== 6) {
      alert('Please enter the complete 6-digit code.');
      return;
    }

    try {
      const result = await verifyOtp.mutateAsync({
        email: email,
        otp: otpString,
      });
      
      // User is automatically logged in after verification
      router.push('/account');
    } catch (error) {
      // Error is handled by the mutation
    }
  };

  const handleResendOtp = async () => {
    if (!email) return;
    
    try {
      await resendOtp.mutateAsync(email);
      // Reset timer to 10 minutes
      setTimeLeft(600);
      // Clear OTP inputs
      setOtpValues(['', '', '', '', '', '']);
      setActiveIndex(0);
      setValue('otp', '');
    } catch (error) {
      // Error is handled by the mutation
    }
  };

  if (!email) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Email Not Found</h2>
          <p className="text-gray-600 mb-6">Please complete the signup process first.</p>
          <Link href="/signup" className="btn-primary">
            Go to Signup
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-gray-100/50 to-gray-200/50 opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-20 animate-bounce-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8">
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
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-20 animate-pulse"></div>
              </div>
            </div>
            <h1 className="font-serif text-3xl font-bold bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent mb-2">
              Rose Heavenly
            </h1>
            <p className="text-gray-600">Verify your email address</p>
          </div>

          {/* Verification Form */}
          <div className="card p-8 backdrop-blur-sm bg-white/80 border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Email Verification</h2>
              <p className="text-gray-600">
                We've sent a verification code to
              </p>
              <p className="text-gray-800 font-medium mt-1 break-all">{email}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* OTP Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <div className="flex justify-center space-x-2 mb-4">
                  {otpValues.map((value, index) => (
                    <div key={index} className="relative">
                      <input
                        ref={(el) => (inputRefs.current[index] = el)}
                        type={showOtp ? "text" : "password"}
                        value={value}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        onFocus={() => setActiveIndex(index)}
                        className={`w-12 h-12 text-center text-xl font-bold border-2 rounded-lg transition-all duration-200 ${
                          activeIndex === index
                            ? 'border-gray-500 bg-white shadow-md'
                            : value
                            ? 'border-gray-400 bg-white'
                            : 'border-gray-200 bg-gray-50'
                        } ${errors.otp ? 'border-red-500' : ''}`}
                        maxLength={1}
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                      {index === 2 && (
                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs">
                          -
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowOtp(!showOtp)}
                    className="flex items-center text-gray-400 hover:text-gray-600 transition-colors text-sm"
                  >
                    {showOtp ? (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                        Hide Code
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Show Code
                      </>
                    )}
                  </button>
                </div>
                {errors.otp && (
                  <p className="text-red-500 text-sm mt-1 text-center">{errors.otp.message}</p>
                )}
              </div>

              {/* Timer */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Code expires in: <span className="font-mono font-bold text-gray-800">{formatTime(timeLeft)}</span>
                </p>
              </div>

              <button 
                type="submit" 
                disabled={verifyOtp.isPending || timeLeft === 0 || otpValues.join('').length !== 6}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {verifyOtp.isPending ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </div>
                ) : (
                  'Verify Email'
                )}
              </button>

              {/* Resend OTP */}
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2">
                  Didn't receive the code?
                </p>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={resendOtp.isPending || timeLeft > 0}
                  className="text-gray-500 hover:text-gray-600 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {resendOtp.isPending ? 'Sending...' : 'Resend Code'}
                </button>
              </div>

              <div className="text-center">
                <p className="text-gray-600 text-sm">
                  Wrong email?{" "}
                  <Link href="/signup" className="text-gray-500 hover:text-gray-600 font-medium transition-colors">
                    Go back to signup
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
