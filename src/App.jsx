import React, { useEffect, useState, useRef } from 'react';
import HeroSection from './components/hero';
import Navbar from './components/navbar';
import AboutUs from './components/about';
import Process from './components/process';
import AchievementSection from './components/AchievementSection';
import BookingPage from './components/booking';
import Services from './components/service';
import Pricing from './components/pricing';
import Footer from './components/footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showBooking, setShowBooking] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showPricing, setShowPricing] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const servicesPageRef = useRef(null);
  const bookingPageRef = useRef(null);
  const pricingPageRef = useRef(null);

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
        setCurrentSection('booking');
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#services') {
        setShowServices(true);
        setShowBooking(false);
        setShowPricing(false);
        setCurrentSection('services');
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash === '#pricing') {
        setShowPricing(true);
        setShowBooking(false);
        setShowServices(false);
        setCurrentSection('pricing');
        
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else if (hash) {
        const sectionId = hash.substring(1);
        setCurrentSection(sectionId);
        setShowBooking(false);
        setShowServices(false);
        setShowPricing(false);
        
        if (!showServices && !showBooking && !showPricing) {
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
  }, [showServices, showBooking, showPricing]);

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
    if (showServices || showBooking || showPricing) {
      window.location.hash = '#home';
      setTimeout(() => {
        window.location.hash = '#about';
      }, 100);
    } else {
      window.location.hash = '#about';
    }
  };

  const handleServiceClick = () => {
    if (showServices || showBooking || showPricing) {
      window.location.hash = '#home';
      setTimeout(() => {
        window.location.hash = '#service';
      }, 100);
    } else {
      window.location.hash = '#service';
    }
  };

  const handleContactClick = () => {
    if (showServices || showBooking || showPricing) {
      window.location.hash = '#home';
      setTimeout(() => {
        window.location.hash = '#contact';
      }, 100);
    } else {
      window.location.hash = '#contact';
    }
  };

  const handleCloseBooking = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowBooking(false);
    setCurrentSection('home');
  };

  const handleCloseServices = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowServices(false);
    setCurrentSection('home');
  };

  const handleClosePricing = () => {
    window.history.pushState("", document.title, window.location.pathname);
    setShowPricing(false);
    setCurrentSection('home');
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
      
      <section id="home" className="pt-16 sm:pt-20 lg:pt-24">
        <HeroSection />
      </section>
      
      <section id="about" className="pt-8 md:pt-12 lg:pt-16">
        <AboutUs />
      </section>
      
      <section id="service" className="pt-8 md:pt-10 lg:pt-12">
        <Process />
      </section>
      
      <section className="pt-8 md:pt-10 lg:pt-12">
        <AchievementSection />
      </section>
      
      <footer id="contact">
        <Footer />
      </footer>

      <WhatsAppChatbot />
    </div>
  );
}

export default App;