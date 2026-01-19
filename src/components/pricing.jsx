import React, { useState, useEffect } from 'react';
import { Tag, Package, Zap, Gift, Calculator, MapPin, Check, Sparkles, ArrowLeft, X } from 'lucide-react';

const PricingOffers = ({ onClose, onBookingClick }) => {
  const [selectedCity, setSelectedCity] = useState('pushkar');
  const [quantities, setQuantities] = useState({
    laundry: 0,
    ironing: 0,
    drycleaning: 0
  });
  const [animatePrice, setAnimatePrice] = useState(false);

  const cities = [
    { id: 'pushkar', name: 'Pushkar', discount: '20%' },
    { id: 'jaipur', name: 'Jaipur', discount: '20%' }
  ];

  const pricingData = {
    pushkar: { laundry: 100, ironing: 20, drycleaning: 120, express: 'Free' },
    jaipur: { laundry: 100, ironing: 20, drycleaning: 120, express: 'Free' }
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

  const primaryColor = '#1aa6b3';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <style>{`
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 25px rgba(26, 166, 179, 0.4), 0 0 50px rgba(26, 166, 179, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1); }
          50% { box-shadow: 0 0 35px rgba(26, 166, 179, 0.6), 0 0 70px rgba(26, 166, 179, 0.3), 0 15px 40px rgba(0, 0, 0, 0.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes priceChange {
          0% { transform: scale(1) rotateY(0deg); opacity: 1; }
          50% { transform: scale(1.15) rotateY(180deg); opacity: 0; }
          100% { transform: scale(1) rotateY(360deg); opacity: 1; }
        }
        @keyframes slideInFromBottom {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .glow-card {
          animation: glow 3s ease-in-out infinite;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }
        .glow-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 0 50px rgba(26, 166, 179, 0.7), 0 0 100px rgba(26, 166, 179, 0.4), 0 20px 50px rgba(0, 0, 0, 0.2);
        }
        .float-animation { 
          animation: float 4s ease-in-out infinite; 
          filter: drop-shadow(0 10px 20px rgba(26, 166, 179, 0.3));
        }
        .price-animate { animation: priceChange 0.6s ease-in-out; }
        .gradient-text {
          background: linear-gradient(135deg, #1aa6b3 0%, #0d7c87 50%, #1aa6b3 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .shine-effect { 
          position: relative; 
          overflow: hidden;
          background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
        }
        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 150%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .shine-effect:hover::before { left: 150%; }
        
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
        .scroll-animate:nth-child(1) { animation-delay: 0s; }
        .scroll-animate:nth-child(2) { animation-delay: 0.1s; }
        .scroll-animate:nth-child(3) { animation-delay: 0.2s; }
        .scroll-animate:nth-child(4) { animation-delay: 0.3s; }
        .scroll-animate:nth-child(5) { animation-delay: 0.4s; }
        
        .city-section-visible {
          opacity: 1 !important;
          transform: none !important;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .service-card {
          position: relative;
          background: linear-gradient(145deg, #ffffff, #f1f5f9);
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        
        .service-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #1aa6b3, #0d7c87, #1aa6b3);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .service-card:hover::after {
          opacity: 1;
        }
        
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
          .mobile-section { padding: 1rem !important; }
          .mobile-text { font-size: 0.875rem !important; }
          .mobile-heading { font-size: 1.25rem !important; }
          .mobile-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .mobile-padding { padding: 1rem !important; }
          .mobile-price { font-size: 2rem !important; }
        }
        
        @media (max-width: 480px) {
          .mobile-header-badge { padding: 0.15rem 0.3rem !important; font-size: 0.6rem !important; }
          .mobile-price { font-size: 1.75rem !important; }
        }
        
        @media (max-width: 380px) {
          .mobile-header-badge { padding: 0.1rem 0.25rem !important; font-size: 0.55rem !important; }
          .header-title { font-size: 0.9rem !important; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        }
        
        html { scroll-behavior: smooth; }
      `}</style>

      {/* Fixed Header */}
      <header className="glass-effect shadow-2xl sticky top-0 z-50 border-b-4" style={{ borderColor: primaryColor }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink min-w-0 flex-1">
              <button
                onClick={onClose}
                className="p-1 sm:p-1.5 rounded-xl hover:bg-blue-100 transition-all duration-300 flex-shrink-0 hover:scale-110"
                style={{ color: primaryColor }}
                title="Back to Home"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold gradient-text truncate header-title flex-shrink">
                LFA Pricing & Offers
              </h1>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              <span className="mobile-header-badge px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-bold bg-gradient-to-r from-[#1aa6b3] via-teal-500 to-[#1aa6b3] text-white shadow-lg glow-card bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
                20% OFF 1st Order
              </span>

              <button
                onClick={onClose}
                className="p-1 sm:p-1.5 rounded-xl hover:bg-blue-100 transition-all duration-300 flex-shrink-0 hover:scale-110"
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
        <section className="rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 mb-6 sm:mb-8 md:mb-10 glow-card glass-effect scroll-animate">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 gradient-text">
                Transparent Laundry Pricing
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-1 font-semibold mobile-text" style={{ color: primaryColor }}>
                No Hidden Fees • Fixed Rates • All-Inclusive Service
              </p>
              <p className="text-xs sm:text-sm md:text-base font-medium mobile-text" style={{ color: primaryColor, opacity: 0.8 }}>
                Serving Pushkar and Jaipur with premium quality
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0 float-animation mt-4 md:mt-0">
              <Package className="w-20 h-20 lg:w-28 lg:h-28 xl:w-32 xl:h-32" style={{ color: primaryColor, opacity: 0.3 }} />
            </div>
          </div>
        </section>

        {/* Section 2 - City Selection */}
        <section className="mb-6 sm:mb-8 md:mb-10 city-section-visible">
          <div className="glass-effect rounded-3xl shadow-2xl p-4 sm:p-5 md:p-6 glow-card mobile-section">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: primaryColor }} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mobile-heading">Select Your City</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {cities.map((city, index) => (
                <button
                  key={city.id}
                  onClick={() => handleCityChange(city.id)}
                  className={`shine-effect relative p-4 sm:p-5 rounded-2xl border-3 transition-all duration-300 ${
                    selectedCity === city.id 
                      ? 'shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-cyan-50' 
                      : 'border-gray-200 hover:shadow-xl hover:scale-102 bg-white'
                  }`}
                  style={{
                    borderColor: selectedCity === city.id ? primaryColor : '#e5e7eb',
                    borderWidth: selectedCity === city.id ? '3px' : '2px',
                    minHeight: '100px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="block text-base sm:text-lg font-bold mb-1 gradient-text">
                      {city.name}
                    </span>
                    {city.id === 'pushkar' && (
                      <span className="inline-block text-xs bg-[#1aa6b3] text-white px-3 py-1 rounded-full font-bold mb-2 shadow-md">
                        Main Branch
                      </span>
                    )}
                    <span className="block text-sm sm:text-base font-bold gradient-text">{city.discount} OFF</span>
                  </div>
                  {selectedCity === city.id && (
                    <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-lg">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: primaryColor }} />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-3 text-center">
              <p className="text-xs text-[#1aa6b3] italic font-medium">
                Tap on a city to see specific rates
              </p>
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
            <div className="service-card glass-effect rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden glow-card shine-effect scroll-animate-left">
              <div className="p-4 sm:p-5 bg-gradient-to-br from-[#1aa6b3] to-[#0d7c87]">
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2 drop-shadow-lg" />
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
            <div className="service-card glass-effect rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden glow-card shine-effect scroll-animate">
              <div className="p-4 sm:p-5 bg-gradient-to-br from-[#1aa6b3] to-[#0d7c87]">
                <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2 drop-shadow-lg" />
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
            <div className="service-card glass-effect rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden glow-card shine-effect scroll-animate-right">
              <div className="p-4 sm:p-5 bg-gradient-to-br from-[#1aa6b3] to-[#0d7c87]">
                <Tag className="w-8 h-8 sm:w-10 sm:h-10 text-white mb-2 drop-shadow-lg" />
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
          <div className="rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl glow-card glass-effect mobile-section">
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

        {/* Section 5 - Price Calculator - BIGGER SIZE */}
        <section className="mb-6 sm:mb-8 md:mb-10">
          <div className="glass-effect rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 glow-card mobile-section scroll-animate">
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Calculator className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: primaryColor }} />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mobile-heading">Price Calculator</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
              {['laundry', 'ironing', 'drycleaning'].map((type, index) => (
                <div key={type} className="scroll-animate">
                  <label className="block text-base sm:text-lg font-bold mb-3 gradient-text capitalize">
                    {type} ({type === 'laundry' ? 'kg' : 'pieces'})
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={quantities[type]}
                    onChange={(e) => setQuantities({ ...quantities, [type]: parseInt(e.target.value) || 0 })}
                    className="w-full px-5 py-4 text-lg border-3 rounded-2xl focus:outline-none font-bold transition-all duration-200 bg-white shadow-md"
                    style={{ borderColor: '#d1d5db', color: primaryColor }}
                    onFocus={(e) => e.target.style.borderColor = primaryColor}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    placeholder="0"
                  />
                </div>
              ))}
            </div>

            {calculateTotal() > 0 && (
              <div className="rounded-3xl p-6 sm:p-8 lg:p-10 border-4 glow-card bg-gradient-to-br from-blue-50 via-white to-cyan-50 scroll-animate"
                style={{ borderColor: primaryColor }}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                  <div className="flex-1">
                    <div className="mb-3">
                      <span className="text-lg sm:text-xl font-semibold mobile-text" style={{ color: primaryColor, opacity: 0.8 }}>Subtotal:</span>
                      <span className="text-2xl sm:text-3xl font-bold ml-3 gradient-text">₹{calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="mb-3">
                      <span className="text-lg sm:text-xl font-bold gradient-text mobile-text">
                        First Order Discount ({cities.find(c => c.id === selectedCity)?.discount}):
                      </span>
                      <span className="text-2xl sm:text-3xl font-bold ml-3 gradient-text">
                        -₹{(calculateTotal() - getDiscountedTotal()).toFixed(2)}
                      </span>
                    </div>
                    <div className="pt-3 border-t-3" style={{ borderColor: primaryColor }}>
                      <span className="text-xl sm:text-2xl font-bold gradient-text mobile-text">Total (1st Order):</span>
                      <span className="text-3xl sm:text-4xl md:text-5xl font-bold ml-3 gradient-text">₹{getDiscountedTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <button
                    onClick={onBookingClick}
                    className="w-full sm:w-auto text-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 mt-4 sm:mt-0"
                    style={{ backgroundColor: '#1aa6b3' }}
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
          <div className="rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-2xl glow-card glass-effect mobile-section">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Gift className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" style={{ color: primaryColor }} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold gradient-text mobile-heading">All These Services at No Extra Cost!</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
              {freeInclusions.map((inclusion, index) => (
                <div
                  key={index}
                  className="shine-effect flex items-center gap-1 sm:gap-2 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-xl sm:rounded-2xl p-2 sm:p-3 border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 scroll-animate"
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
        <section className="glass-effect rounded-3xl shadow-2xl p-4 sm:p-5 md:p-6 lg:p-8 glow-card mb-6 sm:mb-8 md:mb-10 scroll-animate">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6 gradient-text mobile-heading">Our Price Promise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {[
              { icon: Tag, title: "No Hidden Fees", desc: "The price you see is the price you pay. Completely transparent pricing." },
              { icon: MapPin, title: "Fixed City Rates", desc: "Consistent pricing across your city. No surprises at checkout." },
              { icon: Sparkles, title: "Premium Quality", desc: "Top-notch service with all premium features included in the base price." }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-3 sm:p-4 shine-effect rounded-2xl hover:shadow-xl transition-all duration-300 scroll-animate bg-gradient-to-br from-white to-blue-50"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 glow-card bg-gradient-to-br from-[#e6f4fb] to-[#d1f0f5]">
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
          <div className="bg-gradient-to-r from-[#1aa6b3] via-teal-500 to-[#1aa6b3] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl glow-card bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">Ready to Experience Premium Laundry Care?</h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-teal-100 mb-4 sm:mb-6 mobile-text">Book your first order now and get 20% OFF!</p>
            <button
              onClick={onBookingClick}
              className="bg-white text-sm sm:text-base md:text-lg font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
              style={{ color: '#1aa6b3' }}
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