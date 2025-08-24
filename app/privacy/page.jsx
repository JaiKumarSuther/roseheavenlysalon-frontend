import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-gray-100/50 to-gray-200/50"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-4 md:top-20 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-20 right-4 md:top-40 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-4 md:bottom-20 md:left-20 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-gray-300 to-gray-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="flex justify-center mb-4 md:mb-6 animate-fade-in">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-400 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-gray-600 animate-fade-in-delay">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 animate-fade-in-delay">
            How we collect, use, and protect your personal information
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
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-700 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Book appointments through our website or phone</li>
                    <li>Create an account or sign up for our services</li>
                    <li>Contact us for customer support</li>
                    <li>Provide feedback or reviews</li>
                    <li>Visit our salon and receive services</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    <strong>Personal Information:</strong> Name, email address, phone number, address, and payment information.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Health Information:</strong> Medical conditions, allergies, and treatment preferences relevant to our services.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Provide and improve our beauty and wellness services</li>
                    <li>Process appointments and payments</li>
                    <li>Send appointment reminders and confirmations</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send promotional offers and updates (with your consent)</li>
                    <li>Ensure your safety during treatments</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our business (e.g., payment processors, booking systems)</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred</li>
                    <li><strong>With Your Consent:</strong> We will only share your information with third parties if you explicitly consent</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Encryption of sensitive data during transmission</li>
                    <li>Secure storage of personal information</li>
                    <li>Regular security assessments and updates</li>
                    <li>Limited access to personal information to authorized personnel only</li>
                    <li>Secure disposal of information when no longer needed</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cookies and Tracking</h2>
                  <p className="text-gray-700 mb-4">
                    Our website may use cookies and similar tracking technologies to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality and user experience</li>
                    <li>Provide personalized content and advertisements</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Your Rights</h2>
                  <p className="text-gray-700 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your personal information</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700 mb-4">
                    We retain your personal information for as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 ml-4">
                    <li>Provide our services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Maintain business records</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    When information is no longer needed, we securely delete or anonymize it.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Children's Privacy</h2>
                  <p className="text-gray-700 mb-4">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. International Transfers</h2>
                  <p className="text-gray-700 mb-4">
                    Your personal information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this privacy policy.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Changes to This Policy</h2>
                  <p className="text-gray-700 mb-4">
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last Updated" date.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Us</h2>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-xl p-6 border border-gray-200">
                    <p className="text-gray-700 mb-2"><strong>Rose Heavenly Salon and Spa</strong></p>
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
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-500 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
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
