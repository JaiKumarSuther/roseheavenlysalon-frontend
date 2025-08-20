import Image from "next/image";
import Link from "next/link";

export default function About() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-rose-600 animate-fade-in-delay">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-delay">
            Learn more about Rose Heavenly Salon and Spa's story and commitment to excellence
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft">
            {/* Our Story */}
            <div className="mb-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                  Our Story
                </h2>
                <div className="bg-gradient-card rounded-2xl p-8 border border-primary/10 shadow-soft">
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Rose Heavenly Salon and Spa opened to the public on <strong>December 8, 2020</strong>, in Dapdap, Bamban, Tarlac, 
                    in conjunction with the Feast of the Immaculate Conception of Our Mother, Mary.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to providing an exceptional experience for our customers. We have a passion for 
                    making people feel beautiful, relaxed, and refreshed! Our goal is to provide a relaxing environment 
                    that you can enjoy from Tuesday to Sunday from 8am to 8pm.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Our Beautiful Salon
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Take a tour of our elegant and relaxing salon environment
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group animate-fade-in-up">
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('/images/spatable2.jpeg')`
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg drop-shadow-lg">Spa Treatment Area</h3>
                      <p className="text-white/90 text-sm drop-shadow-lg">Relaxing massage and treatment rooms</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('/images/chairs.jpg')`
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg drop-shadow-lg">Hair Styling Area</h3>
                      <p className="text-white/90 text-sm drop-shadow-lg">Professional hair care and styling</p>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('/images/header-bg-1.png')`
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg drop-shadow-lg">Nail Care Station</h3>
                      <p className="text-white/90 text-sm drop-shadow-lg">Complete nail care and beautification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive beauty and wellness services to enhance your natural beauty
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: "💇‍♀️",
                    title: "Hair Services",
                    description: "Professional hair care, styling, coloring, and treatments"
                  },
                  {
                    icon: "💅",
                    title: "Nail Services",
                    description: "Complete nail care, manicure, pedicure, and nail art"
                  },
                  {
                    icon: "🧖‍♀️",
                    title: "Facial & Eyelash",
                    description: "Advanced facial treatments and eyelash services"
                  },
                  {
                    icon: "💆‍♀️",
                    title: "Massage & Bleaching",
                    description: "Relaxing massage and skin bleaching treatments"
                  },
                  {
                    icon: "⚡",
                    title: "IPL Hair Removal",
                    description: "Professional hair removal and waxing services"
                  },
                  {
                    icon: "🔬",
                    title: "Warts Removal",
                    description: "Safe and effective wart removal treatments"
                  }
                ].map((service, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 border border-gray-100 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
                Visit Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                  <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-600">Dapdap, Bamban, Tarlac</p>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                  <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Hours</h3>
                  <p className="text-gray-600">Tuesday - Sunday<br />8:00 AM - 8:00 PM</p>
                </div>

                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                  <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
                  <p className="text-gray-600">+63 968 312 3303</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


