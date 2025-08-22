"use client";
import { useGetUser, useGetMyBookings } from "../../lib/hooks";
import useAuthStore from "../../lib/auth-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useQueryClient } from '@tanstack/react-query';

export default function Account() {
  const { isAuthenticated, token, initialize } = useAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [debugInfo, setDebugInfo] = useState('');
  const { data: user, isLoading: isLoadingUser, refetch: refetchUser, error: userError } = useGetUser();
  const { data: bookings, isLoading: isLoadingBookings } = useGetMyBookings();

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

  const handleRefreshData = () => {
    queryClient.invalidateQueries(['user']);
    refetchUser();
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-rose-600">
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
                  <button
                    onClick={handleRefreshData}
                    className="text-sm bg-rose-500 text-white px-3 py-1 rounded-lg hover:bg-rose-600 transition-colors"
                  >
                    Refresh
                  </button>
                </div>
                
                {isLoadingUser ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500 mx-auto"></div>
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
                      className="bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Bookings Section */}
            <div className="lg:col-span-2">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Appointments</h2>
                
                {isLoadingBookings ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500 mx-auto"></div>
                    <p className="text-gray-600 mt-2">Loading appointments...</p>
                  </div>
                ) : bookings && bookings.length > 0 ? (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                      >
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {booking.name}
                        </h3>
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
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No appointments found</p>
                    <a
                      href="/schedule"
                      className="inline-block bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600 transition-colors duration-200"
                    >
                      Book an Appointment
                    </a>
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


