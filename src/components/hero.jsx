import React, { useState, useEffect } from 'react';
import { Clock, Smartphone, Truck, Shield, IndianRupee, Gift } from 'lucide-react';

export default function HeroSection({ onBookingClick }) {
  const [visibleItems, setVisibleItems] = useState({
    image: false,
    heading: false,
    description: false,
    offer: false,
    feature1: false,
    feature2: false,
    feature3: false,
    feature4: false,
    feature5: false,
    cta: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate visibility based on scroll position
      setVisibleItems({
        image: scrollY >= 0,
        heading: scrollY >= 50 || windowHeight > 600,
        description: scrollY >= 100 || windowHeight > 600,
        offer: scrollY >= 150 || windowHeight > 700,
        feature1: scrollY >= 200 || windowHeight > 800,
        feature2: scrollY >= 250 || windowHeight > 800,
        feature3: scrollY >= 300 || windowHeight > 900,
        feature4: scrollY >= 350 || windowHeight > 900,
        feature5: scrollY >= 400 || windowHeight > 1000,
        cta: scrollY >= 450 || windowHeight > 1000
      });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger animations on mount with delays
    setTimeout(() => setVisibleItems(prev => ({ ...prev, image: true })), 100);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, heading: true })), 300);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, description: true })), 500);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, offer: true })), 700);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, feature1: true })), 900);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, feature2: true })), 1100);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, feature3: true })), 1300);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, feature4: true })), 1500);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, feature5: true })), 1700);
    setTimeout(() => setVisibleItems(prev => ({ ...prev, cta: true })), 1900);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Hero Image */}
        <div 
          className={`w-full mb-8 sm:mb-10 lg:mb-12 transition-all duration-1000 ${
            visibleItems.image 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/hero1.jpg"
              alt="Professional laundry service with modern washing machines and eco-friendly cleaning - LaundryForAll"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>

        {/* Main Heading and Description */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h1 
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 transition-all duration-1000 ${
              visibleItems.heading 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#1393c4' }}
          >
            World-Class Laundry Service
          </h1>
          
          <p 
            className={`text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 transition-all duration-1000 ${
              visibleItems.description 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ color: '#1393c4' }}
          >
            Experience modern machines and eco-friendly cleaning with our{' '}
            <span className="font-semibold">ultra-fast 3-hour</span>{' '}
            wash-dry-fold turnaround for standard loads. Perfect for busy travelers and locals who demand quality and speed.
          </p>

          <div 
            className={`inline-flex items-center gap-3 bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 rounded-lg px-4 sm:px-6 py-3 sm:py-4 shadow-md transition-all duration-1000 ${
              visibleItems.offer 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-90'
            }`}
          >
            <Gift className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: '#1393c4' }} />
            <p className="text-sm sm:text-base md:text-lg font-semibold" style={{ color: '#1393c4' }}>
              Special Offer: New customers get exclusive first-order discounts!
            </p>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Feature 1: Rapid Service */}
          <article 
            className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
              visibleItems.feature1 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                 style={{ 
                   background: 'radial-gradient(circle at center, rgba(19, 147, 196, 0.15), transparent 70%)',
                   filter: 'blur(20px)'
                 }}>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                     style={{ 
                       backgroundColor: '#1393c4',
                       boxShadow: '0 0 0 0 rgba(19, 147, 196, 0)'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(19, 147, 196, 0.5)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(19, 147, 196, 0)'}>
                  <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1393c4' }}>
                Rapid Service
              </h2>
              <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1393c4' }}>
                Wash, dry & fold your laundry in just{' '}
                <span className="font-semibold">3 hours</span>
              </p>
            </div>
          </article>

          {/* Feature 2: Easy Booking */}
          <article 
            className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
              visibleItems.feature2 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                 style={{ 
                   background: 'radial-gradient(circle at center, rgba(19, 147, 196, 0.15), transparent 70%)',
                   filter: 'blur(20px)'
                 }}>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                     style={{ 
                       backgroundColor: '#1393c4',
                       boxShadow: '0 0 0 0 rgba(19, 147, 196, 0)'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(19, 147, 196, 0.5)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(19, 147, 196, 0)'}>
                  <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1393c4' }}>
                Easy Booking
              </h2>
              <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1393c4' }}>
                Schedule pickups and track orders online or via our app
              </p>
            </div>
          </article>

          {/* Feature 3: Free Pickup & Delivery */}
          <article 
            className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
              visibleItems.feature3 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                 style={{ 
                   background: 'radial-gradient(circle at center, rgba(19, 147, 196, 0.15), transparent 70%)',
                   filter: 'blur(20px)'
                 }}>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                     style={{ 
                       backgroundColor: '#1393c4',
                       boxShadow: '0 0 0 0 rgba(19, 147, 196, 0)'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(19, 147, 196, 0.5)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(19, 147, 196, 0)'}>
                  <Truck className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1393c4' }}>
                Free Pickup & Delivery
              </h2>
              <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1393c4' }}>
                At your convenience, right to your home or hotel—no extra charge
              </p>
            </div>
          </article>

          {/* Feature 4: Hygienic Cleaning */}
          <article 
            className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
              visibleItems.feature4 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                 style={{ 
                   background: 'radial-gradient(circle at center, rgba(19, 147, 196, 0.15), transparent 70%)',
                   filter: 'blur(20px)'
                 }}>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                     style={{ 
                       backgroundColor: '#1393c4',
                       boxShadow: '0 0 0 0 rgba(19, 147, 196, 0)'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(19, 147, 196, 0.5)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(19, 147, 196, 0)'}>
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1393c4' }}>
                Hygienic Cleaning
              </h2>
              <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1393c4' }}>
                Separate wash cycles for each order ensure{' '}
                <span className="font-semibold">100% hygienic</span>{' '}
                garment care
              </p>
            </div>
          </article>

          {/* Feature 5: Transparent Pricing */}
          <article 
            className={`group bg-white rounded-xl shadow-lg p-5 sm:p-6 transition-all duration-1000 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden sm:col-span-2 lg:col-span-1 ${
              visibleItems.feature5 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" 
                 style={{ 
                   background: 'radial-gradient(circle at center, rgba(19, 147, 196, 0.15), transparent 70%)',
                   filter: 'blur(20px)'
                 }}>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" 
                     style={{ 
                       backgroundColor: '#1393c4',
                       boxShadow: '0 0 0 0 rgba(19, 147, 196, 0)'
                     }}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(19, 147, 196, 0.5)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 0 rgba(19, 147, 196, 0)'}>
                  <IndianRupee className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <h2 className="text-lg sm:text-xl font-bold mb-2 text-center" style={{ color: '#1393c4' }}>
                Transparent Pricing
              </h2>
              <p className="text-sm sm:text-base text-center leading-relaxed" style={{ color: '#1393c4' }}>
                Clear rate cards and instant price calculator on our site—no hidden fees
              </p>
            </div>
          </article>

        </div>

        {/* CTA Button */}
        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <button 
            onClick={() => {
              console.log('Button clicked!');
              if (onBookingClick) {
                onBookingClick();
              } else {
                window.location.hash = '#booking';
              }
            }}
            className={`text-white font-bold text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              visibleItems.cta 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
            style={{ backgroundColor: '#1393c4', position: 'relative', zIndex: 10 }}
            aria-label="Book your laundry service now"
          >
            Book Your Service Now
          </button>
        </div>

      </div>
    </section>
  );
}