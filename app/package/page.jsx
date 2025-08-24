import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      id: "hair",
      title: "Hair Services",
      image: "/images/hairservice.jpg",
      services: [
        "Haircut - ₱50",
        "Haircut (with Style) - ₱70", 
        "Hair Color (Ordinary) - ₱350",
        "Hair Color (Organic) - ₱500",
        "Special Color (with Amonia) - ₱600",
        "Hair Color (with Brazilian Treatment) - ₱1000",
        "Brazilian Treatment (Organic) - ₱700",
        "Special Brazilian Treatment - ₱1200",
        "Rebond (Organic) - ₱700",
        "Rebond (with Semi Di Lina) - ₱1000",
        "Rebond (with Hair Color and Brazilian Treatment) - ₱1800",
      ],
    },
    {
      id: "nails",
      title: "Nail Services",
      image: "/images/nailservice.jpg",
      services: [
        "Manicure - ₱60",
        "Pedicure - ₱70",
        "Nail Art - ₱50*",
        "Parrafin Hand - ₱150",
        "Parrafin Foot - ₱200",
        "Gel Polish - ₱300",
        "Manicure & Pedicure (with Footspa) - ₱300",
        "Manicure & Handspa (with Whitening Mask) - ₱300",
        "Manicure & Pedicure (w/ Footspa Detox & Whitening) - ₱500",
        "Manicure & Pedicure (with Signature Footspa) - ₱500",
        "Nail Extension Polygel - ₱999",
      ],
    },
    {
      id: "massage",
      title: "Massage & Bleaching",
      image: "/images/massageservice.jpg",
      services: [
        "Basic Massage (1 hour) - ₱300",
        "Swedish Whole Body (1 hour) - ₱350",
        "Thai Whole Body (1 hour) - ₱350",
        "Stone Whole Body (1 hour) - ₱350",
        "Signature Whole Body (1.5 hour) - ₱450",
        "Whole Body Scrub With Bleaching - ₱500",
      ],
    },
    {
      id: "facial",
      title: "Facial & Eyelash",
      image: "/images/facialservice.jpg",
      services: [
        "Regular Facial with Vitamin C - ₱300",
        "Facial with Skin Scrubber - ₱330",
        "Facial with Diamond Peel - ₱350",
        "Facial with Galvanic Spa - ₱400",
        "Facial with Lifting - ₱400",
        "Eyelash Perm - ₱300",
        "Russian Volume (Human Hair) 3D Applying - ₱500",
      ],
    },
    {
      id: "ipl",
      title: "IPL Hair Removal & Waxing",
      image: "/images/IPLservices.jpg",
      services: [
        "Under Arms - ₱300",
        "Under Arms Package (10 sessions) - ₱2200",
        "Leg (1 session) - ₱1200",
        "Underarm Waxing - ₱200",
        "Brazilian Waxing - ₱500",
      ],
    },
    {
      id: "warts",
      title: "Warts Removal",
      image: "/images/wartservice.jpg",
      services: [
        "Face - ₱500",
        "Neck - ₱700",
        "Chest - ₱750",
        "Back - ₱1000",
        "Whole Body - ₱2500",
        "Face & Neck with Healing Cream + Honey Cleansing Milk Package - ₱1600",
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
                      <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-600 animate-fade-in-delay">
            Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-delay">
            Discover our comprehensive range of beauty and wellness services designed to enhance your natural beauty
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${service.image}')`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Service Count Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">
                      {service.services.length} Services
                    </span>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Category Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Services Preview */}
                  <div className="space-y-2 mb-6">
                    {service.services.slice(0, 3).map((serviceItem, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        <span>{serviceItem}</span>
                      </div>
                    ))}
                    {service.services.length > 3 && (
                      <div className="text-sm text-gray-600 font-medium">
                        +{service.services.length - 3} more services
                      </div>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-between w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105"
                  >
                    <span>View All Services</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center border border-gray-200">
          <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today to schedule your beauty and wellness session. Our team is ready to help you look and feel your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/schedule" 
                className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Book Appointment
              </Link>
              <Link 
                href="tel:+639683123303" 
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center"
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


