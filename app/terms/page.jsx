import Link from "next/link";

export default function Terms() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-rose-600 animate-fade-in-delay">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-delay">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 px-4 -mt-10 md:-mt-16 relative z-20">
        <div className="container mx-auto max-w-full">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 border border-white/20 shadow-soft">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing and using the Rose Heavenly Salon and Spa website and services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Description</h2>
                  <p className="text-gray-700 mb-4">
                    Rose Heavenly Salon and Spa provides beauty and wellness services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Hair care and styling services</li>
                    <li>Nail care and beautification</li>
                    <li>Facial treatments and eyelash services</li>
                    <li>Massage and skin treatments</li>
                    <li>IPL hair removal services</li>
                    <li>Wart removal treatments</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Booking and Cancellation Policy</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>Booking:</strong> Appointments can be made through our website, phone, or in-person. We recommend booking in advance to ensure availability.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Cancellation:</strong> We require at least 24 hours notice for appointment cancellations. Late cancellations or no-shows may result in a cancellation fee.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Payment Terms</h2>
                  <p className="text-gray-700 mb-4">
                    Payment is due at the time of service. We accept cash and digital payments. Prices are subject to change without prior notice.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Health and Safety</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>Client Health:</strong> Please inform us of any medical conditions, allergies, or medications that may affect your treatment.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Hygiene Standards:</strong> We maintain strict hygiene standards and use professional-grade products and equipment.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Liability and Disclaimers</h2>
                  <p className="text-gray-700 mb-4">
                    While we strive to provide the highest quality services, Rose Heavenly Salon and Spa is not liable for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Allergic reactions to products used</li>
                    <li>Results that may vary from person to person</li>
                    <li>Any complications arising from undisclosed medical conditions</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Privacy and Data Protection</h2>
                  <p className="text-gray-700 mb-4">
                    We are committed to protecting your privacy. Personal information collected is used solely for service provision and will not be shared with third parties without your consent.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Code of Conduct</h2>
                  <p className="text-gray-700 mb-4">
                    We maintain a professional and respectful environment. Any inappropriate behavior may result in service refusal and potential legal action.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Operating Hours</h2>
                  <p className="text-gray-700 mb-4">
                    We are open Tuesday through Sunday from 8:00 AM to 8:00 PM. We are closed on Mondays and major holidays.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
                  <p className="text-gray-700 mb-4">
                    For questions about these terms, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-200">
                    <p className="text-gray-700 mb-2"><strong>Phone:</strong> +63 968 312 3303</p>
                    <p className="text-gray-700 mb-2"><strong>Location:</strong> Dapdap, Bamban, Tarlac</p>
                    <p className="text-gray-700"><strong>Hours:</strong> Tuesday - Sunday, 8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <p className="text-sm text-gray-500 mb-4">
                    Last updated: December 2024
                  </p>
                  <Link 
                    href="/"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Home
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
