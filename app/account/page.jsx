"use client";
import { useGetUser, useGetMyBookings, useCreateBooking } from "../../lib/hooks";
import useAuthStore from "../../lib/auth-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQueryClient } from '@tanstack/react-query';
import Link from "next/link";

export default function Account() {
  const { isAuthenticated, token, initialize } = useAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [debugInfo, setDebugInfo] = useState('');
  const { data: user, isLoading: isLoadingUser, refetch: refetchUser, error: userError } = useGetUser();
  const { data: bookings, isLoading: isLoadingBookings, error: bookingsError, refetch: refetchBookings } = useGetMyBookings();
  const createBookingMutation = useCreateBooking();

  useEffect(() => {
    try {
      // Initialize auth store from localStorage
      initialize();
      
      // Debug information
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      setDebugInfo(`Token: ${token ? 'Present' : 'Missing'}, Stored User: ${storedUser && storedUser !== 'null' ? 'Present' : 'Missing'}, Auth: ${isAuthenticated}`);
      
      if (!isAuthenticated) {
        router.push('/login');
      } else {
        // Clear cache and force refresh user data to get latest status
        queryClient.invalidateQueries(['user']);
        refetchUser();
      }
    } catch (error) {
      console.error('Error in account page useEffect:', error);
      setDebugInfo(`Error: ${error.message}`);
    }
  }, [isAuthenticated, router, refetchUser, queryClient, initialize]);

  // Poll for booking updates every 30 seconds
  useEffect(() => {
    if (!isAuthenticated) return;

    const interval = setInterval(() => {
      refetchBookings();
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, [isAuthenticated, refetchBookings]);

  const handleRefreshData = () => {
    queryClient.invalidateQueries(['user']);
    queryClient.invalidateQueries(['bookings']);
    refetchUser();
    refetchBookings();
  };

  const handleCreateTestBooking = async () => {
    if (!user) return;
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];
    
    try {
      await createBookingMutation.mutateAsync({
        name: user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : 'Test User',
        phone: user.phone || '1234567890',
        time: '10:00',
        date: tomorrowStr,
        service1: 'Hair',
        service2: 'Haircut',
        email: user.email
      });
      
      // Refresh bookings after creating
      refetchBookings();
    } catch (error) {
      console.error('Failed to create test booking:', error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-600">
            My Account
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            Manage your profile and appointments
          </p>
        </div>
      </section>

      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Section */}
            <div className="lg:col-span-1">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
                </div>
                
                              {isLoadingUser ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500 mx-auto"></div>
                  <p className="text-gray-600 mt-2">Loading profile...</p>
                </div>
                ) : user ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <p className="text-gray-900 font-medium">
                        {user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <p className="text-gray-900">{user.email || 'Not provided'}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Phone</label>
                      <p className="text-gray-900">{user.phone || 'Not provided'}</p>
                    </div>
                    
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">Failed to load profile</p>
                    <p className="text-xs text-gray-500 mb-2">{debugInfo}</p>
                    {userError && (
                      <p className="text-xs text-red-500 mb-2">Error: {userError.message}</p>
                    )}
                    <button
                      onClick={handleRefreshData}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bookings Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 h-full backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft flex flex-col ">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">My Appointments</h2>
                  <div className="text-xs text-gray-500">
                    {isLoadingBookings ? 'Loading...' : bookings && Array.isArray(bookings) ? `${bookings.length} appointments` : 'No data'}
                  </div>
                </div>
                
                {isLoadingBookings ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500 mx-auto"></div>
                    <p className="text-gray-600 mt-2">Loading appointments...</p>
                  </div>
                ) : bookings && bookings.length > 0 ? (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <Link
                        key={booking.id}
                        href={`/booking/${booking.id}`}
                        className="block border border-gray-200 rounded-lg p-4 hover:shadow-lg hover:border-gray-300 transition-all duration-200 cursor-pointer group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-gray-800 group-hover:text-gray-600 transition-colors duration-200">
                            {booking.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 group-hover:text-gray-500 transition-colors duration-200">
                            <span>View Details</span>
                            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Date:</span> {new Date(booking.date).toLocaleDateString()}
                          </div>
                          <div>
                            <span className="font-medium">Time:</span> {new Date(booking.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                          <div>
                            <span className="font-medium">Primary Service:</span> {booking.service1}
                          </div>
                          {booking.service2 && (
                            <div>
                              <span className="font-medium">Additional Service:</span> {booking.service2}
                            </div>
                          )}
                        </div>
                        <div className="mt-3 pt-2 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Booking ID: #{booking.id}</span>
                                                                                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                booking.status === 'completed' ? 'bg-blue-100 text-blue-800' :
                                booking.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                <div className={`w-1.5 h-1.5 rounded-full mr-1 ${
                                  booking.status === 'cancelled' ? 'bg-red-400' :
                                  booking.status === 'completed' ? 'bg-blue-400' :
                                  booking.status === 'confirmed' ? 'bg-green-400' :
                                  'bg-yellow-400'
                                }`}></div>
                                {booking.status === 'cancelled' ? 'Cancelled' :
                                 booking.status === 'completed' ? 'Completed' :
                                 booking.status === 'confirmed' ? 'Confirmed' :
                                 'Pending'}
                              </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    
                    
                    {bookingsError && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-600 mb-2">Error loading appointments:</p>
                        <p className="text-xs text-red-500">{bookingsError.message}</p>
                        <p className="text-xs text-gray-500 mt-1">API URL: {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api'}</p>
                      </div>
                    )}
                    
                   
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
             
                      <Link
                        href="/schedule"
                        className="inline-block bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                      >
                        Book an Appointment
                      </Link>
            </div>
            </div>
                )}
            </div>
            </div>
            </div>
          </div>
      </section>
    </div>
  );
}


