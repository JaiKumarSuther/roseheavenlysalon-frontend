"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
    { href: "/calendar", label: "Calendar" },
    { href: "/schedule", label: "Schedule" },
    { href: "/login", label: "Sign In" },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all bg-white duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-medium' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
    >
      <nav className="container-custom">
        <motion.div 
          className="flex items-center justify-between h-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Logo */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="relative"
                whileHover={{ rotate: 5 }}
              >
                <Image 
                  src="/images/image-logo.png" 
                  alt="Rose Heavenly Salon" 
                  width={48} 
                  height={48}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  whileHover={{ scale: 1.2 }}
                ></motion.div>
              </motion.div>
              <motion.span 
                className="font-serif text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent group-hover:from-rose-700 group-hover:to-pink-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Rose Heavenly
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden lg:flex items-center space-x-8"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    pathname === link.href
                      ? 'text-rose-600'
                      : 'text-gray-700 hover:text-rose-600'
                  }`}
                >
                  {link.label}
                  <motion.div 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500 to-pink-500 transform transition-all duration-300 ${
                      pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                    whileHover={{ scaleX: 1 }}
                  ></motion.div>
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/schedule"
                className="btn-primary"
              >
                Book Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-xl hover:bg-rose-50 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
              <motion.span 
                className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
                animate={{ 
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 6 : 0
                }}
              ></motion.span>
              <motion.span 
                className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
                animate={{ opacity: menuOpen ? 0 : 1 }}
              ></motion.span>
              <motion.span 
                className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
                animate={{ 
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -6 : 0
                }}
              ></motion.span>
            </div>
          </motion.button>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: menuOpen ? 1 : 0, 
            y: menuOpen ? 0 : -20 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-6 space-y-4 border-t border-gray-100">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: menuOpen ? 1 : 0, x: menuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`block text-sm font-medium transition-all duration-300 hover:text-rose-600 ${
                    pathname === link.href
                      ? 'text-rose-600'
                      : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/schedule"
                className="btn-primary w-full text-center"
              >
                Book Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
}


