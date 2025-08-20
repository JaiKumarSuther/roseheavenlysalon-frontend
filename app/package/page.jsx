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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 lg:py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 via-pink-50/50 to-purple-50/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-20 w-6 h-6 md:w-10 md:h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full opacity-20 animate-pulse"></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 text-rose-600">
            Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
            Discover our comprehensive range of beauty and wellness treatments
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-8 md:-mt-12 relative z-20">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((category, index) => (
                <div 
                  key={category.id} 
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header with Image */}
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${category.image}')`
                      }}
                    ></div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Service Count Badge */}
                    <div className="absolute top-3 right-3">
                      <div className="bg-rose-500 text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {category.services.length} Services
                      </div>
                    </div>
                    
                    {/* Category Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{category.title}</h3>
                      <div className="w-12 h-0.5 bg-rose-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Services Preview */}
                  <div className="p-4">
                    <div className="space-y-2 mb-4">
                      {category.services.slice(0, 3).map((service, index) => {
                        const [serviceName, price] = service.split(' - ');
                        return (
                          <div 
                            key={index} 
                            className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg hover:bg-rose-50 transition-colors duration-200"
                          >
                            <span className="text-sm text-gray-700 font-medium truncate mr-2">{serviceName}</span>
                            <span className="text-sm font-bold text-rose-600 whitespace-nowrap">{price}</span>
                          </div>
                        );
                      })}
                      {category.services.length > 3 && (
                        <div className="text-center py-2">
                          <span className="text-xs text-gray-500">+{category.services.length - 3} more services</span>
                        </div>
                      )}
                    </div>
                    
                    {/* View Details Button */}
                    <Link 
                      href={`/services/${category.id}`} 
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2.5 px-4 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center text-sm"
                    >
                      View All Services
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 md:p-8 border border-rose-200 shadow-lg">
              <div className="max-w-3xl mx-auto">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                  Ready to Book Your Treatment?
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
                  The prices indicated for hair services are the starting price. Price range may vary depending on customer's hair.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/schedule" className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center hover:scale-105">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Book Your Appointment
                  </Link>
                  <Link href="/about" className="bg-white text-gray-800 border-2 border-rose-200 px-6 py-3 rounded-xl font-semibold hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center hover:scale-105">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


