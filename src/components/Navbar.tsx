"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // স্ক্রল করলে ব্যাকগ্রাউন্ড সাদা করার জন্য
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Core Services", href: "#core-services" },
    {
      name: "Our Services",
      href: "#services",
      dropdown: [
        { name: "Mental Health & Well-being", href: "#mental-health" },
        { name: "Addiction & Risk Behavior Management", href: "#addiction" },
        { name: "HR & Employee Support Service", href: "#hr-support" },
      ],
    },
    { name: "Our Team Members", href: "#team" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/40 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <img src="/navlogo.jpg" alt="companey log" className="w-8 h-8"/>
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-blue-600">
              PSYNERGY<span className="text-gray-800">BD</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {link.dropdown ? (
                    <div 
                      className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium cursor-pointer py-2"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {link.name} <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.ul
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            className="absolute left-0 top-full mt-2 w-72 bg-white shadow-2xl rounded-xl p-3 border border-gray-100"
                          >
                            {link.dropdown.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-[110] lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-blue-600">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500">
                  <X size={24} />
                </button>
              </div>
              
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.dropdown ? (
                      <div className="space-y-2">
                        <button 
                          className="flex justify-between items-center w-full text-lg font-semibold text-gray-800"
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                        >
                          {link.name} <ChevronDown className={isServicesOpen ? "rotate-180" : ""} />
                        </button>
                        {isServicesOpen && (
                          <ul className="pl-4 space-y-2 border-l-2 border-blue-100 mt-2">
                            {link.dropdown.map((sub) => (
                              <li key={sub.name}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 text-gray-600 hover:text-blue-600"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[105] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;