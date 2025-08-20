import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-rose-50 border-t border-rose-100">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image 
                  src="/images/image-logo.png" 
                  alt="Rose Heavenly Salon" 
                  width={48} 
                  height={48}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20"></div>
              </div>
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                Rose Heavenly
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your premier destination for beauty and wellness services in Tarlac. Experience luxury and relaxation in every visit.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/roseheavenlysalon" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-rose-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-rose-50"
              >
                <svg className="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/package", label: "Services" },
                { href: "/schedule", label: "Book" },
              ].map((link, index) => (
                <div key={link.href}>
                  <Link 
                    href={link.href} 
                    className="block text-gray-600 hover:text-rose-600 transition-colors duration-300"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Extra Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Extra Links
            </h3>
            <div className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "#privacy", label: "Privacy Policy" },
                { href: "#terms", label: "Terms of Use" },
              ].map((link, index) => (
                <div key={link.href}>
                  <Link 
                    href={link.href} 
                    className="block text-gray-600 hover:text-rose-600 transition-colors duration-300"
                  >
                    <span className="hover:translate-x-1 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors duration-300">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm">+63 968 312 3303</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors duration-300">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">rhsalonandspa@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 hover:text-rose-600 transition-colors duration-300">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">Dapdap, Bamban, Tarlac</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-200 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Rose Heavenly Salon and Spa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


