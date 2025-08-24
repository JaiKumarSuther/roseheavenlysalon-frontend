"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import useAuthStore from "../lib/auth-store";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, isAuthenticated, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/package", label: "Services" },
    ...(isAuthenticated ? [
      { href: "/calendar", label: "Calendar" },
      { href: "/schedule", label: "Schedule" },
    ] : []),
  ];

  const authLinks = isAuthenticated 
    ? [
        { href: "/account", label: "Account" },
        { href: "#", label: "Logout", onClick: handleLogout },
      ]
    : [
        { href: "/login", label: "Sign In" },
        { href: "/signup", label: "Sign Up" },
      ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all bg-white duration-300 animate-slide-down ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image 
                  src="/images/image-logo.png" 
                  alt="Rose Heavenly Salon" 
                  width={48} 
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="font-serif text-2xl font-bold bg-gradient-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                Rose Heavenly
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-all duration-300 hover:text-gray-600 ${
                  pathname === link.href 
                    ? 'text-gray-600' 
                    : 'text-gray-700'
                }`}
              >
                <span className="hover:translate-y-[-2px] transition-transform duration-200">
                  {link.label}
                </span>
                {pathname === link.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600"></div>
                )}
              </Link>
            ))}
            
            {/* Auth Links */}
            {authLinks.map((link) => (
              link.onClick ? (
                <button
                  key={link.href}
                  onClick={link.onClick}
                  className="relative font-medium transition-all duration-300 hover:text-gray-600 text-gray-700"
                >
                  <span className="hover:translate-y-[-2px] transition-transform duration-200">
                    {link.label}
                  </span>
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-all duration-300 hover:text-gray-600 ${
                    pathname === link.href 
                      ? 'text-gray-600' 
                      : 'text-gray-700'
                  }`}
                >
                  <span className="hover:translate-y-[-2px] transition-transform duration-200">
                    {link.label}
                  </span>
                  {pathname === link.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-500 to-gray-600"></div>
                  )}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 mt-1 ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:text-gray-600 ${
                  pathname === link.href 
                    ? 'bg-gray-50 text-gray-600' 
                    : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Auth Links */}
            {authLinks.map((link) => (
              link.onClick ? (
                <button
                  key={link.href}
                  onClick={link.onClick}
                  className="block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:text-gray-600 text-gray-700"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-50 hover:text-gray-600 ${
                    pathname === link.href 
                      ? 'bg-gray-50 text-gray-600' 
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}


