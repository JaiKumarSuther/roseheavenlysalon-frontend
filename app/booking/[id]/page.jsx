"use client";
import { useParams, useRouter } from "next/navigation";
import { useGetUser, useGetMyBookings } from "../../../lib/hooks";
import useAuthStore from "../../../lib/auth-store";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function BookingDetail() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated, initialize } = useAuthStore();
  const { data: user } = useGetUser();
  const { data: bookings } = useGetMyBookings();
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialize();
    
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (bookings && params.id) {
      const foundBooking = bookings.find(b => b.id === parseInt(params.id));
      if (foundBooking) {
        setBooking(foundBooking);
      } else {
        // Booking not found or doesn't belong to user
        router.push('/account');
      }
      setIsLoading(false);
    }
  }, [isAuthenticated, bookings, params.id, router, initialize]);

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading booking details...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Not Found</h1>
          <p className="text-gray-600 mb-6">The booking you're looking for doesn't exist or you don't have permission to view it.</p>
          <Link 
            href="/account" 
            className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
          >
            Back to My Account
          </Link>
        </div>
      </div>
    );
  }

  // Parse service details from remarks if available
  const parseServiceDetails = (remarks) => {
    if (!remarks) return null;
    
    // Look for service details in remarks
    if (remarks.includes('Services:')) {
      const servicesMatch = remarks.match(/Services: (.+?)\. Total: ₱(\d+)/);
      if (servicesMatch) {
        const servicesText = servicesMatch[1];
        const totalPrice = servicesMatch[2];
        const services = servicesText.split(', ').map(service => {
          const match = service.match(/(.+): (.+) \(₱(\d+)\)/);
          if (match) {
            return {
              category: match[1],
              name: match[2],
              price: parseInt(match[3])
            };
          }
          return { name: service, price: 0 };
        });
        return { services, totalPrice: parseInt(totalPrice) };
      }
    }
    return null;
  };

  const serviceDetails = parseServiceDetails(booking.remarks);
  const bookingDate = new Date(booking.date);
  const bookingTime = new Date(booking.time);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 print:min-h-0">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden print:hidden">
        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-600">
            Booking Details
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            Complete information about your appointment
          </p>
        </div>
      </section>

             {/* Booking Details */}
       <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20 print:pb-0 print:px-0 print:-mt-0 print:pt-4">
         <div className="container mx-auto max-w-4xl print:max-w-none">
           <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft booking-print-content print:p-1 print:rounded-none print:border-none print:shadow-none">
            
                         {/* Back Button */}
             <div className="mb-6 no-print">
               <Link 
                 href="/account" 
                 className="inline-flex items-center text-gray-600 hover:text-gray-700 transition-colors duration-200"
               >
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
                 Back to My Account
               </Link>
             </div>

                         {/* Booking Status */}
             <div className="mb-8">
               <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                 <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                 Confirmed
               </div>
             </div>

                           {/* Print Header */}
              <div className="print-booking-header">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmation</h1>
                <p className="text-gray-600">Rose Heavenly Salon & Spa</p>
              </div>
              
              {/* Print-Only Header */}
              <div className="hidden print:block print-booking-header">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmation</h1>
                <p className="text-gray-600">Rose Heavenly Salon & Spa</p>
                <p className="text-sm text-gray-500">Booking ID: #{booking.id}</p>
              </div>

                         {/* Main Booking Information */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
               {/* Customer Information */}
               <div className="space-y-4 print-booking-section">
                 <h2 className="text-xl font-bold text-gray-800 mb-4">Customer Information</h2>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Name:</span>
                     <span className="text-gray-800">{booking.name}</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Email:</span>
                     <span className="text-gray-800">{booking.email}</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Phone:</span>
                     <span className="text-gray-800">{booking.phone}</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Booking ID:</span>
                     <span className="text-gray-800 font-mono">#{booking.id}</span>
                   </div>
                 </div>
               </div>

                             {/* Appointment Information */}
               <div className="space-y-4 print-booking-section">
                 <h2 className="text-xl font-bold text-gray-800 mb-4">Appointment Details</h2>
                 <div className="space-y-3">
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Date:</span>
                     <span className="text-gray-800">{bookingDate.toLocaleDateString('en-US', { 
                       weekday: 'long', 
                       year: 'numeric', 
                       month: 'long', 
                       day: 'numeric' 
                     })}</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Time:</span>
                     <span className="text-gray-800">{bookingTime.toLocaleTimeString('en-US', { 
                       hour: 'numeric', 
                       minute: '2-digit',
                       hour12: true 
                     })}</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Duration:</span>
                     <span className="text-gray-800">~1-2 hours</span>
                   </div>
                   <div className="flex justify-between items-center py-2 border-b border-gray-100 print-booking-info">
                     <span className="font-medium text-gray-600">Status:</span>
                     <span className="text-green-600 font-medium">Active</span>
                   </div>
                 </div>
               </div>
            </div>

                         {/* Services Information */}
             <div className="mb-8 print-booking-section">
               <h2 className="text-xl font-bold text-gray-800 mb-4">Services</h2>
              
              {serviceDetails ? (
                <div className="space-y-4">
                  {/* Detailed Services */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-3">Selected Services</h3>
                                         <div className="space-y-2">
                       {serviceDetails.services.map((service, index) => (
                         <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0 print-service-item">
                           <div>
                             <span className="font-medium text-gray-800">{service.category}: </span>
                             <span className="text-gray-600">{service.name}</span>
                           </div>
                           <span className="font-semibold text-gray-600">₱{service.price.toLocaleString()}</span>
                         </div>
                       ))}
                     </div>
                     <div className="mt-4 pt-3 border-t border-gray-200 print-total">
                       <div className="flex justify-between items-center">
                         <span className="font-bold text-gray-800">Total Amount:</span>
                         <span className="font-bold text-xl text-gray-600">₱{serviceDetails.totalPrice.toLocaleString()}</span>
                       </div>
                     </div>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium text-gray-800">Primary Service:</span>
                      <span className="text-gray-600">{booking.service1}</span>
                    </div>
                    {booking.service2 && (
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium text-gray-800">Additional Service:</span>
                        <span className="text-gray-600">{booking.service2}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

                         {/* Additional Information */}
             <div className="mb-8 print-booking-section">
               <h2 className="text-xl font-bold text-gray-800 mb-4">Additional Information</h2>
                             <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 print:p-2 print:bg-white print:border-gray-300">
                 <div className="space-y-2 text-sm print:text-xs print:space-y-1">
                  <p className="text-blue-800">
                    <span className="font-medium">Booking Created:</span> {new Date(booking.createdAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true 
                    })}
                  </p>
                  <p className="text-blue-800">
                    <span className="font-medium">Last Updated:</span> {new Date(booking.updatedAt).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true 
                    })}
                  </p>
                  {booking.remarks && (
                    <p className="text-blue-800">
                      <span className="font-medium">Notes:</span> {booking.remarks}
                    </p>
                  )}
                </div>
              </div>
            </div>

                         {/* Action Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center no-print">
               <Link 
                 href="/schedule" 
                 className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200 text-center"
               >
                 Book Another Appointment
               </Link>
               <button 
                 className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                 onClick={() => window.print()}
               >
                 Print Details
               </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
