import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export default function Navbar({ 
  onBookingClick, 
  onServicesClick,
  onHomeClick,
  onAboutClick,
  onServiceClick,
  onContactClick,
  onPricingClick
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  
  useEffect(() => {
    // Function to set active link based on current hash
    const setActiveLinkFromHash = () => {
      const hash = window.location.hash;
      switch(hash) {
        case '#home':
        case '':
          setActiveLink('Home');
          break;
        case '#about':
          setActiveLink('About');
          break;
        case '#services':
          setActiveLink('Services');
          break;
        case '#pricing':
          setActiveLink('Pricing');
          break;
        case '#contact':
          setActiveLink('Contact');
          break;
        default:
          setActiveLink('Home');
      }
    };

    // Set active link on initial load
    setActiveLinkFromHash();

    // Also set active link when hash changes
    const handleHashChange = () => {
      setActiveLinkFromHash();
    };

    window.addEventListener('hashchange', handleHashChange);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 50;
      
      setIsScrolled(prev => {
        if (prev !== shouldBeScrolled) {
          return shouldBeScrolled;
        }
        return prev;
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener with debounce for performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', scrollListener, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Rest of your code remains exactly the same...
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookingClickInternal = (e) => {
    e.preventDefault();
    if (onBookingClick) {
      onBookingClick();
    }
    setIsMenuOpen(false);
  };

  const handleServicesClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Services');
    if (onServicesClick) {
      onServicesClick();
    }
    setIsMenuOpen(false);
  };

  const handleHomeClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Home');
    if (onHomeClick) {
      onHomeClick();
    }
    setIsMenuOpen(false);
  };

  const handleAboutClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('About');
    if (onAboutClick) {
      onAboutClick();
    }
    setIsMenuOpen(false);
  };

  const handleServiceClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Services');
    if (onServiceClick) {
      onServiceClick();
    }
    setIsMenuOpen(false);
  };

  const handleContactClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Contact');
    if (onContactClick) {
      onContactClick();
    }
    setIsMenuOpen(false);
  };

  const handlePricingClickInternal = (e) => {
    e.preventDefault();
    setActiveLink('Pricing');
    if (onPricingClick) {
      onPricingClick();
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home', handler: handleHomeClickInternal },
    { name: 'About', href: '#about', handler: handleAboutClickInternal },
    { name: 'Services', href: '#services', handler: handleServicesClickInternal },
    { name: 'Pricing', href: '#pricing', handler: handlePricingClickInternal },
    { name: 'Contact', href: '#contact', handler: handleContactClickInternal }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          {/* Logo Section - 80% BIGGER */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="flex items-center h-full"
              onClick={handleHomeClickInternal}
            >
              <img 
                src="/images/LFA-03.png"
                alt="LaundryForAll Logo" 
                className="h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 w-auto transition-transform duration-300 hover:scale-105 object-contain"
                style={{
                  marginTop: '-0.5rem',
                  marginBottom: '-0.5rem'
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation Links - Adjusted spacing for larger logo */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.handler}
                className="px-3 lg:px-4 xl:px-5 py-2 text-sm lg:text-base xl:text-lg font-black transition-all duration-300 relative group"
              >
                {/* Main text - EXTRA BOLD (font-black) */}
                <span className="text-gray-900 group-hover:text-[#1aa6b3] transition-colors duration-300 tracking-wide">
                  {link.name}
                </span>
                
                {/* Animated underline - appears on click in Eastern Blue color */}
                <span 
                  className={`absolute bottom-0 left-0 h-1 bg-[#1aa6b3] transition-all duration-500 ${
                    activeLink === link.name 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
                
                {/* Glowing hover effect */}
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(26, 166, 179, 0.15) 0%, transparent 70%)',
                        zIndex: -1
                      }}></span>
              </a>
            ))}
            
            {/* Book Now Button - BOLDER */}
            <a
              href="#booking"
              onClick={handleBookingClickInternal}
              className="bg-[#1aa6b3] hover:bg-[#147c86] text-white px-5 lg:px-6 xl:px-8 py-2.5 lg:py-3 text-sm lg:text-base font-black rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              {/* Button glowing effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#1aa6b3]/0 via-[#1aa6b3]/20 to-[#1aa6b3]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <Calendar className="h-4 w-4 lg:h-5 lg:w-5 relative z-10" />
              <span className="whitespace-nowrap relative z-10 tracking-wider">BOOK NOW</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - BOLDER TEXT */}
      {isMenuOpen && (
        <div className={`md:hidden shadow-2xl ${
          isScrolled ? 'bg-white' : 'bg-[#1aa6b3]'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.handler}
                className={`block px-4 py-3 text-base font-black rounded-lg transition-all duration-300 hover:translate-x-2 relative group ${
                  isScrolled
                    ? 'text-gray-800 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <span className={`transition-colors duration-300 tracking-wide ${
                  isScrolled ? 'group-hover:text-[#1aa6b3]' : 'group-hover:text-[#1aa6b3]'
                }`}>
                  {link.name}
                </span>
                
                {/* Active indicator for mobile */}
                {activeLink === link.name && (
                  <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#1aa6b3] rounded-r transition-all duration-300`}></span>
                )}
                
                {/* Mobile menu glowing effect */}
                <span className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isScrolled ? 'bg-[#e6f7f9]' : 'bg-white/5'
                }`}></span>
              </a>
            ))}
            
            <a
              href="#booking"
              onClick={handleBookingClickInternal}
              className={`flex items-center gap-2 px-4 py-3 text-base font-black rounded-lg transition-all duration-300 mt-2 relative overflow-hidden group ${
                isScrolled
                  ? 'bg-[#1aa6b3] hover:bg-[#147c86] text-white'
                  : 'bg-white/20 hover:bg-white/30 text-white'
              }`}
            >
              {/* Mobile button glowing effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#1aa6b3]/0 via-white/20 to-[#1aa6b3]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <Calendar className="h-5 w-5 relative z-10" />
              <span className="relative z-10 tracking-wider">BOOK NOW</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
