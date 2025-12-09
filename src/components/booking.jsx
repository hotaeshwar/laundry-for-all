import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, User, Home, MessageSquare, Package, Droplets, Shirt, CheckCircle } from 'lucide-react';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pickupDate: '',
    pickupTime: '',
    serviceType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const companyPhone = '+91-7054828682';
  const companyEmail = 'masterinpushkar@gmail.com';

  const services = [
    { id: 'wash-fold', name: 'Wash & Fold', icon: Package },
    { id: 'dry-clean', name: 'Dry Cleaning', icon: Shirt },
    { id: 'steam-iron', name: 'Steam Iron', icon: Droplets },
    { id: 'premium-care', name: 'Premium Care', icon: CheckCircle }
  ];

  const cities = ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner'];

  const timeSlots = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '01:00 PM - 03:00 PM',
    '03:00 PM - 05:00 PM',
    '05:00 PM - 07:00 PM'
  ];

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const contactCardRef = useRef(null);
  const serviceAreasRef = useRef(null);
  const whyChooseRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = [
        heroRef, formRef, contactCardRef, 
        serviceAreasRef, whyChooseRef, ctaRef
      ];

      elements.forEach((ref) => {
        if (ref.current && !ref.current.classList.contains('animate-in')) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.85;
          
          if (isVisible) {
            ref.current.classList.add('animate-in');
          }
        }
      });
    };

    setTimeout(handleScrollAnimations, 100);

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollAnimations();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', handleScrollAnimations);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleScrollAnimations);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.address || 
        !formData.city || !formData.pickupDate || !formData.pickupTime || !formData.serviceType) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/masterinpushkar@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          pickupDate: formData.pickupDate,
          pickupTime: formData.pickupTime,
          serviceType: formData.serviceType,
          message: formData.message,
          _subject: 'New Pickup Request - LaundryForAll',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          pickupDate: '',
          pickupTime: '',
          serviceType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="fade-in-up bg-gradient-to-r from-[#1393c4] to-[#0d7aa1] text-white py-16 md:py-24 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Schedule Your Free Pickup
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Professional laundry and dry cleaning services delivered to your doorstep. 
            We serve all major cities across Rajasthan with care and convenience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <span className="flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all">
              <Clock className="w-5 h-5" />
              <span>24-48 Hours</span>
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all">
              <CheckCircle className="w-5 h-5" />
              <span>Quality Assured</span>
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-all">
              <Package className="w-5 h-5" />
              <span>Free Pickup & Delivery</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div 
              ref={formRef}
              className="fade-in-up bg-white rounded-2xl shadow-xl p-8 md:p-10 border-t-4 border-[#1393c4]"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1393c4] mb-3">
                  Book Your Pickup
                </h2>
                <p className="text-[#1393c4]/80">
                  Fill in your details below and we'll schedule a convenient pickup time for you.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-semibold">Booking Successful!</p>
                    <p className="text-green-700 text-sm">We'll contact you shortly to confirm your pickup.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1393c4]/60" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1393c4]/60" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1393c4]/60" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Address Information */}
                <div>
                  <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                    Pickup Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Home className="absolute left-3 top-3 w-5 h-5 text-[#1393c4]/60" />
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors resize-none hover:border-gray-300 text-[#1393c4]"
                      placeholder="Enter your complete pickup address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1393c4]/60" />
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors appearance-none bg-white hover:border-gray-300 text-[#1393c4]"
                    >
                      <option value="">Select your city</option>
                      {cities.map(city => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-[#1393c4] mb-3">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {services.map((service) => {
                      const IconComponent = service.icon;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, serviceType: service.name }))}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                            formData.serviceType === service.name
                              ? 'border-[#1393c4] bg-[#1393c4]/10 shadow-md'
                              : 'border-gray-200 hover:border-[#1393c4] hover:bg-[#1393c4]/5'
                          }`}
                        >
                          <IconComponent className={`w-8 h-8 mx-auto mb-2 ${
                            formData.serviceType === service.name ? 'text-[#1393c4]' : 'text-[#1393c4]/60'
                          }`} />
                          <p className={`text-sm font-medium text-center ${
                            formData.serviceType === service.name ? 'text-[#1393c4] font-semibold' : 'text-[#1393c4]/80'
                          }`}>
                            {service.name}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Pickup Schedule */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                      Pickup Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1393c4]/60" />
                      <input
                        type="date"
                        name="pickupDate"
                        value={formData.pickupDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1393c4]/60" />
                      <select
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleInputChange}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors appearance-none bg-white hover:border-gray-300 text-[#1393c4]"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                    Additional Instructions (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#1393c4]/60" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors resize-none hover:border-gray-300 text-[#1393c4]"
                      placeholder="Any special instructions or requirements?"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-[#1393c4] hover:bg-[#0d7aa1] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Scheduling...' : 'Schedule Free Pickup'}
                </button>

                <p className="text-sm text-[#1393c4]/70 text-center">
                  By submitting, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Card */}
            <div 
              ref={contactCardRef}
              className="fade-in-up bg-gradient-to-br from-[#1393c4] to-[#0d7aa1] text-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <a 
                  href={`tel:${companyPhone}`} 
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Call Us</p>
                    <p className="text-base">{companyPhone}</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${companyEmail}`} 
                  className="flex items-start gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Email Us</p>
                    <p className="text-base break-all">{companyEmail}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Working Hours</p>
                    <p className="text-sm">Mon - Sat: 9 AM - 7 PM</p>
                    <p className="text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Card */}
            <div 
              ref={serviceAreasRef}
              className="fade-in-up bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#1393c4]"
            >
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="w-6 h-6 text-[#1393c4]" />
                <h3 className="text-2xl font-bold text-[#1393c4]">Service Areas</h3>
              </div>
              
              <p className="text-[#1393c4]/80 text-sm mb-4">
                We proudly serve all major cities across Rajasthan:
              </p>
              
              <div className="space-y-2">
                {cities.map((city) => (
                  <div 
                    key={city} 
                    className="flex items-center gap-2 text-[#1393c4] hover:text-[#0d7aa1] transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-[#1393c4]/10 rounded-xl">
                <p className="text-sm text-[#1393c4]">
                  <strong className="font-semibold">Note:</strong> Expanding to more cities soon. Contact us for availability in your area.
                </p>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div 
              ref={whyChooseRef}
              className="fade-in-up bg-white rounded-2xl shadow-xl p-8 border-t-4 border-[#1393c4]"
            >
              <h3 className="text-2xl font-bold text-[#1393c4] mb-5">Why Choose LaundryForAll?</h3>
              
              <div className="space-y-4">
                {[
                  { title: 'Premium Quality', desc: 'Eco-friendly detergents & advanced techniques' },
                  { title: 'Fast Turnaround', desc: '24-48 hours service guarantee' },
                  { title: 'Affordable Pricing', desc: 'Transparent costs with no hidden charges' },
                  { title: 'Doorstep Service', desc: 'Free pickup and delivery at your convenience' }
                ].map((item) => (
                  <div 
                    key={item.title}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#1393c4]/5 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-[#1393c4] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-[#1393c4] text-sm">{item.title}</p>
                      <p className="text-[#1393c4]/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div 
        ref={ctaRef}
        className="fade-in-up bg-gradient-to-r from-[#1393c4] to-[#0d7aa1] text-white py-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our customer support team is here to help you with any queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyPhone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1393c4] px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href={`mailto:${companyEmail}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1393c4] transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in-up {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingPage;