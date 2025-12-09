import React from 'react';
import { MapPin, Phone, Mail, Heart, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1393c4] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="relative">
              <img 
                src="/images/LFA-03.png"
                alt="LaundryForAll Logo" 
                className="relative h-24 sm:h-28 md:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 text-xs sm:text-sm text-center md:text-left max-w-xs leading-relaxed">
              Professional laundry services delivered to your doorstep with care and excellence
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 pt-1">
              <a href="#facebook" className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-gray-300 hover:bg-[#1393c4] hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1393c4]/50">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#instagram" className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-gray-300 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-gray-300 hover:bg-sky-500 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            {/* Made with love text */}
            <div className="flex items-center space-x-2 pt-1">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
              <span className="text-xs text-gray-400 hover:text-gray-300 transition-colors duration-300">
                Made with love by Building India Digital
              </span>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white relative inline-block">
              CONTACT US
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#1393c4] to-blue-400 rounded-full"></span>
            </h3>
            
            <div className="space-y-3 w-full max-w-sm">
              {/* Phone */}
              <a 
                href="tel:+917054828682" 
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-xl hover:bg-slate-700/50 backdrop-blur-sm border border-transparent hover:border-[#1393c4]/30"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1393c4] to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Call Us</span>
                  <span className="text-sm font-semibold">
                    +91-7054828682
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start space-x-3 text-gray-300 group p-2 rounded-xl hover:bg-slate-700/50 backdrop-blur-sm border border-transparent hover:border-[#1393c4]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1393c4] to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Visit Us</span>
                  <span className="text-sm font-medium">
                    jamni kund road pushkar raj
                  </span>
                </div>
              </div>

              {/* Email */}
              <a 
                href="mailto:masterinpushkar@gmail.com" 
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-all duration-300 group p-2 rounded-xl hover:bg-slate-700/50 backdrop-blur-sm border border-transparent hover:border-[#1393c4]/30"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1393c4] to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Email Us</span>
                  <span className="text-sm font-medium break-all">
                    masterinpushkar@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-1 text-white relative inline-block">
              QUICK LINKS
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#1393c4] to-blue-400 rounded-full"></span>
            </h3>
            <nav className="flex flex-col space-y-2 w-full">
              <a href="#home" className="text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-slate-700/50 backdrop-blur-sm font-medium relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1393c4] to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Home</span>
              </a>
              <a href="#services" className="text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-slate-700/50 backdrop-blur-sm font-medium relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1393c4] to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Services</span>
              </a>
              <a href="#about" className="text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-slate-700/50 backdrop-blur-sm font-medium relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1393c4] to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">About Us</span>
              </a>
              <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-slate-700/50 backdrop-blur-sm font-medium relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1393c4] to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Pricing</span>
              </a>
              <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-all duration-300 transform hover:translate-x-3 p-2 rounded-lg hover:bg-slate-700/50 backdrop-blur-sm font-medium relative group overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#1393c4] to-blue-400 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="relative z-10">Contact</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} LaundryForAll. All rights reserved.
            </p>
            <div className="flex space-x-6 sm:space-x-8">
              <a href="#privacy" className="text-xs sm:text-sm text-gray-400 hover:text-[#1393c4] transition-all duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1393c4] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#terms" className="text-xs sm:text-sm text-gray-400 hover:text-[#1393c4] transition-all duration-300 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1393c4] group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;