import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, User, Home, MessageSquare, Package, Droplets, Shirt, CheckCircle, X, Plus, ChevronRight, Copy } from 'lucide-react';

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

  const companyPhone = '+91-7054828682';
  const companyEmail = 'masterinpushkar@gmail.com';

  const services = [
    { 
      id: 'wash-fold', 
      name: 'Wash & Fold', 
      icon: Package,
      description: 'Regular laundry service with folding',
      price: 'Starting at ₹150'
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
    
    // Auto-scroll to time section after date is selected
    if (name === 'pickupDate' && value && timeRef.current) {
      setTimeout(() => {
        timeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    }
  };

  const handleServiceSelect = (service) => {
    if (formData.selectedServices.some(s => s.id === service.id)) {
      // Remove service if already selected
      setFormData(prev => ({
        ...prev,
        selectedServices: prev.selectedServices.filter(s => s.id !== service.id)
      }));
    } else {
      // Add service if not selected
      setJustSelectedService(service);
      
      // Add the service first
      const updatedServices = [...formData.selectedServices, service];
      setFormData(prev => ({
        ...prev,
        selectedServices: updatedServices,
        serviceType: service.name
      }));
      
      // Show modal EVERY TIME a service is selected
      setShowServiceModal(true);
      setIsModalOpen(true);
    }
  };

  const handleAddMoreServices = () => {
    // User wants to add more services - keep modal closed
    setShowServiceModal(false);
    setIsModalOpen(false);
  };

  const handleNoMoreServices = () => {
    // User doesn't want more services - close modal and scroll to date
    setShowServiceModal(false);
    setIsModalOpen(false);
    
    // Auto-scroll to date section after closing modal
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

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.address || 
        !formData.city || !formData.pickupDate || !formData.pickupTime || 
        formData.selectedServices.length === 0) {
      alert('Please fill in all required fields');
      return;
    }

    // Generate booking number only upon submission
    const newBookingNumber = generateBookingNumber();
    setGeneratedBookingNumber(newBookingNumber);

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Prepare email content
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

      // Create form element for FormSubmit (Like the ContactUs component)
      const formElement = document.createElement('form');
      formElement.action = 'https://formsubmit.co/ajax/masterinpushkar@gmail.com';
      formElement.method = 'POST';
      formElement.style.display = 'none';

      // Prepare form fields for FormSubmit
      const fields = {
        '_subject': `📋 New Laundry Booking - ${newBookingNumber}`,
        '_template': 'table',
        '_replyto': formData.email,
        '_cc': formData.email, // Send copy to customer
        '_captcha': 'false',
        '_next': window.location.href, // Stay on same page
        
        // Booking Information
        'Booking Number': newBookingNumber,
        'Booking Date': currentDate,
        'Booking Time': currentTime,
        
        // Customer Information
        'Customer Name': formData.name,
        'Customer Phone': formData.phone,
        'Customer Email': formData.email,
        'Customer Address': formData.address,
        'City': formData.city,
        
        // Pickup Information
        'Pickup Date': formData.pickupDate,
        'Pickup Time': formData.pickupTime,
        
        // Services Information
        'Total Services': formData.selectedServices.length.toString(),
        'Selected Services': selectedServicesText,
        
        // Additional Information
        'Additional Instructions': formData.message || 'No additional instructions',
        
        // Customer Confirmation Message
        '_confirmation': `Dear ${formData.name},\n\nThank you for choosing LaundryForAll!\n\nYour booking has been confirmed with the following details:\n\n📋 Booking Number: ${newBookingNumber}\n📍 Pickup Date: ${formData.pickupDate}\n⏰ Pickup Time: ${formData.pickupTime}\n📦 Selected Services: ${formData.selectedServices.length} service(s)\n\nWe will contact you shortly to confirm your pickup.\n\nBest regards,\nLaundryForAll Team`
      };

      // Create and append input fields
      Object.entries(fields).forEach(([name, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        formElement.appendChild(input);
      });

      // Append form to body and submit
      document.body.appendChild(formElement);
      formElement.submit();

      // Clean up - remove form after submission
      setTimeout(() => {
        if (document.body.contains(formElement)) {
          document.body.removeChild(formElement);
        }
      }, 1000);

      setSubmitStatus('success');
      
      // Reset form after successful submission
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Service Selection Modal - Shows EVERY TIME a service is selected */}
      {showServiceModal && justSelectedService && isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#1393c4]">
                {formData.selectedServices.length === 1 ? 'Service Added!' : 'Add More Services?'}
              </h3>
              <button
                onClick={() => {
                  setShowServiceModal(false);
                  setIsModalOpen(false);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex items-center gap-3 mb-6 p-4 bg-[#1393c4]/5 rounded-lg">
              <div className="p-2 bg-[#1393c4]/10 rounded-lg">
                {(() => {
                  const IconComponent = justSelectedService.icon;
                  return <IconComponent className="w-6 h-6 text-[#1393c4]" />;
                })()}
              </div>
              <div>
                <p className="font-semibold text-[#1393c4]">{justSelectedService.name}</p>
                <p className="text-sm text-[#1393c4]/70">Added to your booking</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              {formData.selectedServices.length === 1 
                ? 'Would you like to add more services to your booking? You can select multiple services for the same pickup.'
                : 'Would you like to add another service to your booking?'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddMoreServices}
                className="flex-1 bg-[#1393c4] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0d7aa1] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                {formData.selectedServices.length === 1 ? 'Add More Services' : 'Yes, Add More'}
              </button>
              <button
                onClick={handleNoMoreServices}
                className="flex-1 border-2 border-[#1393c4] text-[#1393c4] font-semibold py-3 px-6 rounded-lg hover:bg-[#1393c4]/5 transition-colors flex items-center justify-center gap-2"
              >
                {formData.selectedServices.length === 1 ? 'No, Continue' : 'No, I\'m Done'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="fade-in-up bg-gradient-to-r from-[#1393c4] to-[#0d7aa1] text-white py-16 md:py-24 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Booking number only shows after submission */}
          {generatedBookingNumber && submitStatus === 'success' && (
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 animate-pulse">
              <p className="text-lg font-semibold">Booking ID: {generatedBookingNumber}</p>
            </div>
          )}
          
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
                <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-green-800 font-bold text-lg">Booking Successful! ✅</p>
                      
                      {/* Booking number only shows after successful submission */}
                      <div className="mt-3 mb-4 p-4 bg-white border border-green-300 rounded-lg relative">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-green-700 text-sm mb-1">Your booking number is:</p>
                            <p className="text-green-800 font-bold text-xl">{generatedBookingNumber}</p>
                          </div>
                          <button
                            type="button"
                            onClick={copyBookingNumber}
                            className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg transition-colors"
                          >
                            <Copy className="w-4 h-4" />
                            <span className="text-sm font-medium">Copy</span>
                          </button>
                        </div>
                        
                        {showCopySuccess && (
                          <div className="absolute -top-2 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-fade-in-out">
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
                      <p className="text-green-700">
                        📍 Pickup scheduled for <strong>{formData.pickupDate}</strong> at <strong>{formData.pickupTime}</strong>
                      </p>
                      
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
                <div className="mb-6 p-6 bg-red-50 border border-red-200 rounded-xl">
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

              {/* Show form only if not in success state OR if success state but user wants to make another booking */}
              {(!submitStatus || submitStatus === 'error') && (
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
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                          placeholder="John Doe"
                          disabled={isModalOpen}
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
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                          placeholder="+91 98765 43210"
                          disabled={isModalOpen}
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
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                        placeholder="john@example.com"
                        disabled={isModalOpen}
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
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors resize-none hover:border-gray-300 text-[#1393c4]"
                        placeholder="Enter your complete pickup address"
                        disabled={isModalOpen}
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
                        required
                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors appearance-none bg-white hover:border-gray-300 text-[#1393c4]"
                        disabled={isModalOpen}
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
                    <div className="flex justify-between items-center mb-3">
                      <label className="block text-sm font-semibold text-[#1393c4]">
                        Select Services <span className="text-red-500">*</span>
                      </label>
                      <span className="text-sm text-[#1393c4]/70">
                        {formData.selectedServices.length} service{formData.selectedServices.length !== 1 ? 's' : ''} selected
                      </span>
                    </div>
                    
                    {/* Selected Services Preview */}
                    {formData.selectedServices.length > 0 && (
                      <div className="mb-4 p-4 bg-[#1393c4]/5 rounded-lg border border-[#1393c4]/20">
                        <p className="text-sm font-medium text-[#1393c4] mb-2">Selected Services:</p>
                        <div className="flex flex-wrap gap-2">
                          {formData.selectedServices.map(service => (
                            <div
                              key={service.id}
                              className="flex items-center gap-2 bg-white border border-[#1393c4] rounded-full px-3 py-1.5"
                            >
                              <span className="text-sm text-[#1393c4] font-medium">{service.name}</span>
                              <button
                                type="button"
                                onClick={() => removeService(service.id)}
                                className="text-[#1393c4] hover:text-[#0d7aa1]"
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
                            className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md flex flex-col items-center ${
                              isSelected
                                ? 'border-[#1393c4] bg-[#1393c4]/10 shadow-md'
                                : 'border-gray-200 hover:border-[#1393c4] hover:bg-[#1393c4]/5'
                            } ${isModalOpen ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isModalOpen}
                          >
                            <IconComponent className={`w-8 h-8 mb-2 ${
                              isSelected ? 'text-[#1393c4]' : 'text-[#1393c4]/60'
                            }`} />
                            <p className={`text-sm font-medium text-center mb-1 ${
                              isSelected ? 'text-[#1393c4] font-semibold' : 'text-[#1393c4]/80'
                            }`}>
                              {service.name}
                            </p>
                            <p className="text-xs text-[#1393c4]/60 text-center">
                              {service.price}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pickup Schedule */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div ref={dateRef}>
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
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors hover:border-gray-300 text-[#1393c4]"
                          disabled={isModalOpen}
                        />
                      </div>
                    </div>

                    <div ref={timeRef}>
                      <label className="block text-sm font-semibold text-[#1393c4] mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#1393c4]/60" />
                        <select
                          name="pickupTime"
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#1393c4] focus:outline-none transition-colors appearance-none bg-white hover:border-gray-300 text-[#1393c4]"
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
                        disabled={isModalOpen}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || formData.selectedServices.length === 0 || isModalOpen}
                    className="w-full bg-[#1393c4] hover:bg-[#0d7aa1] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-lg hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Scheduling...
                      </span>
                    ) : (
                      `Schedule Free Pickup (${formData.selectedServices.length} service${formData.selectedServices.length !== 1 ? 's' : ''})`
                    )}
                  </button>

                  <p className="text-sm text-[#1393c4]/70 text-center">
                    By submitting, you agree to our terms and conditions
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Contact Card */}
            <div 
              ref={contactCardRef}
              className="fade-in-up bg-gradient-to-br from-[#1393c4] to-[#0d7aa1] text-white rounded-2xl shadow-xl p-8"
            >
              {/* Only show booking number in sidebar if it exists */}
              {generatedBookingNumber && (
                <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
                  <p className="text-sm opacity-90">Your Booking Number</p>
                  <p className="text-xl font-bold">{generatedBookingNumber}</p>
                </div>
              )}
              
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

        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(-10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .fade-in-up {
            opacity: 1;
            transform: none;
            transition: none;
          }
          .animate-fade-in-out {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default BookingPage;
