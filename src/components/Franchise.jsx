import React, { useState, useEffect, useRef } from 'react';
import { 
  User, Mail, Phone, MapPin, Building2, DollarSign, MessageSquare, 
  CheckCircle, X, Star, Award, TrendingUp, Users, Target, 
  Briefcase, GraduationCap, BarChart3, Copy, Sparkles, Clock, Play
} from 'lucide-react';

const Franchise = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [generatedApplicationNumber, setGeneratedApplicationNumber] = useState('');

  const companyPhone = '+91-7014638562';
  const companyWhatsApp = '917014638562';
  const companyEmail = 'laundryforalllfa@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: '',
    experience: '',
    message: ''
  });

  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const videosRef = useRef(null);
  const investmentRef = useRef(null);
  const faqRef = useRef(null);

  // Generate application number
  const generateApplicationNumber = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return `LFA-FR-${year}-${month}${day}-${randomNum}`;
  };

  // Faster scroll animations - trigger earlier and animate faster
  useEffect(() => {
    const handleScrollAnimations = () => {
      const sections = [heroRef, benefitsRef, videosRef, investmentRef, faqRef];

      sections.forEach((ref) => {
        if (ref.current && !ref.current.classList.contains('animate-in')) {
          const rect = ref.current.getBoundingClientRect();
          // Changed from 0.75 to 0.9 to trigger earlier
          const isVisible = rect.top < window.innerHeight * 0.9;
          
          if (isVisible) {
            ref.current.classList.add('animate-in');
            
            // Faster stagger - reduced from 120ms to 60ms
            const children = ref.current.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('stagger-in');
              }, index * 60);
            });
          }
        }
      });
    };

    // Trigger immediately on mount
    setTimeout(handleScrollAnimations, 50);

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

  // Franchise benefits data
  const benefits = [
    {
      icon: Briefcase,
      title: "Proven Business Model",
      description: "Track record of growth and profitability"
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      description: "Complete guidance to ensure success"
    },
    {
      icon: BarChart3,
      title: "Marketing Support",
      description: "National campaigns & local assistance"
    },
    {
      icon: Users,
      title: "Strong Network",
      description: "Community of successful franchisees"
    }
  ];

  // Google Drive videos - Fixed embed URLs
  const videos = [
    {
      id: "1",
      title: "Franchise Overview",
      embedUrl: "https://drive.google.com/file/d/153oijS9qkyp4_vk5qJ6M-T7N3EMyELgZ/preview"
    },
    {
      id: "2",
      title: "Success Stories",
      embedUrl: "https://drive.google.com/file/d/1ALMQ6u0e7NrBUS--t-Xn3XBAZvNnUg86/preview"
    },
    {
      id: "3",
      title: "Training Process",
      embedUrl: "https://drive.google.com/file/d/1nySCK-p4AT5bAmhwMJ-OQvAPclzCOXgf/preview"
    },
    {
      id: "4",
      title: "Operations Guide",
      embedUrl: "https://drive.google.com/file/d/1S16XSKkPaumkojHYNb8jiaDqLDq7Yr9f/preview"
    }
  ];

  const investmentOptions = [
    '₹5-10 Lakhs',
    '₹10-20 Lakhs',
    '₹20-50 Lakhs',
    '₹50 Lakhs+'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const copyApplicationNumber = () => {
    navigator.clipboard.writeText(generatedApplicationNumber);
    setShowCopySuccess(true);
  };

  // Function to send WhatsApp message
  const sendWhatsAppMessage = (applicationNumber, applicationData) => {
    const message = `🎉 *New Franchise Application*

📋 *Application ID:* ${applicationNumber}

👤 *Applicant Details:*
Name: ${applicationData.name}
Email: ${applicationData.email}
Phone: ${applicationData.phone}
City: ${applicationData.city}

💰 *Investment Capacity:* ${applicationData.investment}

💼 *Business Experience:* ${applicationData.experience || 'Not specified'}

${applicationData.message ? `💬 *Additional Information:*
${applicationData.message}` : ''}

Please review this franchise application. Thank you!`;

    const whatsappUrl = `https://wa.me/${companyWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.investment) {
      alert('Please fill in all required fields');
      return;
    }

    const newApplicationNumber = generateApplicationNumber();
    setGeneratedApplicationNumber(newApplicationNumber);

    setIsSubmitting(true);
    setSubmitStatus('');

    const capturedFormData = { ...formData };

    try {
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
        '_subject': `🏢 New Franchise Application - ${newApplicationNumber}`,
        '_template': 'table',
        '_replyto': formData.email,
        '_cc': formData.email,
        '_captcha': 'false',
        '_next': window.location.href,
        
        'Application Number': newApplicationNumber,
        'Application Date': currentDate,
        'Application Time': currentTime,
        
        'Applicant Name': formData.name,
        'Applicant Email': formData.email,
        'Applicant Phone': formData.phone,
        'City': formData.city,
        'Investment Capacity': formData.investment,
        'Business Experience': formData.experience || 'Not specified',
        'Additional Message': formData.message || 'No additional information',
        
        '_confirmation': `Dear ${formData.name},\n\nThank you for your interest in LaundryForAll Franchise!\n\nYour application has been received with the following details:\n\n📋 Application Number: ${newApplicationNumber}\n💰 Investment Range: ${formData.investment}\n📍 Preferred City: ${formData.city}\n\nOur franchise team will review your application and contact you within 2-3 business days.\n\nBest regards,\nLaundryForAll Franchise Team\nPhone: ${companyPhone}\nEmail: ${companyEmail}`
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

      sendWhatsAppMessage(newApplicationNumber, capturedFormData);

      setSubmitStatus('success');
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          investment: '',
          experience: '',
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

      {/* Hero Section - Compact */}
      <section 
        ref={heroRef}
        className="fade-in-up relative overflow-hidden bg-gradient-to-br from-white via-[#1aa6b3]/5 to-white text-[#1aa6b3] py-12 md:py-16 px-4"
      >
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {generatedApplicationNumber && submitStatus === 'success' && (
            <div className="stagger-item inline-block bg-gradient-to-r from-[#1aa6b3]/10 to-[#1aa6b3]/5 backdrop-blur-sm rounded-full px-6 py-3 mb-4 animate-bounce-slow border border-[#1aa6b3]/30 shadow-lg mx-auto block w-fit">
              <p className="text-base font-semibold text-[#1aa6b3] flex items-center gap-2 justify-center">
                <Star className="w-4 h-4 fill-current" />
                Application ID: {generatedApplicationNumber}
                <Star className="w-4 h-4 fill-current" />
              </p>
            </div>
          )}
          
          <div className="text-center">
            <h1 className="stagger-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-[#1aa6b3] to-[#158993] bg-clip-text text-transparent">
              Join Our Franchise Family
            </h1>
            <p className="stagger-item text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto px-4 text-[#1aa6b3]/80">
              Build your future with a proven business model and comprehensive support
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="stagger-item flex items-center gap-2 bg-white text-[#1aa6b3] px-4 py-2 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
                <Award className="w-4 h-4" />
                <span className="font-semibold">Proven Model</span>
              </span>
              <span className="stagger-item flex items-center gap-2 bg-white text-[#1aa6b3] px-4 py-2 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">High Returns</span>
              </span>
              <span className="stagger-item flex items-center gap-2 bg-white text-[#1aa6b3] px-4 py-2 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
                <Users className="w-4 h-4" />
                <span className="font-semibold">Full Support</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Compact */}
      <section 
        ref={benefitsRef}
        className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10"
      >
        <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1aa6b3]">
          Why Choose Our Franchise?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="stagger-item group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 transform hover:-translate-y-2 border-2 border-[#1aa6b3]/30 hover:border-[#1aa6b3] overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1aa6b3]/20 via-[#158993]/10 to-transparent blur-xl"></div>
                
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-[-2px] rounded-2xl bg-gradient-to-r from-[#1aa6b3] via-[#158993] to-[#1aa6b3] animate-glow-pulse"></div>
                  <div className="absolute inset-0 rounded-2xl bg-white"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="p-3 bg-gradient-to-br from-[#1aa6b3]/10 to-[#158993]/5 rounded-xl w-fit mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-[#1aa6b3]/30">
                    <IconComponent className="w-6 h-6 text-[#1aa6b3]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-[#1aa6b3] group-hover:text-[#158993] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#1aa6b3]/70 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Gallery Section - Compact with Modal */}
      <section 
        ref={videosRef}
        className="fade-in-up bg-white py-8 sm:py-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1aa6b3]">
            Learn More About Our Franchise
          </h2>
          
          {/* Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="stagger-item bg-gradient-to-br from-[#1aa6b3]/5 to-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-[#1aa6b3]/20"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="relative aspect-video bg-gradient-to-br from-[#1aa6b3]/20 to-[#158993]/20 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center bg-[#1aa6b3]/40 hover:bg-[#1aa6b3]/50 transition-all">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#1aa6b3] ml-0.5" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1aa6b3] line-clamp-1">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in" 
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full animate-scale-in" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video bg-black">
              <iframe
                src={selectedVideo.embedUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                title={selectedVideo.title}
              ></iframe>
            </div>
            <div className="p-4 bg-gradient-to-r from-[#1aa6b3]/5 to-white flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-semibold text-[#1aa6b3]">
                {selectedVideo.title}
              </h3>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-sm text-[#1aa6b3] hover:text-[#158993] font-medium transition-colors flex items-center gap-2 bg-[#1aa6b3]/10 px-4 py-2 rounded-lg hover:bg-[#1aa6b3]/20"
              >
                <X className="w-4 h-4" />
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form & Investment Section - Compact */}
      <section 
        ref={investmentRef}
        className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-t-4 border-[#1aa6b3]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Column - Investment Details */}
            <div className="stagger-item p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#1aa6b3] to-[#158993] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 relative z-10">
                Investment Details
              </h2>
              <div className="space-y-3 sm:space-y-4 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Initial Investment
                  </p>
                  <p className="text-xl sm:text-2xl font-bold">₹10 - ₹50 Lakhs</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Expected ROI
                  </p>
                  <p className="text-xl sm:text-2xl font-bold">25-35% Annually</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/15 transition-all">
                  <p className="text-xs sm:text-sm text-white/80 mb-1 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Payback Period
                  </p>
                  <p className="text-xl sm:text-2xl font-bold">2-3 Years</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Application Form */}
            <div className="stagger-item bg-white p-6 sm:p-8 lg:p-10">
              <h3 className="text-lg sm:text-xl font-bold mb-5 text-[#1aa6b3] flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Apply for Franchise
              </h3>

              {submitStatus === 'success' && (
                <div className="mb-5 p-5 bg-gradient-to-r from-green-50 to-green-50/50 border-2 border-green-200 rounded-xl shadow-lg animate-scale-in">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-green-800 font-bold text-base flex items-center gap-2 mb-3">
                        Application Submitted! ✅
                      </p>
                      
                      <div className="mb-3 p-3 bg-white border-2 border-green-300 rounded-lg relative shadow-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="text-green-700 text-xs mb-1">Application number:</p>
                            <p className="text-green-800 font-bold text-base">{generatedApplicationNumber}</p>
                          </div>
                          <button
                            type="button"
                            onClick={copyApplicationNumber}
                            className="flex items-center gap-1 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-1.5 rounded-lg transition-all hover:scale-105 shadow-sm"
                          >
                            <Copy className="w-3 h-3" />
                            <span className="text-xs font-medium">Copy</span>
                          </button>
                        </div>
                        
                        {showCopySuccess && (
                          <div className="absolute -top-2 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-fade-in-out shadow-lg">
                            Copied!
                          </div>
                        )}
                      </div>
                      
                      <p className="text-green-700 text-sm mb-2">
                        ✅ Confirmation sent to your email
                      </p>
                      <p className="text-green-700 text-sm">
                        📞 We'll contact you within 2-3 business days
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-5 p-5 bg-red-50 border-2 border-red-200 rounded-xl shadow-lg">
                  <p className="text-red-800 font-bold text-base mb-2">Submission Failed! ❌</p>
                  <p className="text-red-700 text-sm mb-3">
                    Please try again or contact us at {companyPhone}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitStatus('')}
                    className="text-red-700 hover:text-red-900 font-medium underline text-sm"
                  >
                    Try Again
                  </button>
                </div>
              )}

              {(!submitStatus || submitStatus === 'error') && (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                      <input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name" 
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com" 
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                      <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210" 
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">
                      City <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                      <input 
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Your City" 
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">
                      Investment Capacity <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                      <select
                        name="investment"
                        value={formData.investment}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all appearance-none bg-white hover:border-gray-300 text-[#1aa6b3] text-sm"
                      >
                        <option value="">Select investment range</option>
                        {investmentOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">
                      Business Experience (Optional)
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#1aa6b3]/60" />
                      <input 
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        placeholder="e.g., 5 years in retail" 
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all hover:border-gray-300 text-[#1aa6b3] text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#1aa6b3] mb-1.5">
                      Additional Information (Optional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-[#1aa6b3]/60" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Tell us about your goals..."
                        className="w-full pl-10 pr-3 py-2.5 border-2 border-gray-200 rounded-lg focus:border-[#1aa6b3] focus:outline-none focus:ring-2 focus:ring-[#1aa6b3]/20 transition-all resize-none hover:border-gray-300 text-[#1aa6b3] text-sm"
                      ></textarea>
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#1aa6b3] to-[#158993] hover:shadow-xl text-white font-bold py-3 px-5 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base hover:scale-[1.02] relative overflow-hidden group mt-2"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    {isSubmitting ? (
                      <span className="flex items-center justify-center relative z-10">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="relative z-10">Submit Application</span>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Compact */}
      <section 
        ref={faqRef}
        className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10"
      >
        <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1aa6b3]">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {[
            {
              q: "What support do you provide?",
              a: "Comprehensive training, marketing support, operational guidance, and ongoing business consulting."
            },
            {
              q: "How long does it take to open?",
              a: "Typically 3-6 months from signing the agreement to opening day."
            },
            {
              q: "What are the territory rights?",
              a: "Exclusive territory rights within a defined geographic area."
            },
            {
              q: "What is the franchise fee?",
              a: "Initial franchise fee ranges from ₹2-5 lakhs based on location."
            }
          ].map((faq, index) => (
            <div key={index} className="stagger-item bg-white rounded-2xl shadow-md p-4 sm:p-6 border-l-4 border-[#1aa6b3] hover:shadow-lg transition-all hover:scale-[1.01]">
              <h3 className="text-sm sm:text-base font-semibold mb-2 text-[#1aa6b3]">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#1aa6b3]/70 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        /* Faster Main Section Animations - reduced from 0.8s to 0.4s */
        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Faster Staggered Item Animations - reduced from 0.6s to 0.3s */
        .stagger-item {
          opacity: 0;
          transform: translateY(20px) scale(0.97);
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stagger-item.stagger-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* Glow Pulse Animation for Card Borders */
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.5;
            filter: blur(8px);
          }
          50% {
            opacity: 0.8;
            filter: blur(12px);
          }
        }

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        /* Scale In Animation - faster */
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Fade In Animation */
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        /* Fade In Out Animation */
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(-10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }

        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out;
        }

        /* Bounce Slow Animation */
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .fade-in-up,
          .stagger-item {
            opacity: 1;
            transform: none;
            transition: none;
          }
          
          .animate-scale-in,
          .animate-fade-in,
          .animate-fade-in-out,
          .animate-bounce-slow,
          .animate-glow-pulse {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Franchise;