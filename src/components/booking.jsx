import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, User, Home, MessageSquare, Package, Droplets, Shirt, CheckCircle, X, Plus, ChevronRight, Copy, Sparkles, Star, Award, TrendingUp } from 'lucide-react';

const BookingPage = () => {
  // Generate a simplified booking number
  const generateBookingNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return `LFA-${year}-${month}${day}-${randomNum}`;
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pickupDate: '',
    pickupTime: '',
    serviceType: '',
    selectedServices: [],
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [generatedBookingNumber, setGeneratedBookingNumber] = useState('');
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [justSelectedService, setJustSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const companyPhone = '+91-7014638562';
  const companyWhatsApp = '917014638562'; // WhatsApp number without + and -
  const companyEmail = 'laundryforalllfa@gmail.com';
  const companyAddress = 'Under Hotel Masterinn, Jamni Kund Road, Pushkar, Rajasthan - 305022';

  const services = [
    { 
      id: 'wash-fold', 
      name: 'Wash & Fold', 
      icon: Package,
      description: 'Regular laundry service with folding',
      price: 'Starting at ₹100'
    },
    { 
      id: 'dry-clean', 
      name: 'Dry Cleaning', 
      icon: Shirt,
      description: 'Professional dry cleaning for delicate fabrics',
      price: 'Starting at ₹300'
    },
    { 
      id: 'steam-iron', 
      name: 'Steam Iron', 
      icon: Droplets,
      description: 'Premium ironing service',
      price: 'Starting at ₹200'
    },
    { 
      id: 'premium-care', 
      name: 'Premium Care', 
      icon: CheckCircle,
      description: 'Special care for premium garments',
      price: 'Starting at ₹500'
    },
    { 
      id: 'shoe-cleaning', 
      name: 'Shoe Cleaning', 
      icon: Shirt,
      description: 'Professional shoe cleaning service',
      price: 'Starting at ₹250'
    },
    { 
      id: 'bag-cleaning', 
      name: 'Bag Cleaning', 
      icon: Package,
      description: 'Handbag and backpack cleaning',
      price: 'Starting at ₹350'
    }
  ];

  const cities = ['Pushkar', 'Jaipur'];

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
  const dateRef = useRef(null);
  const timeRef = useRef(null);

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

  useEffect(() => {
    if (showCopySuccess) {
      const timer = setTimeout(() => {
        setShowCopySuccess(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCopySuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'pickupDate' && value && timeRef.current) {
      setTimeout(() => {
        timeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  };

  const handleServiceSelect = (service) => {
    if (formData.selectedServices.some(s => s.id === service.id)) {
      setFormData(prev => ({
        ...prev,
        selectedServices: prev.selectedServices.filter(s => s.id !== service.id)
      }));
    } else {
      setJustSelectedService(service);
      const updatedServices = [...formData.selectedServices, service];
      setFormData(prev => ({
        ...prev,
        selectedServices: updatedServices,
        serviceType: service.name
      }));
      setShowServiceModal(true);
      setIsModalOpen(true);
    }
  };

  const handleAddMoreServices = () => {
    setShowServiceModal(false);
    setIsModalOpen(false);
  };

  const handleNoMoreServices = () => {
    setShowServiceModal(false);
    setIsModalOpen(false);
    
    if (dateRef.current) {
      setTimeout(() => {
        dateRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  };

  const removeService = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.filter(s => s.id !== serviceId)
    }));
  };

  const copyBookingNumber = () => {
    navigator.clipboard.writeText(generatedBookingNumber);
    setShowCopySuccess(true);
  };

  // Function to send WhatsApp message
  const sendWhatsAppMessage = (bookingNumber, bookingData) => {
    const selectedServicesText = bookingData.selectedServices
      .map(service => `${service.name}`)
      .join(', ');

    const message = `🎉 *New Booking Request*

📋 *Booking ID:* ${bookingNumber}

👤 *Customer Details:*
Name: ${bookingData.name}
Phone: ${bookingData.phone}
Email: ${bookingData.email}

📍 *Pickup Address:*
${bookingData.address}
City: ${bookingData.city}

📦 *Services:* ${selectedServicesText}

📅 *Pickup Schedule:*
Date: ${bookingData.pickupDate}
Time: ${bookingData.pickupTime}

${bookingData.message ? `💬 *Special Instructions:*
${bookingData.message}` : ''}

Please confirm this booking. Thank you!`;

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.address || 
        !formData.city || !formData.pickupDate || !formData.pickupTime || 
        formData.selectedServices.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    const newBookingNumber = generateBookingNumber();
    setGeneratedBookingNumber(newBookingNumber);

    setIsSubmitting(true);
    setSubmitStatus('');

    // Capture form data before any async operations
    const capturedFormData = { ...formData };

    try {
      const selectedServicesText = formData.selectedServices
        .map(service => `• ${service.name} - ${service.description} (${service.price})`)
        .join('\n');

      const currentDate = new Date().toLocaleDateString('en-IN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const currentTime = new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
      });

      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/ajax/laundryforalllfa@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';

      const fields = {
        '_subject': `📋 New Laundry Booking - ${newBookingNumber}`,
        '_template': 'table',
        '_replyto': formData.email,
        '_cc': formData.email,
        '_captcha': 'false',
        '_next': window.location.href,
        
        'Booking Number': newBookingNumber,
        'Booking Date': currentDate,
        'Booking Time': currentTime,
        
        'Customer Name': formData.name,
        'Customer Phone': formData.phone,
        'Customer Email': formData.email,
        'Customer Address': formData.address,
        'City': formData.city,
        
        'Pickup Date': formData.pickupDate,
        'Pickup Time': formData.pickupTime,
        
        'Total Services': formData.selectedServices.length.toString(),
        'Selected Services': selectedServicesText,
        
        'Additional Instructions': formData.message || 'No additional instructions',
        
        '_confirmation': `Dear ${formData.name},\n\nThank you for choosing LaundryForAll!\n\nYour booking has been confirmed with the following details:\n\n📋 Booking Number: ${newBookingNumber}\n📍 Pickup Date: ${formData.pickupDate}\n⏰ Pickup Time: ${formData.pickupTime}\n📦 Selected Services: ${formData.selectedServices.length} service(s)\n\nWe will contact you shortly to confirm your pickup.\n\nBest regards,\nLaundryForAll Team\n${companyAddress}`
      };

      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        formElement.appendChild(input);
      });

      document.body.appendChild(formElement);
      formElement.submit();

      setTimeout(() => {
        if (document.body.contains(formElement)) {
          document.body.removeChild(formElement);
        }
      }, 1000);

      // Send WhatsApp message immediately with captured data
      sendWhatsAppMessage(newBookingNumber, capturedFormData);

      setSubmitStatus('success');
      
      setTimeout(() => {
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          city: '',
          pickupDate: '',
          pickupTime: '',
          selectedServices: [],
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
      </div>

      {showServiceModal && justSelectedService && isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 shadow-2xl transform animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#1aa6b3] flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                {formData.selectedServices.length === 1 ? 'Service Added!' : 'Add More Services?'}
              </h3>
              <button
                onClick={() => {
                  setShowServiceModal(false);
                  setIsModalOpen(false);
                }}
                className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-[#1aa6b3]/10 to-[#1aa6b3]/5 rounded-xl border border-[#1aa6b3]/20">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                {(() => {
                  const IconComponent = justSelectedService.icon;
                  return <IconComponent className="w-6 h-6 text-[#1aa6b3]" />;
                })()}
              </div>
              <div>
                <p className="font-semibold text-[#1aa6b3]">{justSelectedService.name}</p>
                <p className="text-sm text-[#1aa6b3]/70">Added to your booking</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              {formData.selectedServices.length === 1 
                ? 'Would you like to add more services to your booking? You can select multiple services for the same pickup.'
                : 'Would you like to add another service to your booking?'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddMoreServices}
                className="flex-1 bg-gradient-to-r from-[#1aa6b3] to-[#158993] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Plus className="w-5 h-5" />
                {formData.selectedServices.length === 1 ? 'Add More Services' : 'Yes, Add More'}
              </button>
              <button
                onClick={handleNoMoreServices}
                className="flex-1 border-2 border-[#1aa6b3] text-[#1aa6b3] font-semibold py-3 px-6 rounded-xl hover:bg-[#1aa6b3]/5 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                {formData.selectedServices.length === 1 ? 'No, Continue' : 'No, I\'m Done'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div 
        ref={heroRef}
        className="fade-in-up bg-gradient-to-br from-white via-[#1aa6b3]/5 to-white text-[#1aa6b3] py-16 md:py-24 px-4 relative"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {generatedBookingNumber && submitStatus === 'success' && (
            <div className="inline-block bg-gradient-to-r from-[#1aa6b3]/10 to-[#1aa6b3]/5 backdrop-blur-sm rounded-full px-8 py-4 mb-6 animate-bounce-slow border border-[#1aa6b3]/30 shadow-lg">
              <p className="text-lg font-semibold text-[#1aa6b3] flex items-center gap-2 justify-center">
                <Star className="w-5 h-5 fill-current" />
                Booking ID: {generatedBookingNumber}
                <Star className="w-5 h-5 fill-current" />
              </p>
            </div>
          )}
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#1aa6b3] to-[#158993] bg-clip-text text-transparent">
            Schedule Your Free Pickup
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-[#1aa6b3]/80">
            Professional laundry and dry cleaning services delivered to your doorstep. 
            We serve Pushkar and Jaipur with care and convenience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            <span className="flex items-center gap-2 bg-white text-[#1aa6b3] px-6 py-3 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">24-48 Hours</span>
            </span>
            <span className="flex items-center gap-2 bg-white text-[#1aa6b3] px-6 py-3 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Quality Assured</span>
            </span>
            <span className="flex items-center gap-2 bg-white text-[#1aa6b3] px-6 py-3 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
              <Package className="w-5 h-5" />
              <span className="font-semibold">Free Pickup & Delivery</span>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <div 
              ref={formRef}
              className="fade-in-up bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-t-4 border-[#1aa6b3] relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1aa6b3]/10 to-transparent rounded-bl-full"></div>
              
              <div className="mb-8 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1aa6b3] mb-3 flex items-center gap-3">
                  <Calendar className="w-8 h-8" />
                  Book Your Pickup
                </h2>
                <p className="text-[#1aa6b3]/80">
                  Fill in your details below and we'll schedule a convenient pickup time for you.
                </p>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-green-50/50 border-2 border-green-200 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1 animate-bounce" />
                    <div className="flex-1">
                      <p className="text-green-800 font-bold text-lg flex items-center gap-2">
                        Booking Successful! ✅
                        <Sparkles className="w-5 h-5" />
                      </p>
                      
                      <div className="mt-3 mb-4 p-4 bg-white border-2 border-green-300 rounded-xl relative shadow-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-green-700 text-sm mb-1">Your booking number is:</p>
                            <p className="text-green-800 font-bold text-xl">{generatedBookingNumber}</p>
                          </div>
                          <button
                            type="button"
                            onClick={copyBookingNumber}
                            className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-xl transition-all hover:scale-105 shadow-sm"
                          >
                            <Copy className="w-4 h-4" />
                            <span className="text-sm font-medium">Copy</span>
                          </button>
                        </div>
                        
                        {showCopySuccess && (
                          <div className="absolute -top-2 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-fade-in-out shadow-lg">
                            Copied!
                          </div>
                        )}
                      </div>
                      
                      <p className="text-green-700 mb-2">
                        ✅ Your booking has been confirmed! A copy has been sent to your email.
                      </p>
                      <p className="text-green-700 mb-2">
                        📞 We will contact you shortly at <strong>{formData.phone || 'your phone number'}</strong> to confirm your pickup.
                      </p>
                      <p className="text-green-700 mb-3">
                        📍 Pickup scheduled for <strong>{formData.pickupDate}</strong> at <strong>{formData.pickupTime}</strong>
                      </p>
                      
                      <div className="mt-3 p-3 bg-green-100 rounded-xl border border-green-300">
                        <p className="text-green-800 text-sm mb-2 font-medium">
                          💬 A WhatsApp message has been sent to our team with your booking details!
                        </p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-green-200">
                        <button
                          type="button"
                          onClick={() => {
                            setFormData({
                              name: '',
                              phone: '',
                              email: '',
                              address: '',
                              city: '',
                              pickupDate: '',
                              pickupTime: '',
                              selectedServices: [],
                              message: ''
                            });
                            setSubmitStatus('');
                            setGeneratedBookingNumber('');
                          }}
                          className="text-green-700 hover:text-green-900 font-medium underline"
                        >
                          Make Another Booking
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-6 bg-red-50 border-2 border-red-200 rounded-2xl shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <p className="text-red-800 font-bold text-lg">Booking Failed! ❌</p>
                      <p className="text-red-700 mt-2">
                        Something went wrong. Please try again or contact us directly at {companyPhone}.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitStatus('')}
                        className="mt-3 text-red-700 hover:text-red-900 font-medium underline"
                      >
                        Try Again
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {(!submitStatus || submitStatus === 'error') && (
                <div className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3]"
                          placeholder="John Doe"
                          disabled={isModalOpen}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3]"
                          placeholder="+91 98765 43210"
                          disabled={isModalOpen}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3]"
                        placeholder="john@example.com"
                        disabled={isModalOpen}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                      Pickup Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Home className="absolute left-3 top-3 w-5 h-5 text-[#1aa6b3]/60" />
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all resize-none hover:border-gray-300 text-[#1aa6b3]"
                        placeholder="Enter your complete pickup address"
                        disabled={isModalOpen}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all appearance-none bg-white hover:border-gray-300 text-[#1aa6b3]"
                        disabled={isModalOpen}
                      >
                        <option value="">Select your city</option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="block text-sm font-semibold text-[#1aa6b3]">
                        Select Services <span className="text-red-500">*</span>
                      </label>
                      <span className="text-sm text-[#1aa6b3]/70 bg-[#1aa6b3]/10 px-3 py-1 rounded-full">
                        {formData.selectedServices.length} service{formData.selectedServices.length !== 1 ? 's' : ''} selected
                      </span>
                    </div>
                    
                    {formData.selectedServices.length > 0 && (
                      <div className="mb-4 p-4 bg-gradient-to-r from-[#1aa6b3]/5 to-[#1aa6b3]/10 rounded-xl border border-[#1aa6b3]/20">
                        <p className="text-sm font-medium text-[#1aa6b3] mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4" />
                          Selected Services:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {formData.selectedServices.map(service => (
                            <div
                              key={service.id}
                              className="flex items-center gap-2 bg-white border-2 border-[#1aa6b3] rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all"
                            >
                              <span className="text-sm text-[#1aa6b3] font-medium">{service.name}</span>
                              <button
                                type="button"
                                onClick={() => removeService(service.id)}
                                className="text-[#1aa6b3] hover:text-[#158993] hover:bg-[#1aa6b3]/10 rounded-full p-1 transition-all"
                                disabled={isModalOpen}
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        const isSelected = formData.selectedServices.some(s => s.id === service.id);
                        
                        return (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceSelect(service)}
                            className={`p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg flex flex-col items-center group relative overflow-hidden ${
                              isSelected
                                ? 'border-[#1aa6b3] bg-gradient-to-br from-[#1aa6b3]/10 to-[#1aa6b3]/5 shadow-md scale-105'
                                : 'border-gray-200 hover:border-[#1aa6b3] hover:bg-[#1aa6b3]/5'
                            } ${isModalOpen ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isModalOpen}
                          >
                            {isSelected && (
                              <div className="absolute top-2 right-2 bg-[#1aa6b3] rounded-full p-1">
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                            )}
                            <IconComponent className={`w-8 h-8 mb-2 transition-transform group-hover:scale-110 ${
                              isSelected ? 'text-[#1aa6b3]' : 'text-[#1aa6b3]/60'
                            }`} />
                            <p className={`text-sm font-medium text-center mb-1 ${
                              isSelected ? 'text-[#1aa6b3] font-semibold' : 'text-[#1aa6b3]/80'
                            }`}>
                              {service.name}
                            </p>
                            <p className="text-xs text-[#1aa6b3]/60 text-center">
                              {service.price}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div ref={dateRef}>
                      <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                        Pickup Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                        <input
                          type="date"
                          name="pickupDate"
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                          min={new Date().toISOString().split('T')[0]}
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3]"
                          disabled={isModalOpen}
                        />
                      </div>
                    </div>

                    <div ref={timeRef}>
                      <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1aa6b3]/60" />
                        <select
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all appearance-none bg-white hover:border-gray-300 text-[#1aa6b3]"
                          disabled={isModalOpen}
                        >
                          <option value="">Select time slot</option>
                          {timeSlots.map(slot => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1aa6b3] mb-2">
                      Additional Instructions (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-[#1aa6b3]/60" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all resize-none hover:border-gray-300 text-[#1aa6b3]"
                        placeholder="Any special instructions or requirements?"
                        disabled={isModalOpen}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || formData.selectedServices.length === 0 || isModalOpen}
                    className="w-full bg-gradient-to-r from-[#1aa6b3] to-[#158993] hover:shadow-2xl text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-lg hover:scale-[1.02] relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center relative z-10">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Scheduling...
                      </span>
                    ) : (
                      <span className="relative z-10">
                        Schedule Free Pickup ({formData.selectedServices.length} service{formData.selectedServices.length !== 1 ? 's' : ''})
                      </span>
                    )}
                  </button>

                  <p className="text-sm text-[#1aa6b3]/70 text-center">
                    By submitting, you agree to our terms and conditions
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div 
              ref={contactCardRef}
              className="fade-in-up bg-gradient-to-br from-[#1aa6b3] to-[#158993] text-white rounded-3xl shadow-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              
              {generatedBookingNumber && (
                <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/30 relative z-10">
                  <p className="text-sm opacity-90">Your Booking Number</p>
                  <p className="text-xl font-bold flex items-center gap-2">
                    {generatedBookingNumber}
                    <Star className="w-5 h-5 fill-current" />
                  </p>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-6 relative z-10 flex items-center gap-2">
                <Phone className="w-6 h-6" />
                Quick Contact
              </h3>
              
              <div className="space-y-4 relative z-10">
                <a 
                  href={`tel:${companyPhone}`} 
                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105 duration-300"
                >
                  <Phone className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Call Us</p>
                    <p className="text-base">{companyPhone}</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${companyEmail}`} 
                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all border border-white/20 hover:scale-105 duration-300"
                >
                  <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Email Us</p>
                    <p className="text-base break-all">{companyEmail}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Our Location</p>
                    <p className="text-sm">{companyAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <Clock className="w-6 h-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm">Working Hours</p>
                    <p className="text-sm">Mon - Sun: 9 AM - 7 PM</p>
                    <p className="text-sm font-semibold">Open 7 Days a Week!</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              ref={serviceAreasRef}
              className="fade-in-up bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-[#1aa6b3] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1aa6b3]/5 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <MapPin className="w-6 h-6 text-[#1aa6b3]" />
                <h3 className="text-2xl font-bold text-[#1aa6b3]">Service Areas</h3>
              </div>
              
              <p className="text-[#1aa6b3]/80 text-sm mb-4 relative z-10">
                We proudly serve the following cities:
              </p>
              
              <div className="space-y-2 relative z-10">
                {cities.map((city, index) => (
                  <div 
                    key={city} 
                    className={`flex items-center gap-2 transition-all p-2 rounded-lg ${
                      city === 'Pushkar' 
                        ? 'text-[#1aa6b3] font-bold bg-gradient-to-r from-[#1aa6b3]/20 to-[#1aa6b3]/10 border-2 border-[#1aa6b3] scale-105 shadow-md' 
                        : 'text-[#1aa6b3] hover:text-[#158993] hover:bg-[#1aa6b3]/5'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className={`w-4 h-4 flex-shrink-0 ${city === 'Pushkar' ? 'fill-current' : ''}`} />
                    <span className={city === 'Pushkar' ? 'font-bold' : 'font-medium'}>
                      {city}
                      {city === 'Pushkar' && <span className="ml-2 text-xs bg-[#1aa6b3] text-white px-2 py-0.5 rounded-full">Main Branch</span>}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-[#1aa6b3]/10 to-[#1aa6b3]/5 rounded-xl border border-[#1aa6b3]/20 relative z-10">
                <p className="text-sm text-[#1aa6b3]">
                  <strong className="font-semibold">Note:</strong> Expanding to more cities soon. Contact us for availability in your area.
                </p>
              </div>
            </div>

            <div 
              ref={whyChooseRef}
              className="fade-in-up bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-[#1aa6b3] relative overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1aa6b3]/5 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-bold text-[#1aa6b3] mb-5 relative z-10 flex items-center gap-2">
                <Award className="w-6 h-6" />
                Why Choose LaundryForAll?
              </h3>
              
              <div className="space-y-4 relative z-10">
                {[
                  { title: 'Premium Quality', desc: 'Eco-friendly detergents & advanced techniques', icon: Sparkles },
                  { title: 'Fast Turnaround', desc: '24-48 hours service guarantee', icon: Clock },
                  { title: 'Affordable Pricing', desc: 'Transparent costs with no hidden charges', icon: TrendingUp },
                  { title: 'Doorstep Service', desc: 'Free pickup and delivery at your convenience', icon: Package }
                ].map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div 
                      key={item.title}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#1aa6b3]/5 transition-all border border-transparent hover:border-[#1aa6b3]/20 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-2 bg-[#1aa6b3]/10 rounded-lg group-hover:bg-[#1aa6b3]/20 transition-all">
                        <ItemIcon className="w-5 h-5 text-[#1aa6b3]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1aa6b3] text-sm">{item.title}</p>
                        <p className="text-[#1aa6b3]/80 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        ref={ctaRef}
        className="fade-in-up bg-gradient-to-r from-[#1aa6b3] to-[#158993] text-white py-16 px-4 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Our customer support team is here to help you with any queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${companyPhone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1aa6b3] px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href={`mailto:${companyEmail}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#1aa6b3] transition-all duration-300 hover:scale-105"
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

        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(-10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out;
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in-up {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .animate-fade-in-out,
          .animate-bounce-slow,
          .animate-scale-in,
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingPage;