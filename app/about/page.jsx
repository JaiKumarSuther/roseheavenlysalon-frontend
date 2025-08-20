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
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-rose-600">
            About Us
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
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
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group">
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: "url('/images/chairs.jpg')"
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">Styling Area</h3>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group">
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: "url('/images/spatable2.jpeg')"
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">Spa Treatment Room</h3>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group">
                  <div className="aspect-[4/3]">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: "url('/images/front.jpg')"
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg">Salon Entrance</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* About Containers */}
            <div className="space-y-16">
              {/* Why Choose Us */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <div 
                    className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/about-2.jpg')"
                    }}
                  ></div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800">
                    Why Choose Us?
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We are committed to providing an exceptional experience for our customers. We have a passion for 
                    making people feel beautiful, relaxed and refreshed! Our goal is to provide a relaxing environment 
                    that you can enjoy from Tuesday to Sunday from 8am to 8pm.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 lg:order-1">
                  <h3 className="text-3xl font-bold text-gray-800">
                    Mission
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission is to create an environment that promotes healing, wellness, relaxation and beauty. 
                    We strive to offer the highest quality of service, in a private, relaxing atmosphere where people 
                    can come for beauty and rejuvenation needs.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-elegant order-1 lg:order-2">
                  <div 
                    className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/about-m.jpg')"
                    }}
                  ></div>
                </div>
              </div>

              {/* Vision */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                  <div 
                    className="w-full h-[500px] bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: "url('/images/about-v.jpg')"
                    }}
                  ></div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800">
                    Vision
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our vision is to help people look good and feel good about themselves by providing high quality 
                    services at reasonable prices in a clean and comfortable environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Preview */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We offer a comprehensive range of beauty and wellness services
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group">
                  <div className="aspect-square">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: "url('/images/hairservice.jpg')"
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">Hair Services</h3>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group">
                  <div className="aspect-square">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: "url('/images/nailservice.jpg')"
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">Nail Services</h3>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group">
                  <div className="aspect-square">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: "url('/images/facialservice.jpg')"
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">Facial Services</h3>
                    </div>
                  </div>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-large transition-all duration-300 group">
                  <div className="aspect-square">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: "url('/images/massageservice.jpg')"
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">Massage Services</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center bg-gradient-card rounded-2xl p-8 border border-primary/10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Experience the Rose Heavenly Difference
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied customers who have experienced our exceptional beauty and wellness services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/schedule" className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Book Your Visit
                </Link>
                <Link href="/package" className="bg-white text-gray-800 border border-rose-200 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


