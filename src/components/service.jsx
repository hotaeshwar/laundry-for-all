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
  Filter
} from 'lucide-react';

export default function Services() {
  const [visibleSections, setVisibleSections] = useState({});

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
    // Show header immediately on load
    setVisibleSections(prev => ({ ...prev, header: true }));
    
    // Handle hash scroll
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

    // Track which sections are visible
    const sectionElements = {
      'header': document.querySelector('.bg-gradient-to-r.from-blue-50'),
      'coreTitle': document.querySelector('h2.text-3xl'), // First h2
      'service0': document.querySelectorAll('div.flex.flex-col')[0],
      'service1': document.querySelectorAll('div.flex.flex-col')[1],
      'service2': document.querySelectorAll('div.flex.flex-col')[2],
      'qualityTitle': document.querySelectorAll('h2.text-3xl')[1],
      'quality0': document.querySelectorAll('.group.h-80')[0],
      'quality1': document.querySelectorAll('.group.h-80')[1],
      'quality2': document.querySelectorAll('.group.h-80')[2],
      'additionalTitle': document.querySelectorAll('h2.text-3xl')[2],
      'additionalDesc': document.querySelector('p.text-center.text-xl'),
      'additional0': document.querySelectorAll('.group.relative.bg-white')[0],
      'additional1': document.querySelectorAll('.group.relative.bg-white')[1],
      'additional2': document.querySelectorAll('.group.relative.bg-white')[2],
      'cta': document.querySelector('.bg-gradient-to-r.from-\\[\\#1393c4\\]')
    };

    const checkVisibility = () => {
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      
      Object.entries(sectionElements).forEach(([sectionName, element]) => {
        if (!element) return;
        
        const elementTop = element.getBoundingClientRect().top + scrollTop;
        const elementBottom = element.getBoundingClientRect().bottom + scrollTop;
        
        // Check if element is in viewport
        const isVisible = (
          (elementTop <= scrollTop + windowHeight - 100) && 
          (elementBottom >= scrollTop + 100)
        );
        
        if (isVisible && !visibleSections[sectionName]) {
          setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
        }
      });
    };

    // Initial check
    setTimeout(checkVisibility, 100);

    // Listen for scroll with debouncing
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkVisibility, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check more frequently on load
    const loadTimeouts = [
      setTimeout(checkVisibility, 200),
      setTimeout(checkVisibility, 500),
      setTimeout(checkVisibility, 1000)
    ];

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      loadTimeouts.forEach(clearTimeout);
    };
  }, []);

  const handleBookNowClick = () => {
    window.location.hash = '#booking';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div 
        className={`bg-gradient-to-r from-blue-50 to-blue-100 py-16 sm:py-20 md:py-24 px-4 transition-all duration-700 ease-out ${
          visibleSections.header ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-[#1393c4]">
            Our Services
          </h1>
          <p className="text-[#1393c4] text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium">
            Professional laundry and dry cleaning services designed to meet all your garment care needs with speed, quality, and hygiene guaranteed
          </p>
        </div>
      </div>

      {/* Main Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-[#1393c4] transition-all duration-700 ease-out ${
            visibleSections.coreTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Our Core Services
        </h2>
        
        {services.map((service, index) => {
          const Icon = service.icon;
          const isVisible = visibleSections[`service${index}`];
          return (
            <div 
              key={service.id}
              id={`service-${service.id}`}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 mb-20 lg:mb-24 items-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <img 
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-auto max-h-96 object-contain rounded-2xl shadow-xl transition-all duration-1000 ease-out hover:scale-[1.02]"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      transition: 'opacity 0.7s ease-out, transform 0.3s ease-out'
                    }}
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  <div className={`transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#1393c4]">
                      {service.title}
                    </h3>
                    <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1393c4] mb-4 opacity-90">
                      {service.subtitle}
                    </h4>
                  </div>

                  <p className={`text-[#1393c4] text-lg leading-relaxed opacity-80 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-80 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}>
                    {service.description}
                  </p>

                  <div className="pt-6">
                    <h5 className={`text-xl sm:text-2xl font-semibold mb-4 text-[#1393c4] transition-all duration-700 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                      Key Features:
                    </h5>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li 
                          key={idx} 
                          className={`flex items-start transition-all duration-700 ease-out ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                          }`}
                          style={{
                            transitionDelay: `${idx * 100}ms`
                          }}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-[#1393c4]" />
                          </div>
                          <span className="text-[#1393c4] text-base sm:text-lg opacity-90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quality Assurance Section */}
      <div className="bg-gradient-to-r from-blue-50/50 to-cyan-50/50 py-16 sm:py-20 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-[#1393c4] transition-all duration-700 ease-out ${
              visibleSections.qualityTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Quality Promise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityPromises.map((promise, index) => {
              const Icon = promise.icon;
              const isVisible = visibleSections[`quality${index}`];
              return (
                <div 
                  key={index}
                  className={`group h-80 perspective transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="relative w-full h-full transition-all duration-700 group-hover:[transform:rotateY(180deg)]"
                       style={{ transformStyle: 'preserve-3d' }}>
                    
                    {/* Front of card */}
                    <div className="absolute inset-0 bg-white rounded-2xl p-8 transition-all duration-300"
                         style={{ 
                           backfaceVisibility: 'hidden',
                           boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                         }}>
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ boxShadow: '0 0 50px 10px rgba(19, 147, 196, 0.7)' }}></div>
                      <div className="text-center h-full flex flex-col justify-center relative z-10">
                        <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#1393c4] to-cyan-500 rounded-full flex items-center justify-center">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-[#1393c4]">
                          {promise.title}
                        </h3>
                        <p className="text-[#1393c4] text-sm opacity-60">
                          Hover to learn more
                        </p>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1393c4] to-cyan-500 rounded-2xl shadow-xl p-8 [transform:rotateY(180deg)]"
                         style={{ backfaceVisibility: 'hidden' }}>
                      <div className="text-center h-full flex flex-col justify-center">
                        <Icon className="w-12 h-12 text-white mx-auto mb-4 opacity-80" />
                        <h3 className="text-2xl font-bold mb-4 text-white">
                          {promise.title}
                        </h3>
                        <p className="text-white text-lg">
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

      {/* Additional Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-[#1393c4] transition-all duration-700 ease-out ${
            visibleSections.additionalTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Additional Services
        </h2>
        <p 
          className={`text-center text-[#1393c4] text-xl mb-12 md:mb-16 max-w-3xl mx-auto transition-all duration-700 ease-out ${
            visibleSections.additionalDesc ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Expanding our offerings to meet all your cleaning needs. Coming soon to better serve you:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleSections[`additional${index}`];
            return (
              <div 
                key={index} 
                className={`group relative bg-white p-8 rounded-2xl transition-all duration-700 ease-out hover:scale-[1.03] ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                     style={{ boxShadow: '0 0 40px 8px rgba(19, 147, 196, 0.6)' }}></div>
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-[#1393c4]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#1393c4]">
                    {service.title}
                  </h3>
                  <p className="text-[#1393c4] text-lg opacity-80">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className={`py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-r from-[#1393c4] to-cyan-500 transition-all duration-700 ease-out ${
          visibleSections.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
            Ready to Experience Premium Laundry Care?
          </h2>
          <p className="text-white text-xl sm:text-2xl mb-8 sm:mb-10 opacity-95">
            Drop off your laundry today and experience the LFA difference with our 3-hour express service
          </p>
          <button 
            onClick={handleBookNowClick}
            className="group bg-white text-[#1393c4] px-10 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <div className="flex items-center gap-3 justify-center">
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
              <span>Book Now</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}