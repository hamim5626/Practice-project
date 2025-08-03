"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const StaffingHeader = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Job Seekers", href: "/job-seekers" },
    { name: "Employer Services", href: "/employer-services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-gray-800"
          >
            <span className="relative">
              HY
              <span className="absolute top-0 right-0 w-1 h-2 bg-gray-800 transform rotate-45"></span>
            </span>
            Staffing
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:border-gray-400 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium">{selectedLanguage}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLanguageOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.button>

              {isLanguageOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[120px]"
                >
                  {["English", "Spanish", "French"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      {lang}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Client Login */}
            <motion.button
              className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Client Login
            </motion.button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-4"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-gray-900 font-medium"
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-gray-200 pt-4 space-y-2">
              <div className="text-sm font-medium text-gray-500">Language</div>
              {["English", "Spanish", "French"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md ${
                    selectedLanguage === lang ? "bg-gray-100 font-semibold" : ""
                  }`}
                >
                  {lang}
                </button>
              ))}
              <button className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-300">
                Client Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default StaffingHeader;
