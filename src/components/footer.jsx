import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Sparkles, ArrowRight, Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t-4 border-white/30" style={{ backgroundColor: '#1aa6b3' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/30 rounded-full filter blur-3xl"></div>
      </div>

      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="relative group">
              {/* White box container for the logo */}
              <div className="relative bg-white p-2 rounded-xl shadow-xl shadow-white/40 backdrop-blur-sm border border-white/50 group-hover:scale-105 transition-all duration-300">
                {/* Logo inside the white box */}
                <div className="relative bg-gradient-to-br from-white to-gray-50 p-1.5 rounded-lg border border-gray-100">
                  <img 
                    src="/images/LFA-03.png"
                    alt="LaundryForAll Logo" 
                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </div>
            
            <p className="text-white text-xs text-center md:text-left max-w-xs leading-relaxed">
              Professional laundry services delivered to your doorstep
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-2 pt-1">
              <a href="#facebook" className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-110 border border-white/30 group">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#instagram" className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 border border-white/30 group">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#twitter" className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-110 border border-white/30 group">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#linkedin" className="w-7 h-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-110 border border-white/30 group">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-base font-bold text-white relative inline-block">
              CONTACT US
              <span className="absolute -bottom-0.5 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></span>
            </h3>
            
            <div className="space-y-1.5 w-full max-w-sm">
              {/* Phone */}
              <a 
                href="tel:+917014638562" 
                className="flex items-center space-x-2 text-white transition-all duration-300 group p-1.5 rounded-lg hover:bg-white/10"
              >
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#1aa6b3]" />
                </div>
                <span className="text-xs font-semibold text-white">+91-7014638562</span>
              </a>

              {/* Address */}
              <div className="flex items-center space-x-2 text-white group p-1.5 rounded-lg hover:bg-white/10">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-[#1aa6b3]" />
                </div>
                <span className="text-xs text-white leading-tight">
                  Jamni Kund Road, Pushkar, Rajasthan
                </span>
              </div>

              {/* Email */}
              <a 
                href="mailto:laundryforalllfa@gmail.com" 
                className="flex items-center space-x-2 text-white transition-all duration-300 group p-1.5 rounded-lg hover:bg-white/10"
              >
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#1aa6b3]" />
                </div>
                <span className="text-xs font-semibold text-white break-all">
                  laundryforalllfa@gmail.com
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="text-base font-bold text-white relative inline-block">
              QUICK LINKS
              <span className="absolute -bottom-0.5 left-0 w-12 h-0.5 bg-gradient-to-r from-white to-transparent rounded-full"></span>
            </h3>
            
            <nav className="flex flex-col space-y-1 w-full">
              <a href="#home" className="text-xs text-white transition-all duration-300 p-1.5 rounded-lg hover:bg-white/10 font-semibold relative group flex items-center justify-between">
                <span className="relative z-10">Home</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a href="#services" className="text-xs text-white transition-all duration-300 p-1.5 rounded-lg hover:bg-white/10 font-semibold relative group flex items-center justify-between">
                <span className="relative z-10">Services</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a href="#about" className="text-xs text-white transition-all duration-300 p-1.5 rounded-lg hover:bg-white/10 font-semibold relative group flex items-center justify-between">
                <span className="relative z-10">About Us</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a href="#pricing" className="text-xs text-white transition-all duration-300 p-1.5 rounded-lg hover:bg-white/10 font-semibold relative group flex items-center justify-between">
                <span className="relative z-10">Pricing</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
              <a href="#contact" className="text-xs text-white transition-all duration-300 p-1.5 rounded-lg hover:bg-white/10 font-semibold relative group flex items-center justify-between">
                <span className="relative z-10">Contact</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/30 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-xs text-white text-center sm:text-left font-medium">
              © {new Date().getFullYear()} LaundryForAll. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <a href="#privacy" className="text-xs text-white hover:text-white/80 transition-all duration-300 relative group font-medium">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
              <a href="#terms" className="text-xs text-white hover:text-white/80 transition-all duration-300 relative group font-medium">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
