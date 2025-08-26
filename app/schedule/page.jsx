"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useCreateBooking, useGetUser } from "../../lib/hooks";
import useAuthStore from "../../lib/auth-store";

export default function Schedule() {
  const { isAuthenticated, initialize } = useAuthStore();
  const { data: user } = useGetUser();
  const createBooking = useCreateBooking();
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  // Initialize auth store and pre-fill form if user is logged in
  useEffect(() => {
    initialize();
    if (user) {
      setValue("name", user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : '');
      setValue("phone", user.phone || '');
    }
  }, [user, setValue, initialize]);

  // Calculate total price when services change
  useEffect(() => {
    const total = selectedServices.reduce((sum, service) => sum + service.price, 0);
    setTotalPrice(total);
  }, [selectedServices]);

  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setSelectedService(''); // Reset service selection when category changes
  };

  // Handle service selection
  const handleServiceChange = (serviceName) => {
    setSelectedService(serviceName);
  };

  // Add selected service to the list
  const addService = () => {
    if (!selectedCategory || !selectedService) {
      alert('Please select both category and service');
      return;
    }

    const category = servicesData.find(cat => cat.id === selectedCategory);
    const service = category?.services.find(s => s.name === selectedService);
    
    if (!service) return;

    const serviceKey = `${selectedCategory}-${selectedService}`;
    const existingIndex = selectedServices.findIndex(s => s.key === serviceKey);
    
    if (existingIndex > -1) {
      alert('This service is already selected');
      return;
    }

    setSelectedServices(prev => [...prev, {
      key: serviceKey,
      categoryId: selectedCategory,
      name: selectedService,
      price: service.price,
      category: category.title
    }]);

    // Reset selections
    setSelectedCategory('');
    setSelectedService('');
  };

  // Remove service from the list
  const removeService = (serviceKey) => {
    setSelectedServices(prev => prev.filter(s => s.key !== serviceKey));
  };

  // Get services for selected category
  const getServicesForCategory = () => {
    if (!selectedCategory) return [];
    const category = servicesData.find(cat => cat.id === selectedCategory);
    return category?.services || [];
  };

  // Handle date selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset time selection when date changes
    setValue('time', '');
  };

  const onSubmit = async (data) => {
    // Validate that at least one service is selected
    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    // Enhanced date and time validation
    const selectedDate = new Date(data.date);
    const selectedTime = data.time;
    const now = new Date();
    
    // Create the appointment datetime
    const [hours, minutes] = selectedTime.split(':').map(Number);
    const appointmentDateTime = new Date(selectedDate);
    appointmentDateTime.setHours(hours, minutes, 0, 0);
    
    // Check if appointment is in the past
    if (appointmentDateTime <= now) {
      alert("Cannot book appointments in the past. Please select a future date and time.");
      return;
    }
    
    // Check if appointment is within business hours (9 AM to 12 AM)
    const appointmentHour = appointmentDateTime.getHours();
    if (appointmentHour < 9 || appointmentHour >= 24) {
      alert("Please select a time between 9:00 AM and 11:30 PM.");
      return;
    }
    
    // Check if appointment is on a weekend
    const dayOfWeek = appointmentDateTime.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      alert("We are closed on weekends. Please select a weekday.");
      return;
    }

    try {
      // Use user's email if logged in, otherwise use guest email
      const email = user?.email || "guest@example.com";
      
      // Create service strings for backward compatibility
      const serviceNames = selectedServices.map(s => s.name);
      const service1 = serviceNames[0] || "";
      const service2 = serviceNames.slice(1).join(", ") || "";
      
      const bookingData = {
        ...data,
        email: email,
        service1: service1,
        service2: service2,
        selectedServices: selectedServices, // Include full service details
        totalPrice: totalPrice,
      };
      
      console.log('Sending booking data:', bookingData);
      
      await createBooking.mutateAsync(bookingData);
      
      // Reset form and services after successful booking
      reset();
      setSelectedServices([]);
      setTotalPrice(0);
      setSelectedCategory('');
      setSelectedService('');
      
      // Pre-fill form again if user is logged in
      if (user) {
        setValue("name", user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : '');
        setValue("phone", user.phone || '');
      }
    } catch (error) {
      // Error is handled by the mutation
    }
  };

  // Generate time slots from 9:00 AM to 11:30 PM in 30-minute intervals
  const generateTimeSlots = (selectedDate = null) => {
    const slots = [];
    const now = new Date();
    const isToday = selectedDate && new Date(selectedDate).toDateString() === now.toDateString();
    
    // Morning to evening slots (9 AM to 11:30 PM)
    for (let hour = 9; hour < 24; hour++) {
      // Add full hour slot (e.g., 09:00, 10:00, 11:00, ..., 23:00)
      const fullHourSlot = `${hour.toString().padStart(2, '0')}:00`;
      
      // Add half hour slot (e.g., 09:30, 10:30, 11:30, ..., 23:30)
      const halfHourSlot = `${hour.toString().padStart(2, '0')}:30`;
      
      if (isToday) {
        // For today, only show future time slots
        const fullHourTime = new Date();
        fullHourTime.setHours(hour, 0, 0, 0);
        
        const halfHourTime = new Date();
        halfHourTime.setHours(hour, 30, 0, 0);
        
        if (fullHourTime > now) {
          slots.push(fullHourSlot);
        }
        if (halfHourTime > now) {
          slots.push(halfHourSlot);
        }
      } else {
        // For future dates, show all slots
        slots.push(fullHourSlot);
        slots.push(halfHourSlot);
      }
    }
    
    return slots;
  };

  const servicesData = [
    {
      id: "hair",
      title: "Hair Services",
      services: [
        { name: "Haircut", price: 50 },
        { name: "Haircut (with Style)", price: 70 },
        { name: "Hair Color (Ordinary)", price: 350 },
        { name: "Hair Color (Organic)", price: 500 },
        { name: "Special Color (with Amonia)", price: 600 },
        { name: "Hair Color (with Brazilian Treatment)", price: 1000 },
        { name: "Brazilian Treatment (Organic)", price: 700 },
        { name: "Special Brazilian Treatment", price: 1200 },
        { name: "Rebond (Organic)", price: 700 },
        { name: "Rebond (with Semi Di Lina)", price: 1000 },
        { name: "Rebond (with Hair Color and Brazilian Treatment)", price: 1800 },
      ],
    },
    {
      id: "nails",
      title: "Nail Services",
      services: [
        { name: "Manicure", price: 60 },
        { name: "Pedicure", price: 70 },
        { name: "Nail Art", price: 50 },
        { name: "Parrafin Hand", price: 150 },
        { name: "Parrafin Foot", price: 200 },
        { name: "Gel Polish", price: 300 },
        { name: "Manicure & Pedicure (with Footspa)", price: 300 },
        { name: "Manicure & Handspa (with Whitening Mask)", price: 300 },
        { name: "Manicure & Pedicure (w/ Footspa Detox & Whitening)", price: 500 },
        { name: "Manicure & Pedicure (with Signature Footspa)", price: 500 },
        { name: "Nail Extension Polygel", price: 999 },
      ],
    },
    {
      id: "massage",
      title: "Massage & Bleaching",
      services: [
        { name: "Basic Massage (1 hour)", price: 300 },
        { name: "Swedish Whole Body (1 hour)", price: 350 },
        { name: "Thai Whole Body (1 hour)", price: 350 },
        { name: "Stone Whole Body (1 hour)", price: 350 },
        { name: "Signature Whole Body (1.5 hour)", price: 450 },
        { name: "Whole Body Scrub With Bleaching", price: 500 },
      ],
    },
    {
      id: "facial",
      title: "Facial & Eyelash",
      services: [
        { name: "Regular Facial with Vitamin C", price: 300 },
        { name: "Facial with Skin Scrubber", price: 330 },
        { name: "Facial with Diamond Peel", price: 350 },
        { name: "Facial with Galvanic Spa", price: 400 },
        { name: "Facial with Lifting", price: 400 },
        { name: "Eyelash Perm", price: 300 },
        { name: "Russian Volume (Human Hair) 3D Applying", price: 500 },
      ],
    },
    {
      id: "ipl",
      title: "IPL Hair Removal & Waxing",
      services: [
        { name: "Under Arms", price: 300 },
        { name: "Under Arms Package (10 sessions)", price: 2200 },
        { name: "Leg (1 session)", price: 1200 },
        { name: "Underarm Waxing", price: 200 },
        { name: "Brazilian Waxing", price: 500 },
      ],
    },
    {
      id: "warts",
      title: "Warts Removal",
      services: [
        { name: "Face", price: 500 },
        { name: "Neck", price: 700 },
        { name: "Chest", price: 750 },
        { name: "Back", price: 1000 },
        { name: "Whole Body", price: 2500 },
        { name: "Face & Neck with Healing Cream + Honey Cleansing Milk Package", price: 1600 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-gray-100/50 to-gray-200/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6 animate-fade-in">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-600 animate-fade-in-delay">
            Make an Appointment
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-delay">
            Schedule your visit to Rose Heavenly Salon and Spa today
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft animate-fade-in-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Book Now!
              </h2>
              <p className="text-gray-600">Fill out the form below to schedule your visit</p>
              {user && (
                <div className="mt-3 inline-block bg-green-50 border border-green-200 rounded-lg px-4 py-2">
                  <p className="text-sm text-green-600">
                    ✓ Logged in as {user.email} - Your booking will be saved to your account
                  </p>
                </div>
              )}
              {!user && (
                <div className="mt-3 inline-block bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                  <p className="text-sm text-blue-600">
                    💡 <Link href="/login" className="text-blue-700 underline">Login</Link> to save bookings to your account
                  </p>
                </div>
              )}
              
              {/* Booking Information */}
              <div className="mt-4 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
                <h3 className="text-sm font-medium text-amber-800 mb-2">📅 Booking Information</h3>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Business Hours: Monday to Friday, 9:00 AM - 11:30 PM</li>
                  <li>• Closed on weekends (Saturday & Sunday)</li>
                  <li>• Maximum booking window: 1 year in advance</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Phone *
                    </label>
                    <input 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        {...register("phone", { 
                          required: "Phone number is required",
                          minLength: {
                            value: 10,
                            message: "Phone number must be at least 10 digits"
                          }
                        })}
                        className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Date *
                    </label>
                    <input 
                      type="date" 
                      {...register("date", { 
                        required: "Date is required",
                        validate: (value) => {
                          const selectedDate = new Date(value);
                          const now = new Date();
                          now.setHours(0, 0, 0, 0);
                          
                          if (selectedDate < now) {
                            return "Cannot book appointments in the past";
                          }
                          
                          // Prevent weekend bookings (Saturday = 6, Sunday = 0)
                          const dayOfWeek = selectedDate.getDay();
                          if (dayOfWeek === 0 || dayOfWeek === 6) {
                            return "We are closed on weekends";
                          }
                          
                          return true;
                        }
                      })}
                      onChange={(e) => handleDateChange(e.target.value)}
                      min={new Date().toISOString().split('T')[0]} // Prevent past dates
                      max={new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // Max 1 year in future
                      className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 ${
                        errors.date ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Time *
                    </label>
                    <select 
                      {...register("time", { 
                        required: "Time is required",
                        validate: (value) => {
                          if (!value) return "Time is required";
                          
                          const [hours, minutes] = value.split(':').map(Number);
                          
                          // Check if time is within business hours (9 AM to 11:30 PM)
                          if (hours < 9 || hours >= 24) {
                            return "Please select a time between 9:00 AM and 11:30 PM";
                          }
                          
                          return true;
                        }
                      })}
                      className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 ${
                        errors.time ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a time</option>
                      {generateTimeSlots(selectedDate).length > 0 ? (
                        generateTimeSlots(selectedDate).map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))
                      ) : (
                        <option value="" disabled>No available times for today</option>
                      )}
                    </select>
                    {errors.time && (
                      <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                    )}
                                          <p className="text-xs text-gray-500 mt-1">
                        Business hours: 9:00 AM - 12:00 AM
                      </p>
                  </div>
                </div>
              </div>

                            {/* Services Selection */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <label className="block text-lg font-medium text-gray-700">
                    Select Services *
                  </label>
                  {totalPrice > 0 && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
                      <span className="text-gray-600 font-semibold">
                        Total: ₱{totalPrice.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Selected Services Display */}
                {selectedServices.length > 0 && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-3">Selected Services:</h4>
                    <div className="space-y-2">
                      {selectedServices.map((service) => (
                        <div key={service.key} className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200">
                          <div>
                            <span className="font-medium text-gray-800">{service.category}: {service.name}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <span className="font-semibold text-gray-600">₱{service.price}</span>
                            <button
                              type="button"
                              onClick={() => removeService(service.key)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Service Selection Dropdowns */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="font-medium text-gray-700 mb-4">Add New Service:</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    {/* Category Dropdown */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Select Category
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Choose a category</option>
                        {servicesData.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Service Dropdown */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Select Service
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => handleServiceChange(e.target.value)}
                        disabled={!selectedCategory}
                        className={`w-full px-4 py-3 border rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-300 ${
                          !selectedCategory ? 'border-gray-200 bg-gray-50' : 'border-gray-300'
                        }`}
                      >
                        <option value="">
                          {selectedCategory ? 'Choose a service' : 'Select category first'}
                        </option>
                        {getServicesForCategory().map((service) => (
                          <option key={service.name} value={service.name}>
                            {service.name} - ₱{service.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Add Button */}
                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={addService}
                        disabled={!selectedCategory || !selectedService}
                        className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add Service
                      </button>
                    </div>
                  </div>

                  {/* Service Preview */}
                  {selectedCategory && selectedService && (
                    <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <span className="font-medium">Preview:</span> {selectedService} - ₱
                        {getServicesForCategory().find(s => s.name === selectedService)?.price}
                      </p>
                    </div>
                  )}
                </div>
                
                {selectedServices.length === 0 && (
                  <p className="text-red-500 text-sm">Please select at least one service.</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  disabled={createBooking.isPending || selectedServices.length === 0}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {createBooking.isPending ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Booking...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Book Appointment
                      {totalPrice > 0 && (
                        <span className="ml-2 bg-white/20 px-2 py-1 rounded-lg">
                          ₱{totalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  )}
                </button>
                {selectedServices.length === 0 && (
                  <p className="text-gray-500 text-sm mt-2">Please select at least one service to continue</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


