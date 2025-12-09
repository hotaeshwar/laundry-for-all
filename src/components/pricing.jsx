import React, { useState } from 'react';
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
    jaipur: {
      laundry: 60,
      ironing: 15,
      drycleaning: 120,
      express: 'Free'
    },
    udaipur: {
      laundry: 55,
      ironing: 15,
      drycleaning: 115,
      express: 'Free'
    },
    jodhpur: {
      laundry: 58,
      ironing: 14,
      drycleaning: 118,
      express: 'Free'
    },
    kota: {
      laundry: 52,
      ironing: 12,
      drycleaning: 110,
      express: 'Free'
    }
  };

  const freeInclusions = [
    'Free Pickup & Delivery',
    'Free Softener Treatment',
    'Free Stain Pretreatment',
    'Free Cuff & Collar Cleaning',
    'Free Disinfectant',
    'Quality Detergent Included'
  ];

  const handleCityChange = (cityId) => {
    setAnimatePrice(true);
    setSelectedCity(cityId);
    setTimeout(() => setAnimatePrice(false), 600);
  };

  const calculateTotal = () => {
    const prices = pricingData[selectedCity];
    const total = (quantities.laundry * prices.laundry) + 
                  (quantities.ironing * prices.ironing) + 
                  (quantities.drycleaning * prices.drycleaning);
    return total;
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
          0%, 100% {
            box-shadow: 0 0 20px rgba(19, 147, 196, 0.3), 0 0 40px rgba(19, 147, 196, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(19, 147, 196, 0.5), 0 0 60px rgba(19, 147, 196, 0.3);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes priceChange {
          0% {
            transform: scale(1) rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: scale(1.1) rotateX(180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotateX(360deg);
            opacity: 1;
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
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .price-animate {
          animation: priceChange 0.6s ease-in-out;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #1393c4 0%, #0d7299 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shine-effect {
          position: relative;
          overflow: hidden;
        }
        
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
        
        .shine-effect:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Header Section */}
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b-4" style={{ borderColor: primaryColor }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                style={{ color: primaryColor }}
                title="Back to Home"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
                LFA Pricing & Offers
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg glow-card">
                20% OFF 1st Order
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                style={{ color: primaryColor }}
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Intro Banner */}
        <section className="rounded-2xl p-8 lg:p-12 mb-12 glow-card bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                Transparent Laundry Pricing
              </h2>
              <p className="text-lg lg:text-xl mb-2 font-semibold" style={{ color: primaryColor }}>
                No Hidden Fees • Fixed Rates • All-Inclusive Service
              </p>
              <p className="text-base font-medium" style={{ color: primaryColor, opacity: 0.8 }}>
                Serving all major cities across Rajasthan with premium quality
              </p>
            </div>
            <div className="flex-shrink-0 float-animation">
              <Package className="w-32 h-32 lg:w-40 lg:h-40" style={{ color: primaryColor, opacity: 0.3 }} />
            </div>
          </div>
        </section>

        {/* City Selector */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 glow-card">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-7 h-7" style={{ color: primaryColor }} />
              <h3 className="text-2xl font-bold gradient-text">
                Select Your City
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cities.map((city) => (
                <button
                  key={city.id}
                  onClick={() => handleCityChange(city.id)}
                  className={`shine-effect relative p-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedCity === city.id
                      ? 'shadow-2xl scale-105'
                      : 'border-gray-200 hover:shadow-xl hover:scale-102'
                  }`}
                  style={{
                    borderColor: selectedCity === city.id ? primaryColor : '#e5e7eb',
                    backgroundColor: selectedCity === city.id ? '#e6f4fb' : 'white'
                  }}
                >
                  <span className="block text-lg font-bold mb-1 gradient-text">
                    {city.name}
                  </span>
                  <span className="block text-sm font-bold gradient-text">
                    {city.discount} OFF
                  </span>
                  {selectedCity === city.id && (
                    <div className="absolute top-2 right-2">
                      <Check className="w-6 h-6" style={{ color: primaryColor }} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center gradient-text">
            Our Service Rates for <span className="capitalize">{selectedCity}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Laundry Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden glow-card shine-effect">
              <div className="p-6" style={{ backgroundColor: primaryColor }}>
                <Package className="w-12 h-12 text-white mb-3" />
                <h4 className="text-2xl font-bold text-white">Laundry Service</h4>
              </div>
              <div className="p-6">
                <div className={`mb-6 ${animatePrice ? 'price-animate' : ''}`}>
                  <span className="text-5xl font-bold gradient-text">
                    ₹{pricingData[selectedCity].laundry}
                  </span>
                  <span className="text-lg ml-2 font-semibold" style={{ color: primaryColor, opacity: 0.7 }}>/kg</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>Wash, Dry & Fold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>Premium Detergent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>24-48 Hour Turnaround</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ironing Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden glow-card shine-effect">
              <div className="p-6" style={{ backgroundColor: primaryColor }}>
                <Sparkles className="w-12 h-12 text-white mb-3" />
                <h4 className="text-2xl font-bold text-white">Ironing Service</h4>
              </div>
              <div className="p-6">
                <div className={`mb-6 ${animatePrice ? 'price-animate' : ''}`}>
                  <span className="text-5xl font-bold gradient-text">
                    ₹{pricingData[selectedCity].ironing}
                  </span>
                  <span className="text-lg ml-2 font-semibold" style={{ color: primaryColor, opacity: 0.7 }}>/piece</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>Perfect Press Finish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>Hanger/Fold Option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>Same Day Available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Dry Cleaning Card */}
            <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden md:col-span-2 lg:col-span-1 glow-card shine-effect">
              <div className="p-6" style={{ backgroundColor: primaryColor }}>
                <Tag className="w-12 h-12 text-white mb-3" />
                <h4 className="text-2xl font-bold text-white">Dry Cleaning</h4>
              </div>
              <div className="p-6">
                <div className={`mb-6 ${animatePrice ? 'price-animate' : ''}`}>
                  <span className="text-5xl font-bold gradient-text">
                    ₹{pricingData[selectedCity].drycleaning}
                  </span>
                  <span className="text-lg ml-2 font-semibold" style={{ color: primaryColor, opacity: 0.7 }}>/piece</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>Eco-Friendly Solvents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>Suits, Jackets, Coats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: primaryColor }} />
                    <span className="text-base font-medium" style={{ color: primaryColor }}>3-5 Day Delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Express Service Banner */}
        <section className="mb-12">
          <div className="rounded-2xl p-8 shadow-xl glow-card bg-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Zap className="w-16 h-16 flex-shrink-0 float-animation" style={{ color: primaryColor }} />
                <div>
                  <h3 className="text-3xl font-bold mb-2 gradient-text">
                    Express 3-Hour Service
                  </h3>
                  <p className="text-lg font-semibold" style={{ color: primaryColor, opacity: 0.8 }}>
                    Need it urgently? We've got you covered!
                  </p>
                </div>
              </div>
              <div className="text-center sm:text-right">
                <span className="block text-4xl font-bold gradient-text">
                  {pricingData[selectedCity].express}
                </span>
                <span className="block text-base font-semibold" style={{ color: primaryColor, opacity: 0.8 }}>
                  No Extra Charge
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Price Calculator */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 glow-card">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-7 h-7" style={{ color: primaryColor }} />
              <h3 className="text-2xl font-bold gradient-text">
                Price Calculator
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold mb-2 gradient-text">
                  Laundry (kg)
                </label>
                <input
                  type="number"
                  min="0"
                  value={quantities.laundry}
                  onChange={(e) => setQuantities({...quantities, laundry: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg font-semibold transition-all duration-200"
                  style={{ borderColor: '#d1d5db', color: primaryColor }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 gradient-text">
                  Ironing (pieces)
                </label>
                <input
                  type="number"
                  min="0"
                  value={quantities.ironing}
                  onChange={(e) => setQuantities({...quantities, ironing: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg font-semibold transition-all duration-200"
                  style={{ borderColor: '#d1d5db', color: primaryColor }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  placeholder="0"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 gradient-text">
                  Dry Cleaning (pieces)
                </label>
                <input
                  type="number"
                  min="0"
                  value={quantities.drycleaning}
                  onChange={(e) => setQuantities({...quantities, drycleaning: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none text-lg font-semibold transition-all duration-200"
                  style={{ borderColor: '#d1d5db', color: primaryColor }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                  placeholder="0"
                />
              </div>
            </div>

            {calculateTotal() > 0 && (
              <div className="rounded-xl p-6 border-2 glow-card bg-gradient-to-br from-blue-50 to-white" style={{ borderColor: primaryColor }}>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="flex-1">
                    <div className="mb-2">
                      <span className="text-lg font-semibold" style={{ color: primaryColor, opacity: 0.8 }}>
                        Subtotal:
                      </span>
                      <span className="text-2xl font-bold ml-3 gradient-text">
                        ₹{calculateTotal().toFixed(2)}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-lg font-bold gradient-text">
                        First Order Discount ({cities.find(c => c.id === selectedCity)?.discount}):
                      </span>
                      <span className="text-2xl font-bold ml-3 gradient-text">
                        -₹{(calculateTotal() - getDiscountedTotal()).toFixed(2)}
                      </span>
                    </div>
                    <div className="pt-3 border-t-2" style={{ borderColor: primaryColor }}>
                      <span className="text-xl font-bold gradient-text">
                        Total (1st Order):
                      </span>
                      <span className="text-4xl font-bold ml-3 gradient-text">
                        ₹{getDiscountedTotal().toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button 
                    onClick={onBookingClick}
                    className="shine-effect w-full sm:w-auto text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: primaryColor }}>
                    Book Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Free Inclusions */}
        <section className="mb-12">
          <div className="rounded-2xl p-10 shadow-xl glow-card bg-white">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-10 h-10" style={{ color: primaryColor }} />
              <h3 className="text-3xl font-bold gradient-text">
                All These Services at No Extra Cost!
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {freeInclusions.map((inclusion, index) => (
                <div
                  key={index}
                  className="shine-effect flex items-center gap-3 bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 border-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ borderColor: primaryColor }}
                >
                  <Check className="w-6 h-6 flex-shrink-0" style={{ color: primaryColor }} />
                  <span className="text-base font-semibold gradient-text">
                    {inclusion}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-white rounded-2xl shadow-xl p-10 glow-card mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 gradient-text">
            Our Price Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 shine-effect rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 glow-card"
                   style={{ backgroundColor: '#e6f4fb' }}>
                <Tag className="w-10 h-10" style={{ color: primaryColor }} />
              </div>
              <h4 className="text-xl font-bold mb-2 gradient-text">
                No Hidden Fees
              </h4>
              <p className="text-base font-medium" style={{ color: primaryColor, opacity: 0.8 }}>
                The price you see is the price you pay. Completely transparent pricing.
              </p>
            </div>
            <div className="text-center p-6 shine-effect rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 glow-card"
                   style={{ backgroundColor: '#e6f4fb' }}>
                <MapPin className="w-10 h-10" style={{ color: primaryColor }} />
              </div>
              <h4 className="text-xl font-bold mb-2 gradient-text">
                Fixed City Rates
              </h4>
              <p className="text-base font-medium" style={{ color: primaryColor, opacity: 0.8 }}>
                Consistent pricing across your city. No surprises at checkout.
              </p>
            </div>
            <div className="text-center p-6 shine-effect rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 glow-card"
                   style={{ backgroundColor: '#e6f4fb' }}>
                <Sparkles className="w-10 h-10" style={{ color: primaryColor }} />
              </div>
              <h4 className="text-xl font-bold mb-2 gradient-text">
                Premium Quality
              </h4>
              <p className="text-base font-medium" style={{ color: primaryColor, opacity: 0.8 }}>
                Top-notch service with all premium features included in the base price.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-12 shadow-2xl glow-card">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience Premium Laundry Care?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Book your first order now and get 20% OFF!
            </p>
            <button 
              onClick={onBookingClick}
              className="shine-effect bg-white text-xl font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ color: primaryColor }}>
              Book Your Order Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingOffers;