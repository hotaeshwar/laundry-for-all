import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, Play, X, MapPin, Quote, Users, ThumbsUp, 
  Award, TrendingUp
} from 'lucide-react';

const TestimonialsAndReviews = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [counters, setCounters] = useState({
    customers: 0,
    rating: 0,
    orders: 0,
    satisfaction: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const videosRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Target values for counters
  const targetValues = {
    customers: 5000,
    rating: 4.9,
    orders: 10000,
    satisfaction: 98
  };

  // Animate counters
  const animateCounter = (key, target, duration = 2000) => {
    const startTime = Date.now();
    const isDecimal = key === 'rating';
    
    const updateCounter = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = easeOutQuart * target;
      
      setCounters(prev => ({
        ...prev,
        [key]: isDecimal ? Number(currentValue.toFixed(1)) : Math.floor(currentValue)
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };
    
    requestAnimationFrame(updateCounter);
  };

  // Start counter animations when stats section comes into view
  useEffect(() => {
    const handleStatsAnimation = () => {
      if (!statsRef.current || hasAnimated) return;
      
      const rect = statsRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        setHasAnimated(true);
        animateCounter('customers', targetValues.customers, 2000);
        animateCounter('rating', targetValues.rating, 2000);
        animateCounter('orders', targetValues.orders, 2000);
        animateCounter('satisfaction', targetValues.satisfaction, 2000);
      }
    };

    handleStatsAnimation();
    window.addEventListener('scroll', handleStatsAnimation);
    
    return () => {
      window.removeEventListener('scroll', handleStatsAnimation);
    };
  }, [hasAnimated]);

  // Faster scroll animations
  useEffect(() => {
    const handleScrollAnimations = () => {
      const sections = [heroRef, statsRef, videosRef, testimonialsRef, ctaRef];

      sections.forEach((ref) => {
        if (ref.current && !ref.current.classList.contains('animate-in')) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.9;
          
          if (isVisible) {
            ref.current.classList.add('animate-in');
            
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

  // Video testimonials from Google Drive
  const videoTestimonials = [
    {
      id: "1",
      name: "Customer from Pushkar",
      location: "Pushkar",
      embedUrl: "https://drive.google.com/file/d/1xRFJ_B-pTKeM8ps0_Yip953qLuIPjB8o/preview",
      rating: 5
    },
    {
      id: "2",
      name: "Happy Customer",
      location: "Jaipur",
      embedUrl: "https://drive.google.com/file/d/1UaQgQuyOoR5l40JzpAMK8Oy6Pcz4aO8n/preview",
      rating: 5
    },
    {
      id: "3",
      name: "Satisfied Client",
      location: "Pushkar",
      embedUrl: "https://drive.google.com/file/d/1nz5n-_0f5Oqb-vUgoRct2rzOGAsTfyP-/preview",
      rating: 5
    },
    {
      id: "4",
      name: "Regular Customer",
      location: "Jaipur",
      embedUrl: "https://drive.google.com/file/d/1MJekEzXZh1h6Zik-_wz6pcBgU0tMrry8/preview",
      rating: 5
    },
    {
      id: "5",
      name: "Local Business",
      location: "Pushkar",
      embedUrl: "https://drive.google.com/file/d/1_GcrLakYG17SanxCHXbzWAaLVXctVnu9/preview",
      rating: 5
    },
    {
      id: "6",
      name: "Loyal Customer",
      location: "Jaipur",
      embedUrl: "https://drive.google.com/file/d/1dwgzcicLCRMcu0ke3ApiqzW5glRfVcc8/preview",
      rating: 5
    },
    {
      id: "7",
      name: "Hotel Partner",
      location: "Pushkar",
      embedUrl: "https://drive.google.com/file/d/1AXHxomG2W50l6QKU4bY5IZC-sy9skq5N/preview",
      rating: 5
    },
    {
      id: "8",
      name: "Premium Service User",
      location: "Jaipur",
      embedUrl: "https://drive.google.com/file/d/1P1zpwKPIQYSWYqU6xB5A2g7iInGCInls/preview",
      rating: 5
    }
  ];

  // Written testimonials - Genuine customer reviews
  const writtenTestimonials = [
    {
      id: "w1",
      name: "Rajesh Mehta",
      location: "Pushkar",
      rating: 5,
      text: "Best laundry service in Pushkar! They picked up my clothes from hotel and returned them next day, perfectly cleaned and folded. Very reasonable prices too.",
      service: "Hotel Laundry"
    },
    {
      id: "w2",
      name: "Priya Singh",
      location: "Jaipur",
      rating: 5,
      text: "I have been using their service for 6 months now. Always on time, clothes smell fresh and the staff is very polite. Good job guys!",
      service: "Regular Service"
    },
    {
      id: "w3",
      name: "Amit Sharma",
      location: "Pushkar",
      rating: 5,
      text: "Took my expensive suit for dry cleaning, was worried but they did amazing job! Stain removed completely. Will definitely use again.",
      service: "Dry Cleaning"
    },
    {
      id: "w4",
      name: "Sneha Patel",
      location: "Jaipur",
      rating: 5,
      text: "Very happy with the service. They are reliable and do good work. The WhatsApp booking is also very convenient for me.",
      service: "Wash & Fold"
    },
    {
      id: "w5",
      name: "Vikram Rathore",
      location: "Pushkar",
      rating: 5,
      text: "Running a guest house and needed reliable laundry partner. These guys never disappoint! Always deliver on time and quality is consistent.",
      service: "Bulk Service"
    },
    {
      id: "w6",
      name: "Anita Jain",
      location: "Jaipur",
      rating: 5,
      text: "Finally found a trustworthy laundry service! My delicate sarees are handled with care. Staff is friendly and prices are fair. Highly recommend.",
      service: "Premium Care"
    }
  ];

  const stats = [
    {
      icon: Users,
      key: 'customers',
      suffix: '+',
      label: "Happy Customers",
      color: "from-[#1aa6b3] to-[#158993]"
    },
    {
      icon: Star,
      key: 'rating',
      suffix: '/5',
      label: "Average Rating",
      color: "from-[#158993] to-[#1aa6b3]"
    },
    {
      icon: Award,
      key: 'orders',
      suffix: '+',
      label: "Orders Completed",
      color: "from-[#1aa6b3] to-[#158993]"
    },
    {
      icon: TrendingUp,
      key: 'satisfaction',
      suffix: '%',
      label: "Customer Satisfaction",
      color: "from-[#158993] to-[#1aa6b3]"
    }
  ];

  // Format counter display
  const formatCounterValue = (key, value) => {
    if (key === 'customers' || key === 'orders') {
      return value.toLocaleString();
    }
    return value;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1aa6b3]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="fade-in-up relative overflow-hidden bg-gradient-to-br from-white via-[#1aa6b3]/5 to-white text-[#1aa6b3] py-12 md:py-16 px-4"
      >
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="stagger-item text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-[#1aa6b3] to-[#158993] bg-clip-text text-transparent">
              Customer Testimonials & Reviews
            </h1>
            <p className="stagger-item text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-3xl mx-auto px-4 text-[#1aa6b3]/80">
              Hear what our satisfied customers from Pushkar and Jaipur have to say about LaundryForAll
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <span className="stagger-item flex items-center gap-2 bg-white text-[#1aa6b3] px-4 py-2 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">5-Star Reviews</span>
              </span>
              <span className="stagger-item flex items-center gap-2 bg-white text-[#1aa6b3] px-4 py-2 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
                <ThumbsUp className="w-4 h-4" />
                <span className="font-semibold">Verified Customers</span>
              </span>
              <span className="stagger-item flex items-center gap-2 bg-white text-[#1aa6b3] px-4 py-2 rounded-full hover:shadow-lg transition-all border border-[#1aa6b3]/20 hover:scale-105 cursor-default">
                <Award className="w-4 h-4" />
                <span className="font-semibold">Premium Service</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const counterValue = counters[stat.key];
            const displayValue = formatCounterValue(stat.key, counterValue);
            
            return (
              <div 
                key={index}
                className="stagger-item group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 text-center transform hover:-translate-y-2 border-2 border-[#1aa6b3]/30 hover:border-[#1aa6b3] overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1aa6b3]/20 via-[#158993]/10 to-transparent blur-xl"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#1aa6b3] mb-1">
                    {displayValue}{stat.suffix}
                  </p>
                  <p className="text-xs sm:text-sm text-[#1aa6b3]/70">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section 
        ref={videosRef}
        className="fade-in-up bg-white py-8 sm:py-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#1aa6b3]">
              Video Testimonials
            </h2>
            
            <p className="stagger-item text-sm text-[#1aa6b3]/70 mb-6">
              Hear directly from our happy customers in Pushkar and Jaipur
            </p>
          </div>
          
          {/* Video Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {videoTestimonials.map((video) => (
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
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1aa6b3] line-clamp-1">
                      {video.name}
                    </h3>
                    <div className="flex items-center gap-0.5">
                      {[...Array(video.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-[#1aa6b3]/60 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {video.location}
                  </p>
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
                title={selectedVideo.name}
              ></iframe>
            </div>
            <div className="p-4 bg-gradient-to-r from-[#1aa6b3]/5 to-white flex justify-between items-center">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#1aa6b3]">
                  {selectedVideo.name}
                </h3>
                <p className="text-sm text-[#1aa6b3]/70 flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedVideo.location}
                </p>
              </div>
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

      {/* Written Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="fade-in-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10"
      >
        <h2 className="stagger-item text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 text-[#1aa6b3]">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {writtenTestimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="stagger-item group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 border-2 border-[#1aa6b3]/30 hover:border-[#1aa6b3] overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#1aa6b3]/20 via-[#158993]/10 to-transparent blur-xl"></div>
              
              <div className="relative z-10">
                <Quote className="w-8 h-8 text-[#1aa6b3]/20 mb-3" />
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-sm text-[#1aa6b3]/80 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-[#1aa6b3]/10 pt-3">
                  <p className="font-semibold text-[#1aa6b3]">{testimonial.name}</p>
                  <p className="text-xs text-[#1aa6b3]/60 flex items-center gap-1 mb-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                  <p className="text-xs text-[#1aa6b3]/60 bg-[#1aa6b3]/5 inline-block px-2 py-1 rounded-full">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="fade-in-up bg-gradient-to-r from-[#1aa6b3] to-[#158993] py-12 sm:py-16 relative z-10"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="stagger-item text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Join Thousands of Happy Customers
          </h2>
          <p className="stagger-item text-base sm:text-lg text-white/90">
            Experience the best laundry service in Pushkar and Jaipur
          </p>
        </div>
      </section>

      <style>{`
        /* Faster Main Section Animations */
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

        /* Faster Staggered Item Animations */
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

        /* Scale In Animation */
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

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          .fade-in-up,
          .stagger-item {
            opacity: 1;
            transform: none;
            transition: none;
          }
          
          .animate-scale-in,
          .animate-fade-in {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialsAndReviews;