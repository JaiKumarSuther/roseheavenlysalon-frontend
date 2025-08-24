"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/home-slider-2.jpg",
      title: "Your Hair Beautifully",
      subtitle: "Experience luxury and relaxation at Rose Heavenly Salon. Where beauty meets excellence in every service.",
      overlay: "from-black/30 via-black/10 to-black/30"
    },
    {
      image: "/images/home-slider-3.jpg",
      title: "Professional Beauty Services",
      subtitle: "From hair styling to nail art, we provide comprehensive beauty solutions with expert care.",
      overlay: "from-black/20 via-black/5 to-black/20"
    },
    {
      image: "/images/home-slider-5.jpg",
      title: "Luxury Salon Experience",
      subtitle: "Indulge in premium beauty treatments in our elegant and relaxing salon environment.",
      overlay: "from-black/30 via-black/10 to-black/30"
    },
    {
      image: "/images/chairs.jpg",
      title: "Expert Stylists",
      subtitle: "Our team of experienced professionals is dedicated to making you look and feel your absolute best.",
      overlay: "from-black/30 via-black/10 to-black/30"
    },
    {
      image: "/images/spatable2.jpeg",
      title: "Relaxing Treatments",
      subtitle: "Unwind with our therapeutic massage and facial services designed for ultimate relaxation.",
      overlay: "from-black/20 via-black/5 to-black/20"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const services = [
    {
      title: "Hair Services",
      description: "Professional cuts, colors, and styling",
      image: "/images/hairservice.jpg",
      price: "₱500+",
      features: ["Haircut & Styling", "Hair Coloring", "Hair Treatment", "Extensions"]
    },
    {
      title: "Nail Services",
      description: "Manicures, pedicures, and nail art",
      image: "/images/nailservice.jpg",
      price: "₱300+",
      features: ["Manicure", "Pedicure", "Nail Art", "Gel Polish"]
    },
    {
      title: "Facial Services",
      description: "Rejuvenating facials and treatments",
      image: "/images/facialservice.jpg",
      price: "₱800+",
      features: ["Deep Cleansing", "Anti-Aging", "Acne Treatment", "Moisturizing"]
    },
    {
      title: "Massage Services",
      description: "Relaxing massage therapies",
      image: "/images/massageservice.jpg",
      price: "₱600+",
      features: ["Swedish Massage", "Deep Tissue", "Hot Stone", "Aromatherapy"]
    }
  ];

  const features = [
    {
      icon: "✨",
      title: "Premium Quality",
      description: "Using only the finest products and techniques"
    },
    {
      icon: "👩‍🎨",
      title: "Expert Stylists",
      description: "Experienced professionals with years of expertise"
    },
    {
      icon: "🌟",
      title: "Luxury Experience",
      description: "Relaxing atmosphere with personalized attention"
    },
    {
      icon: "💎",
      title: "Modern Equipment",
      description: "State-of-the-art facilities and equipment"
    }
  ];

  const galleryImages = [
    "/images/image-1.jpg",
    "/images/image-2.jpg", 
    "/images/image-3.jpg",
    "/images/image-4.jpg",
    "/images/image-5.jpg",
    "/images/image-6.jpg"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/10 via-gray-100/10 to-gray-200/10 z-10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-40 animate-bounce z-20 shadow-lg"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full opacity-40 animate-pulse z-20 shadow-lg"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full opacity-40 animate-bounce z-20 shadow-lg" style={{ animationDelay: '1s' }}></div>

        {/* Slider */}
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image}')` }}
              ></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay} opacity-40`}></div>
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative z-30 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto">
              <div className="animate-fade-in">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full opacity-20 animate-ping"></div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-delay" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0px 0px 10px rgba(0,0,0,0.5)' }}>
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-3xl mx-auto animate-fade-in-delay" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7), 0px 0px 8px rgba(0,0,0,0.4)' }}>
                {slides[currentSlide].subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
                <Link
                  href="/schedule"
                  className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center border border-white/20"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Book Appointment
                </Link>
                <Link
                  href="/package"
                  className="bg-white/30 backdrop-blur-sm text-white border-2 border-white/50 px-8 py-4 rounded-xl font-semibold hover:bg-white/40 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  View Services
                </Link>
              </div>
            </div>
          </div>

          {/* Slider Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Slider Arrows */}
          <button
            onClick={goToPreviousSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">{service.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/package"
                    className="inline-block mt-6 w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl text-center group-hover:scale-105"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference with our commitment to excellence and personalized care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-gray-500 to-gray-600">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Look?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the Rose Heavenly difference
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link
                href="/schedule"
                className="bg-white text-gray-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Book Now
              </Link>
              <Link
                href="tel:+639683123303"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


