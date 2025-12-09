import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Tag } from 'lucide-react';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleBookingClickInternal = (e) => {
    e.preventDefault();
    
    // Call the parent's booking handler
    if (onBookingClick) {
      onBookingClick();
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleServicesClickInternal = (e) => {
    e.preventDefault();
    
    // Call the parent's services handler
    if (onServicesClick) {
      onServicesClick();
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleHomeClickInternal = (e) => {
    e.preventDefault();
    
    // Call the parent's home handler
    if (onHomeClick) {
      onHomeClick();
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleAboutClickInternal = (e) => {
    e.preventDefault();
    
    // Call the parent's about handler
    if (onAboutClick) {
      onAboutClick();
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleServiceClickInternal = (e) => {
    e.preventDefault();
    
    // Call the parent's service handler
    if (onServiceClick) {
      onServiceClick();
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleContactClickInternal = (e) => {
    e.preventDefault();
    
    // Call the parent's contact handler
    if (onContactClick) {
      onContactClick();
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handlePricingClickInternal = (e) => {
    e.preventDefault();
    
    // Call the parent's pricing handler
    if (onPricingClick) {
      onPricingClick();
    }
    
    // Close mobile menu if open
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black shadow-lg' 
          : 'bg-black/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 min-w-[180px] sm:min-w-[240px] md:min-w-[280px] lg:min-w-[340px] xl:min-w-[380px]">
            <a 
              href="#home" 
              className="flex items-center h-full"
              onClick={handleHomeClickInternal}
            >
              <img 
                src="/images/LFA-03.png"
                alt="LaundryForAll Logo" 
                className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto transition-transform duration-300 hover:scale-105 object-contain"
                style={{ maxHeight: 'none' }}
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2 xl:space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.handler}
                className="px-2 lg:px-3 xl:px-4 py-1.5 text-sm lg:text-base xl:text-lg font-bold uppercase transition-all duration-300 transform hover:scale-105"
                style={{ 
                  color: '#ffffff',
                  backgroundColor: '#1393c4',
                  transform: 'skewX(-10deg)',
                  display: 'inline-block'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0d7aa1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#1393c4';
                }}
              >
                <span style={{ display: 'inline-block', transform: 'skewX(10deg)' }}>
                  {link.name}
                </span>
              </a>
            ))}
            
            {/* Booking Button - Made smaller */}
            <a
              href="#booking"
              onClick={handleBookingClickInternal}
              className="ml-1 px-2 lg:px-3 xl:px-4 py-1 lg:py-1.5 uppercase transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5 shadow-sm hover:shadow-md"
              style={{ 
                backgroundColor: '#1393c4',
                color: '#ffffff',
                fontSize: '0.75rem',
                border: '1px solid #0d7aa1',
                transform: 'skewX(-10deg)',
                display: 'inline-flex'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0d7aa1';
                e.currentTarget.style.transform = 'skewX(-10deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1393c4';
                e.currentTarget.style.transform = 'skewX(-10deg) scale(1)';
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', transform: 'skewX(10deg)' }}>
                <Calendar className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                <span className="font-bold whitespace-nowrap">Book Now</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
              style={{ color: '#1393c4' }}
              aria-label="Toggle menu"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#87CEEB';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1393c4';
              }}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-2 bg-black shadow-lg">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={link.handler}
              className="block px-4 py-3 text-base sm:text-lg font-bold uppercase transition-all duration-300 transform hover:translate-x-2"
              style={{ 
                color: '#ffffff',
                backgroundColor: '#1393c4',
                transform: 'skewX(-10deg)',
                animationDelay: `${index * 100}ms`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0d7aa1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#1393c4';
              }}
            >
              <span style={{ display: 'inline-block', transform: 'skewX(10deg)' }}>
                {link.name}
              </span>
            </a>
          ))}
          
          {/* Mobile Booking Button - Also made smaller */}
          <a
            href="#booking"
            onClick={handleBookingClickInternal}
            className="block px-4 py-2.5 text-sm font-bold uppercase transition-all duration-300 transform hover:translate-x-2 flex items-center gap-2 shadow-sm hover:shadow-md"
            style={{ 
              backgroundColor: '#1393c4',
              color: '#ffffff',
              marginTop: '8px',
              fontSize: '0.875rem',
              transform: 'skewX(-10deg)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0d7aa1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1393c4';
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transform: 'skewX(10deg)' }}>
              <Calendar className="h-4 w-4" />
              <span>Book Now</span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}