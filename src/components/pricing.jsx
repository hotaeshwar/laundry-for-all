import React, { useState, useEffect } from 'react';
import { Tag, Package, Zap, Gift, Calculator, MapPin, Check, Sparkles, ArrowLeft, X } from 'lucide-react';

const PricingOffers = ({ onClose, onBookingClick }) => {
  const [selectedCity, setSelectedCity] = useState('jaipur');
  const [quantities, setQuantities] = useState({
    laundry: 0,
    ironing: 0,
    drycleaning: 0
  });
  const [animatePrice, setAnimatePrice] = useState(false);

  const cities = [
    { id: 'jaipur', name: 'Jaipur', discount: '20%' },
    { id: 'udaipur', name: 'Udaipur', discount: '20%' },
    { id: 'jodhpur', name: 'Jodhpur', discount: '20%' },
    { id: 'kota', name: 'Kota', discount: '15%' }
  ];

  const pricingData = {
    jaipur: { laundry: 60, ironing: 15, drycleaning: 120, express: 'Free' },
    udaipur: { laundry: 55, ironing: 15, drycleaning: 115, express: 'Free' },
    jodhpur: { laundry: 58, ironing: 14, drycleaning: 118, express: 'Free' },
    kota: { laundry: 52, ironing: 12, drycleaning: 110, express: 'Free' }
  };

  const freeInclusions = [
    'Free Pickup & Delivery', 'Free Softener Treatment', 'Free Stain Pretreatment',
    'Free Cuff & Collar Cleaning', 'Free Disinfectant', 'Quality Detergent Included'
  ];

  const handleCityChange = (cityId) => {
    setAnimatePrice(true);
    setSelectedCity(cityId);
    setTimeout(() => setAnimatePrice(false), 600);
  };

  const calculateTotal = () => {
    const prices = pricingData[selectedCity];
    return (quantities.laundry * prices.laundry) + (quantities.ironing * prices.ironing) + (quantities.drycleaning * prices.drycleaning);
  };

  const getDiscountedTotal = () => {
    const total = calculateTotal();
    const discount = cities.find(c => c.id === selectedCity)?.discount || '20%';
    const discountPercent = parseInt(discount) / 100;
    return total * (1 - discountPercent);
  };

  const primaryColor = '#1393c4';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(19, 147, 196, 0.3), 0 0 40px rgba(19, 147, 196, 0.2); }
          50% { box-shadow: 0 0 30px rgba(19, 147, 196, 0.5), 0 0 60px rgba(19, 147, 196, 0.3); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes priceChange {
          0% { transform: scale(1) rotateX(0deg); opacity: 1; }
          50% { transform: scale(1.1) rotateX(180deg); opacity: 0; }
          100% { transform: scale(1) rotateX(360deg); opacity: 1; }
        }
        
        /* CSS-Only Scroll Animations */
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .glow-card {
          animation: glow 3s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        .glow-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 40px rgba(19, 147, 196, 0.6), 0 0 80px rgba(19, 147, 196, 0.4);
        }
        .float-animation { animation: float 3s ease-in-out infinite; }
        .price-animate { animation: priceChange 0.6s ease-in-out; }
        .gradient-text {
          background: linear-gradient(135deg, #1393c4 0%, #0d7299 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .shine-effect { position: relative; overflow: hidden; }
        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }
        .shine-effect:hover::before { left: 100%; }
        
        /* CSS Scroll Animations */
        .scroll-animate {
          opacity: 0;
          animation: slideInFromBottom 0.8s ease-out forwards;
        }
        
        .scroll-animate-left {
          opacity: 0;
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        
        .scroll-animate-right {
          opacity: 0;
          animation: slideInFromRight 0.8s ease-out forwards;
        }
        
        /* Animation delays using nth-child */
        .scroll-animate:nth-child(1) { animation-delay: 0s; }
        .scroll-animate:nth-child(2) { animation-delay: 0.1s; }
        .scroll-animate:nth-child(3) { animation-delay: 0.2s; }
        .scroll-animate:nth-child(4) { animation-delay: 0.3s; }
        .scroll-animate:nth-child(5) { animation-delay: 0.4s; }
        
        .city-section-visible {
          opacity: 1 !important;
          transform: none !important;
        }
        
        /* Mobile-specific adjustments */
        @media (max-width: 640px) {
          .mobile-header-badge {
            padding: 0.2rem 0.4rem !important;
            font-size: 0.65rem !important;
            line-height: 1;
            white-space: nowrap;
            overflow: visible;
            max-width: none;
            min-width: auto;
            letter-spacing: -0.01em;
          }
          
          .mobile-section {
            padding: 1rem !important;
          }
          
          .mobile-text {
            font-size: 0.875rem !important;
          }
          
          .mobile-heading {
            font-size: 1.25rem !important;
          }
          
          .mobile-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
          
          .mobile-padding {
            padding: 1rem !important;
          }
          
          .mobile-price {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .mobile-header-badge {
            padding: 0.15rem 0.3rem !important;
            font-size: 0.6rem !important;
          }
          
          .mobile-price {
            font-size: 1.75rem !important;
          }
        }
        
        @media (max-width: 380px) {
          .mobile-header-badge {
            padding: 0.1rem 0.25rem !important;
            font-size: 0.55rem !important;
          }
          
          .header-title {
            font-size: 0.9rem !important;
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* Fixed Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4" style={{ borderColor: primaryColor }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {/* Left side: Back button + Title */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink min-w-0 flex-1">
              <button 
                onClick={onClose} 
                className="p-1 sm:p-1.5 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex-shrink-0"
                style={{ color: primaryColor }} 
                title="Back to Home"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold gradient-text truncate header-title flex-shrink">
                LFA Pricing & Offers
              </h1>
            </div>
            
            {/* Right side: Badge + Close button */}
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <span className="mobile-header-badge px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg glow-card">
                20% OFF 1st Order
              </span>
              
              <button 
                onClick={onClose} 
                className="p-1 sm:p-1.5 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex-shrink-0"
                style={{ color: primaryColor }} 
                title="Close"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Section 1 - Hero */}
        <section className="rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10 glow-card bg-white scroll-animate">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 gradient-text">
                Transparent Laundry Pricing
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-1 font-semibold mobile-text" style={{ color: primaryColor }}>
                No Hidden Fees • Fixed Rates • All-Inclusive Service
              </p>
              <p className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor, opacity: 0.8 }}>
                Serving all major cities across Rajasthan with premium quality
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0 float-animation mt-4 md:mt-0">
              <Package className="w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32" style={{ color: primaryColor, opacity: 0.3 }} />
            </div>
          </div>
        </section>

        {/* Section 2 - City Selection - ALWAYS VISIBLE */}
        <section className="mb-6 sm:mb-8 md:mb-10 city-section-visible">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 glow-card mobile-section">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mobile-heading">Select Your City</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {cities.map((city, index) => (
                <button 
                  key={city.id} 
                  onClick={() => handleCityChange(city.id)}
                  className={`shine-effect relative p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 ${
                    selectedCity === city.id ? 'shadow-xl scale-105 bg-blue-50' : 'border-gray-200 hover:shadow-lg hover:scale-102 bg-white'
                  }`}
                  style={{
                    borderColor: selectedCity === city.id ? primaryColor : '#e5e7eb',
                    minHeight: '80px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <span className="block text-sm sm:text-base font-bold mb-1 gradient-text truncate">{city.name}</span>
                  <span className="block text-xs sm:text-sm font-bold gradient-text">{city.discount} OFF</span>
                  {selectedCity === city.id && (
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: primaryColor }} />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500 italic">Tap on a city to see specific rates</p>
            </div>
          </div>
        </section>

        {/* Section 3 - Service Rates */}
        <section className="mb-6 sm:mb-8 md:mb-10">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center gradient-text mobile-heading scroll-animate">
            Our Service Rates for <span className="capitalize">{selectedCity}</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mobile-grid">
            {/* Laundry Service Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden glow-card shine-effect scroll-animate-left">
              <div className="p-4 sm:p-5" style={{ backgroundColor: primaryColor }}>
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2" />
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">Laundry Service</h4>
              </div>
              <div className="p-4 sm:p-5 mobile-padding">
                <div className={`mb-3 sm:mb-4 ${animatePrice ? 'price-animate' : ''}`}>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mobile-price">₹{pricingData[selectedCity].laundry}</span>
                  <span className="text-sm sm:text-base ml-1 font-semibold mobile-text" style={{ color: primaryColor, opacity: 0.7 }}>/kg</span>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>Wash, Dry & Fold</span>
                  </li>
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>Premium Detergent</span>
                  </li>
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>24-48 Hour Turnaround</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ironing Service Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden glow-card shine-effect scroll-animate">
              <div className="p-4 sm:p-5" style={{ backgroundColor: primaryColor }}>
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2" />
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">Ironing Service</h4>
              </div>
              <div className="p-4 sm:p-5 mobile-padding">
                <div className={`mb-3 sm:mb-4 ${animatePrice ? 'price-animate' : ''}`}>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mobile-price">₹{pricingData[selectedCity].ironing}</span>
                  <span className="text-sm sm:text-base ml-1 font-semibold mobile-text" style={{ color: primaryColor, opacity: 0.7 }}>/piece</span>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>Perfect Press Finish</span>
                  </li>
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>Hanger/Fold Option</span>
                  </li>
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>Same Day Available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dry Cleaning Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden glow-card shine-effect scroll-animate-right">
              <div className="p-4 sm:p-5" style={{ backgroundColor: primaryColor }}>
                <Tag className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2" />
                <h4 className="text-base sm:text-lg md:text-xl font-bold text-white">Dry Cleaning</h4>
              </div>
              <div className="p-4 sm:p-5 mobile-padding">
                <div className={`mb-3 sm:mb-4 ${animatePrice ? 'price-animate' : ''}`}>
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mobile-price">₹{pricingData[selectedCity].drycleaning}</span>
                  <span className="text-sm sm:text-base ml-1 font-semibold mobile-text" style={{ color: primaryColor, opacity: 0.7 }}>/piece</span>
                </div>
                <ul className="space-y-1 sm:space-y-2">
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>Eco-Friendly Solvents</span>
                  </li>
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>Suits, Jackets, Coats</span>
                  </li>
                  <li className="flex items-start gap-1 sm:gap-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor }}>3-5 Day Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Express Service */}
        <section className="mb-6 sm:mb-8 md:mb-10 scroll-animate">
          <div className="rounded-2xl p-4 sm:p-5 md:p-6 shadow-xl glow-card bg-white mobile-section">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0 float-animation" style={{ color: primaryColor }} />
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1 gradient-text mobile-heading">Express 3-Hour Service</h3>
                  <p className="text-xs sm:text-sm md:text-base font-semibold mobile-text" style={{ color: primaryColor, opacity: 0.8 }}>Need it urgently? We've got you covered!</p>
                </div>
              </div>
              <div className="text-center sm:text-right mt-2 sm:mt-0">
                <span className="block text-xl sm:text-2xl md:text-3xl font-bold gradient-text">{pricingData[selectedCity].express}</span>
                <span className="block text-xs sm:text-sm font-semibold mobile-text" style={{ color: primaryColor, opacity: 0.8 }}>No Extra Charge</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Price Calculator */}
        <section className="mb-6 sm:mb-8 md:mb-10">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 glow-card mobile-section scroll-animate">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mobile-heading">Price Calculator</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4">
              {['laundry', 'ironing', 'drycleaning'].map((type, index) => (
                <div key={type} className="scroll-animate">
                  <label className="block text-sm font-bold mb-2 gradient-text capitalize">{type} ({type === 'laundry' ? 'kg' : 'pieces'})</label>
                  <input 
                    type="number" 
                    min="0" 
                    value={quantities[type]}
                    onChange={(e) => setQuantities({...quantities, [type]: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border-2 rounded-lg focus:outline-none text-sm sm:text-base font-semibold transition-all duration-200"
                    style={{ borderColor: '#d1d5db', color: primaryColor }}
                    onFocus={(e) => e.target.style.borderColor = primaryColor}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder="0" 
                  />
                </div>
              ))}
            </div>

            {calculateTotal() > 0 && (
              <div className="rounded-xl p-4 sm:p-5 border-2 glow-card bg-gradient-to-br from-blue-50 to-white scroll-animate"
                   style={{ borderColor: primaryColor }}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex-1">
                    <div className="mb-1">
                      <span className="text-sm sm:text-base font-semibold mobile-text" style={{ color: primaryColor, opacity: 0.8 }}>Subtotal:</span>
                      <span className="text-lg sm:text-xl font-bold ml-2 gradient-text">₹{calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="mb-1">
                      <span className="text-sm sm:text-base font-bold gradient-text mobile-text">
                        First Order Discount ({cities.find(c => c.id === selectedCity)?.discount}):
                      </span>
                      <span className="text-lg sm:text-xl font-bold ml-2 gradient-text">
                        -₹{(calculateTotal() - getDiscountedTotal()).toFixed(2)}
                      </span>
                    </div>
                    <div className="pt-2 border-t-2" style={{ borderColor: primaryColor }}>
                      <span className="text-base sm:text-lg font-bold gradient-text mobile-text">Total (1st Order):</span>
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold ml-2 gradient-text">₹{getDiscountedTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={onBookingClick}
                    className="shine-effect w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 mt-3 sm:mt-0"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 6 - Free Inclusions */}
        <section className="mb-6 sm:mb-8 md:mb-10 scroll-animate">
          <div className="rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl glow-card bg-white mobile-section">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mobile-heading">All These Services at No Extra Cost!</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {freeInclusions.map((inclusion, index) => (
                <div 
                  key={index}
                  className="shine-effect flex items-center gap-1 sm:gap-2 bg-gradient-to-br from-blue-50 to-white rounded-lg sm:rounded-xl p-2 sm:p-3 border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 scroll-animate"
                  style={{ borderColor: primaryColor }}
                >
                  <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" style={{ color: primaryColor }} />
                  <span className="text-xs sm:text-sm md:text-base font-semibold gradient-text mobile-text truncate">{inclusion}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7 - Price Promise */}
        <section className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 md:p-6 lg:p-8 glow-card mb-6 sm:mb-8 md:mb-10 scroll-animate">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6 gradient-text mobile-heading">Our Price Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {[
              { icon: Tag, title: "No Hidden Fees", desc: "The price you see is the price you pay. Completely transparent pricing." },
              { icon: MapPin, title: "Fixed City Rates", desc: "Consistent pricing across your city. No surprises at checkout." },
              { icon: Sparkles, title: "Premium Quality", desc: "Top-notch service with all premium features included in the base price." }
            ].map((item, index) => (
              <div 
                key={index} 
                className="text-center p-3 sm:p-4 shine-effect rounded-xl hover:shadow-lg transition-all duration-300 scroll-animate"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 glow-card" style={{ backgroundColor: '#e6f4fb' }}>
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: primaryColor }} />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2 gradient-text">{item.title}</h4>
                <p className="text-xs sm:text-sm font-medium mobile-text" style={{ color: primaryColor, opacity: 0.8 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 - CTA */}
        <section className="text-center scroll-animate">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl glow-card">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">Ready to Experience Premium Laundry Care?</h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-blue-100 mb-4 sm:mb-6 mobile-text">Book your first order now and get 20% OFF!</p>
            <button 
              onClick={onBookingClick}
              className="shine-effect bg-white text-sm sm:text-base md:text-lg font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ color: primaryColor }}
            >
              Book Your Order Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingOffers;
