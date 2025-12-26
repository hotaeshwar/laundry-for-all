import React, { useEffect, useState } from 'react';
import { 
  Calendar, 
  CheckCircle,
  Clock,
  Shield,
  Star,
  Award,
  Home,
  Package,
  Tag,
  Filter,
  X
} from 'lucide-react';
import WhyLFA from './WhyLFA';

export default function Services() {
  const [visibleSections, setVisibleSections] = useState({});
  const [selectedPromise, setSelectedPromise] = useState(null);

  const services = [
    {
      id: 1,
      title: "Wash & Dry & Fold",
      subtitle: "3-Hour Express Service",
      description: "Our core laundry service delivers exceptional results in record time. Customers drop off clothes, and we wash, dry, and neatly fold them within just 3 hours. We use high-end professional machines for washing and drying, then steam iron each garment to perfection.",
      features: [
        "Express 3-hour turnaround time",
        "Professional imported washing machines",
        "Each customer's laundry washed separately",
        "High-quality detergents for optimal cleanliness",
        "Neatly folded and packaged"
      ],
      image: "/images/fold.png",
      alt: "Wash and fold laundry service with neatly folded clothes",
      icon: Package
    },
    {
      id: 2,
      title: "Steam Ironing",
      subtitle: "Professional Garment Pressing",
      description: "A dedicated ironing service for customers who only need garment pressing. Using premium steam equipment and Italian-grade ironers, we ensure every garment receives a crisp, professional finish. Available as a standalone service or as an add-on to our wash and fold package.",
      features: [
        "Premium steam pressing technology",
        "Italian-grade professional ironers",
        "Perfect creases and wrinkle-free finish",
        "Suitable for all fabric types",
        "Quick turnaround available"
      ],
      image: "/images/iron.png",
      alt: "Professional steam ironing service for crisp garments",
      icon: Filter
    },
    {
      id: 3,
      title: "Dry Cleaning",
      subtitle: "Delicate Garments Specialist",
      description: "Specialized cleaning for delicate fabrics that require extra care. Our dry cleaning service handles suits, dresses, designer wear, ethnic wear, woollens, and other premium garments with the utmost attention to detail and fabric care.",
      features: [
        "Specialized treatment for delicate fabrics",
        "Expert handling of designer and ethnic wear",
        "Professional wool and silk cleaning",
        "Stain removal expertise",
        "Garment inspection and quality control"
      ],
      image: "/images/hero1.jpg",
      alt: "Dry cleaning service for delicate and designer garments",
      icon: Star
    }
  ];

  const additionalServices = [
    {
      title: "Shoe Cleaning",
      description: "Professional cleaning and care for all types of footwear",
      icon: Tag
    },
    {
      title: "Curtain Washing",
      description: "Specialized cleaning for curtains and large fabric items",
      icon: Home
    },
    {
      title: "Blanket & Comforter Cleaning",
      description: "Deep cleaning for heavy bedding items",
      icon: Package
    }
  ];

  const qualityPromises = [
    {
      title: "Separate Washing",
      description: "Each customer's laundry is washed separately to ensure maximum hygiene and prevent cross-contamination",
      icon: Shield
    },
    {
      title: "Premium Equipment",
      description: "We use imported American washing machines and Italian-grade ironers for superior cleaning and finishing",
      icon: Award
    },
    {
      title: "Express Service",
      description: "Our efficient processes ensure your laundry is cleaned, dried, and ready within 3 hours",
      icon: Clock
    }
  ];

  useEffect(() => {
    // Initial animations on mount
    const timer1 = setTimeout(() => setVisibleSections(prev => ({ ...prev, header: true })), 100);
    
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
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
    };

    handleHashScroll();

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      const elements = document.querySelectorAll('[data-section]');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const sectionName = element.getAttribute('data-section');
        
        // Element is visible when it's in the viewport
        if (elementTop < windowHeight - 100 && elementTop > -rect.height) {
          if (!visibleSections[sectionName]) {
            setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    // Initial check
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer1);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleSections]);

  const handleBookNowClick = () => {
    window.location.hash = '#booking';
  };

  const openModal = (promise) => {
    setSelectedPromise(promise);
  };

  const closeModal = () => {
    setSelectedPromise(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div 
        data-section="header"
        className={`bg-white pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 transition-all duration-700 ease-out ${
          visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1aa6b3]">
            OUR SERVICES
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-6"></div>
          <p className="text-[#1aa6b3] text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto font-medium">
            Premium laundry solutions designed to deliver exceptional results with care and precision.
          </p>
        </div>
      </div>

      {/* Detailed Services Section */}
      <div className="bg-white py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-section="servicesTitle"
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-[#1aa6b3] uppercase transition-all duration-700 ease-out ${
              visibleSections.servicesTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-6"></div>
          <p className="text-center text-[#1aa6b3] text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto">
            Professional laundry and dry cleaning services designed to meet all your garment care needs with speed, quality, and hygiene guaranteed
          </p>
          
          <div className="space-y-8 sm:space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isVisible = visibleSections[`detail${index}`];
              return (
                <div 
                  key={service.id}
                  data-section={`detail${index}`}
                  className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg">
                    <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1aa6b3] mb-1 sm:mb-2">
                          {service.title}
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mb-2"></div>
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#1aa6b3] font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm sm:text-base md:text-lg text-[#1aa6b3] mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-[#1aa6b3] mb-3 sm:mb-4">Key Features:</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3">
                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#1aa6b3] flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base md:text-lg text-[#1aa6b3]">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="bg-gradient-to-r from-teal-50/50 to-teal-100/50 py-8 sm:py-12 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            data-section="qualityTitle"
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-[#1aa6b3] transition-all duration-700 ease-out ${
              visibleSections.qualityTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Quality Promise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-8 sm:mb-10 md:mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {qualityPromises.map((promise, index) => {
              const Icon = promise.icon;
              const isVisible = visibleSections[`quality${index}`];
              return (
                <div 
                  key={index}
                  data-section={`quality${index}`}
                  onClick={() => openModal(promise)}
                  className={`group h-64 sm:h-72 md:h-80 perspective transition-all duration-700 ease-out cursor-pointer lg:cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative w-full h-full transition-all duration-700 lg:group-hover:[transform:rotateY(180deg)]"
                       style={{ transformStyle: 'preserve-3d' }}>
                    
                    {/* Front of card */}
                    <div className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300"
                         style={{ 
                           backfaceVisibility: 'hidden',
                           boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                         }}>
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"
                           style={{ boxShadow: '0 0 50px 10px rgba(26, 166, 179, 0.7)' }}></div>
                      <div className="text-center h-full flex flex-col justify-center relative z-10">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#1aa6b3]">
                          {promise.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Back of card - only visible on desktop hover */}
                    <div className="hidden lg:block absolute inset-0 bg-[#1aa6b3] rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 [transform:rotateY(180deg)]"
                         style={{ backfaceVisibility: 'hidden' }}>
                      <div className="text-center h-full flex flex-col justify-center">
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mx-auto mb-3 sm:mb-4 opacity-80" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
                          {promise.title}
                        </h3>
                        <p className="text-white text-sm sm:text-base md:text-lg">
                          {promise.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal for mobile */}
      {selectedPromise && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-[#1aa6b3] rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-3 sm:mb-4">
              <button 
                onClick={closeModal}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-all"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <div className="text-center">
              {React.createElement(selectedPromise.icon, { className: "w-14 h-14 sm:w-16 sm:h-16 text-white mx-auto mb-4 sm:mb-6 opacity-80" })}
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
                {selectedPromise.title}
              </h3>
              <p className="text-white text-base sm:text-lg leading-relaxed">
                {selectedPromise.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Additional Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <h2 
          data-section="additionalTitle"
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 text-[#1aa6b3] transition-all duration-700 ease-out ${
            visibleSections.additionalTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Additional Services
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-8 sm:mb-10 md:mb-12"></div>
        <p 
          data-section="additionalDesc"
          className={`text-center text-[#1aa6b3] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto transition-all duration-700 ease-out ${
            visibleSections.additionalDesc ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Expanding our offerings to meet all your cleaning needs. Coming soon to better serve you:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleSections[`additional${index}`];
            return (
              <div 
                key={index}
                data-section={`additional${index}`}
                className={`group relative bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl transition-all duration-700 ease-out hover:scale-[1.03] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: '0 0 40px 8px rgba(26, 166, 179, 0.6)' }}></div>
                <div className="text-center relative z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[#1aa6b3]" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-[#1aa6b3]">
                    {service.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 mx-auto mb-3"></div>
                  <p className="text-[#1aa6b3] text-sm sm:text-base md:text-lg opacity-80">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why LFA Section */}
      <WhyLFA />

      {/* CTA Section */}
      <div 
        data-section="cta"
        className={`py-12 md:py-16 px-4 bg-white transition-all duration-700 ease-out ${
          visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#1aa6b3]">
            Ready to Experience Premium Laundry Care?
          </h2>
          <div className="w-24 h-1 bg-[#1aa6b3] mx-auto mb-4"></div>
          <p className="text-[#1aa6b3] text-base sm:text-lg md:text-xl mb-8 opacity-95">
            Drop off your laundry today and experience the LFA difference with our 3-hour express service
          </p>
          <button 
            onClick={handleBookNowClick}
            className="bg-[#1aa6b3] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#158993] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="h-5 w-5" />
              <span>Book Now</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}