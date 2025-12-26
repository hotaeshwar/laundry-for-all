import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200" style={{ backgroundColor: '#1aa6b3' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative">
              {/* White box container for the logo */}
              <div className="bg-white p-4 rounded-2xl shadow-2xl shadow-white/30 backdrop-blur-sm border border-white/50">
                {/* Logo inside the white box */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-3 rounded-xl border border-gray-100 shadow-inner">
                  <img 
                    src="/images/LFA-03.png"
                    alt="LaundryForAll Logo" 
                    className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </div>
            <p className="text-white text-xs sm:text-sm text-center md:text-left max-w-xs leading-relaxed font-medium">
              Professional laundry services delivered to your doorstep with care and excellence
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-1">
              <a href="#facebook" className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#instagram" className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/30">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white relative inline-block">
              CONTACT US
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-white to-teal-100 rounded-full"></span>
            </h3>
            
            <div className="space-y-3 w-full max-w-sm">
              {/* Phone */}
              <a 
                href="tel:+917014638562" 
                className="flex items-start space-x-3 text-white hover:text-white transition-all duration-300 group p-2 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/30"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Phone className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80 font-medium">Call Us</span>
                  <span className="text-sm font-semibold text-white">
                    +91-7014638562
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start space-x-3 text-white group p-2 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <MapPin className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80 font-medium">Visit Us</span>
                  <span className="text-sm font-semibold text-white">
                    Under Hotel Masterinn, Jamni Kund Road, Pushkar, Rajasthan - 305022
                  </span>
                </div>
              </div>

              {/* Email */}
              <a 
                href="mailto:laundryforalllfa@gmail.com" 
                className="flex items-start space-x-3 text-white hover:text-white transition-all duration-300 group p-2 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/30"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Mail className="w-4 h-4 text-[#1aa6b3]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-white/80 font-medium">Email Us</span>
                  <span className="text-sm font-semibold text-white break-all">
                    laundryforalllfa@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white relative inline-block">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-white to-teal-100 rounded-full"></span>
            </h3>
            <nav className="flex flex-col space-y-2 w-full">
              <a href="#home" className="text-sm text-white hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-white/10 font-semibold relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white to-teal-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Home</span>
              </a>
              <a href="#services" className="text-sm text-white hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-white/10 font-semibold relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white to-teal-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Services</span>
              </a>
              <a href="#about" className="text-sm text-white hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-white/10 font-semibold relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white to-teal-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">About Us</span>
              </a>
              <a href="#pricing" className="text-sm text-white hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-white/10 font-semibold relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white to-teal-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Pricing</span>
              </a>
              <a href="#contact" className="text-sm text-white hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-white/10 font-semibold relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-white to-teal-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Contact</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-white text-center sm:text-left font-medium">
              © {new Date().getFullYear()} LaundryForAll. All rights reserved.
            </p>
            <div className="flex space-x-6 sm:space-x-8">
              <a href="#privacy" className="text-xs sm:text-sm text-white hover:text-white/80 transition-all duration-300 relative group font-medium">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#terms" className="text-xs sm:text-sm text-white hover:text-white/80 transition-all duration-300 relative group font-medium">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;