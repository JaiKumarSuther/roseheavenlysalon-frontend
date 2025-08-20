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
      overlay: "from-black/60 via-black/40 to-black/60"
    },
    {
      image: "/images/home-slider-3.jpg",
      title: "Professional Beauty Services",
      subtitle: "From hair styling to nail art, we provide comprehensive beauty solutions with expert care.",
      overlay: "from-black/50 via-black/30 to-black/50"
    },
    {
      image: "/images/home-slider-5.jpg",
      title: "Luxury Salon Experience",
      subtitle: "Indulge in premium beauty treatments in our elegant and relaxing salon environment.",
      overlay: "from-black/60 via-black/40 to-black/60"
    },
    {
      image: "/images/chairs.jpg",
      title: "Expert Stylists",
      subtitle: "Our team of experienced professionals is dedicated to making you look and feel your absolute best.",
      overlay: "from-black/60 via-black/40 to-black/60"
    },
    {
      image: "/images/spatable2.jpeg",
      title: "Relaxing Treatments",
      subtitle: "Unwind with our therapeutic massage and facial services designed for ultimate relaxation.",
      overlay: "from-black/50 via-black/30 to-black/50"
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
      icon: "💝",
      title: "Special Offers",
      description: "Regular promotions and loyalty rewards"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slideshow Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Slideshow Background */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`}></div>
          </div>
        ))}

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            {slides[currentSlide].title.split(' ').map((word, index) => 
              index === 1 ? (
                <span key={index} className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  {word}{' '}
                </span>
              ) : (
                <span key={index}>{word}{' '}</span>
              )
            )}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed animate-slide-up">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/schedule" className="btn-primary text-lg px-8 py-4">
              Book Appointment
            </Link>
            <Link href="/package" className="btn-secondary text-lg px-8 py-4">
              View Services
            </Link>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPreviousSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional beauty services with a commitment to quality, 
              professionalism, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card p-8 text-center group hover:bg-gradient-to-br hover:from-rose-50 hover:to-pink-50 transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services 
              designed to make you look and feel your best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card overflow-hidden group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-rose-600">
                      {service.price}
                    </span>
                    <Link 
                      href="/schedule" 
                      className="text-rose-600 hover:text-rose-700 font-medium text-sm transition-colors"
                    >
                      Book Now →
                    </Link>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-rose-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/package" className="btn-primary text-lg px-8 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-rose-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-800">
                About Rose Heavenly
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Rose Heavenly Salon, your premier destination for beauty and wellness 
                services in Tarlac. We are passionate about helping our clients look and feel 
                their absolute best through our comprehensive range of professional beauty services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experienced stylists and beauty professionals are dedicated to 
                providing you with personalized attention and exceptional results. We use only 
                the finest products and latest techniques to ensure your complete satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More
                </Link>
                <Link href="/schedule" className="btn-secondary">
                  Book Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-large">
                <Image
                  src="/images/spatable2.jpeg"
                  alt="Salon Interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-rose-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-pink-600/20 opacity-50"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the difference that professional 
            beauty services can make in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="bg-white text-rose-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-large">
              Book Appointment
            </Link>
            <Link href="/package" className="border-2 border-white text-white hover:bg-white hover:text-rose-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


