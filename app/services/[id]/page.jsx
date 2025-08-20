import Link from "next/link";
import Image from "next/image";

export default function ServiceDetail({ params }) {
  const services = {
    hair: {
      title: "Hair Services",
      image: "/images/hairservice.jpg",
      description: "Professional hair care and styling services",
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
    nails: {
      title: "Nail Services",
      image: "/images/nailservice.jpg",
      description: "Complete nail care and beautification",
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
    massage: {
      title: "Massage & Bleaching",
      image: "/images/massageservice.jpg",
      description: "Relaxing massage and skin treatments",
      services: [
        "Basic Massage (1 hour) - ₱300",
        "Swedish Whole Body (1 hour) - ₱350",
        "Thai Whole Body (1 hour) - ₱350",
        "Stone Whole Body (1 hour) - ₱350",
        "Signature Whole Body (1.5 hour) - ₱450",
        "Whole Body Scrub With Bleaching - ₱500",
      ],
    },
    facial: {
      title: "Facial & Eyelash",
      image: "/images/facialservice.jpg",
      description: "Advanced facial treatments and eyelash services",
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
    ipl: {
      title: "IPL Hair Removal & Waxing",
      image: "/images/IPLservices.jpg",
      description: "Professional hair removal and waxing services",
      services: [
        "Under Arms - ₱300",
        "Under Arms Package (10 sessions) - ₱2200",
        "Leg (1 session) - ₱1200",
        "Underarm Waxing - ₱200",
        "Brazilian Waxing - ₱500",
      ],
    },
    warts: {
      title: "Warts Removal",
      image: "/images/wartservice.jpg",
      description: "Safe and effective wart removal treatments",
      services: [
        "Face - ₱500",
        "Neck - ₱700",
        "Chest - ₱750",
        "Back - ₱1000",
        "Whole Body - ₱2500",
        "Face & Neck with Healing Cream + Honey Cleansing Milk Package - ₱1600",
      ],
    },
  };

  const service = services[params.id];

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <Link href="/package" className="bg-rose-500 text-white px-6 py-3 rounded-xl hover:bg-rose-600 transition-colors">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl animate-fade-in">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 shadow-soft">
            {/* Back Button */}
            <div className="mb-6">
              <Link 
                href="/package" 
                className="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2 hover:-translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Services
              </Link>
            </div>

            {/* Service Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url('${service.image}')`
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2 drop-shadow-lg">{service.title}</h1>
                  <p className="text-white/90 text-lg drop-shadow-lg">{service.description}</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200 hover:scale-[1.02] transition-transform duration-300">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Overview</h2>
                  <div className="space-y-3">
                    {[
                      `${service.services.length} different services available`,
                      "Professional and experienced staff",
                      "High-quality products and equipment",
                      "Comfortable and clean environment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-3 h-3 bg-rose-400 rounded-full mr-3 hover:scale-125 transition-transform duration-200"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services List */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Services & Prices</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.services.map((serviceItem, index) => {
                  const [serviceName, price] = serviceItem.split(' - ');
                  return (
                    <div 
                      key={index} 
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-rose-50 transition-colors duration-200 border border-gray-100 hover:translate-x-1 hover:scale-[1.02] transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-rose-400 rounded-full hover:scale-150 transition-transform duration-200"></div>
                        <span className="text-gray-700 font-medium">{serviceName}</span>
                      </div>
                      <span className="text-lg font-bold text-rose-600 hover:scale-110 transition-transform duration-200">
                        {price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Book Your {service.title}?</h3>
              <p className="text-gray-600 mb-6">Contact us to schedule your appointment or learn more about our services.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <div className="hover:scale-105 transition-transform duration-200">
                  <Link 
                    href="/schedule" 
                    className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Book Appointment
                  </Link>
                </div>
                <div className="hover:scale-105 transition-transform duration-200">
                  <Link 
                    href="tel:+639683123303" 
                    className="bg-white text-gray-800 border-2 border-rose-200 px-6 py-3 rounded-xl font-semibold hover:bg-rose-50 hover:border-rose-300 transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us
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
