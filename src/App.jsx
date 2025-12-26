import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import AboutUs from './components/about';
import Process from './components/process';
import AchievementSection from './components/AchievementSection';
import BookingPage from './components/booking';
import Services from './components/service';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Footer from './components/footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [showOnlyHome, setShowOnlyHome] = useState(true);
  const servicesPageRef = useRef(null);
  const bookingPageRef = useRef(null);
  const pricingPageRef = useRef(null);
  const contactPageRef = useRef(null);

  // Splash screen effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Handle hash routing on page load
  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;
      
      console.log('Hash changed to:', hash);
      
      if (hash === '#booking') {
        setShowBooking(true);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setCurrentSection('booking');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#services') {
        setShowServices(true);
        setShowBooking(false);
        setShowPricing(false);
        setShowContact(false);
        setCurrentSection('services');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#pricing') {
        setShowPricing(true);
        setShowBooking(false);
        setShowServices(false);
        setShowContact(false);
        setCurrentSection('pricing');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#contact') {
        setShowContact(true);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setCurrentSection('contact');
        setShowOnlyHome(false);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash) {
        const sectionId = hash.substring(1);
        setCurrentSection(sectionId);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        
        // Don't show other sections on homepage
        if (hash === '#home') {
          setShowOnlyHome(true);
        } else {
          setShowOnlyHome(false);
        }
        
        if (!showServices && !showBooking && !showPricing && !showContact && !showOnlyHome) {
          const section = document.getElementById(sectionId);
          if (section) {
            setTimeout(() => {
              section.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
              });
            }, 100);
          }
        }
      } else {
        setCurrentSection('home');
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        setShowContact(false);
        setShowOnlyHome(true);
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
    };

    handleHashRouting();

    window.addEventListener('popstate', handleHashRouting);
    window.addEventListener('hashchange', handleHashRouting);

    return () => {
      window.removeEventListener('popstate', handleHashRouting);
      window.removeEventListener('hashchange', handleHashRouting);
    };
  }, [showServices, showBooking, showPricing, showContact, showOnlyHome]);

  const handleBookingClick = () => {
    window.location.hash = '#booking';
  };

  const handleServicesClick = () => {
    window.location.hash = '#services';
  };

  const handlePricingClick = () => {
    window.location.hash = '#pricing';
  };

  const handleHomeClick = () => {
    window.location.hash = '#home';
  };

  const handleAboutClick = () => {
    window.location.hash = '#about';
  };

  const handleServiceClick = () => {
    window.location.hash = '#service';
  };

  const handleContactClick = () => {
    window.location.hash = '#contact';
  };

  const handleCloseBooking = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowBooking(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  const handleCloseServices = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowServices(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  const handleClosePricing = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowPricing(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  const handleCloseContact = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowContact(false);
    setCurrentSection('home');
    setShowOnlyHome(true);
  };

  // Reset to home when closing other pages
  const handleCloseSection = () => {
    window.location.hash = '#home';
  };

  useEffect(() => {
    if (showServices && servicesPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showServices]);

  useEffect(() => {
    if (showBooking && bookingPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showBooking]);

  useEffect(() => {
    if (showPricing && pricingPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showPricing]);

  useEffect(() => {
    if (showContact && contactPageRef.current) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showContact]);

  // Splash Screen Component
  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-2xl mb-8 animate-pulse">
            <img 
              src="/images/LFA-03.png" 
              alt="Logo" 
              className="w-48 h-48 md:w-64 md:h-64 mx-auto"
            />
          </div>
          <div className="flex gap-2 justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    );
  }

  if (showContact) {
    return (
      <div className="App" ref={contactPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
        />
        <div className="min-h-screen">
          <Contact onClose={handleCloseContact} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  if (showPricing) {
    return (
      <div className="App" ref={pricingPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
        />
        <div className="min-h-screen">
          <Pricing 
            onClose={handleClosePricing} 
            onBookingClick={handleBookingClick} 
          />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  if (showServices) {
    return (
      <div className="App" ref={servicesPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
        />
        <div className="min-h-screen">
          <Services onClose={handleCloseServices} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  if (showBooking) {
    return (
      <div className="App" ref={bookingPageRef}>
        <Navbar 
          onBookingClick={handleBookingClick}
          onServicesClick={handleServicesClick}
          onPricingClick={handlePricingClick}
          onHomeClick={handleHomeClick}
          onAboutClick={handleAboutClick}
          onServiceClick={handleServiceClick}
          onContactClick={handleContactClick}
        />
        <div className="min-h-screen">
          <BookingPage onClose={handleCloseBooking} />
        </div>
        <Footer />
        <WhatsAppChatbot />
      </div>
    );
  }

  // Main homepage with conditional rendering
  return (
    <div className="App">
      <Navbar 
        onBookingClick={handleBookingClick}
        onServicesClick={handleServicesClick}
        onPricingClick={handlePricingClick}
        onHomeClick={handleHomeClick}
        onAboutClick={handleAboutClick}
        onServiceClick={handleServiceClick}
        onContactClick={handleContactClick}
      />
      
      {/* FIXED: Removed top padding to ensure HeroSection starts immediately under navbar */}
      <section id="home" className="relative">
        <HeroSection />
      </section>
      
      {/* Conditionally show other sections only when their hash is active */}
      {currentSection === 'about' && !showOnlyHome && (
        <section id="about" className="pt-8 md:pt-12 lg:pt-16">
          <AboutUs />
        </section>
      )}
      
      {currentSection === 'service' && !showOnlyHome && (
        <section id="service" className="pt-8 md:pt-10 lg:pt-12">
          <Process />
        </section>
      )}
      
      {/* Always show footer on homepage */}
      <Footer />

      <WhatsAppChatbot />
    </div>
  );
}

export default App;