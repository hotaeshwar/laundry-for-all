import React, { useState, useEffect } from 'react';
import { ChevronDown, HelpCircle, Clock, Package, Shield, DollarSign, MapPin } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState({});

  const faqCategories = [
    {
      category: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What services does LFA Laundry provide?",
          answer: "We offer three main services: Wash & Dry & Fold (3-hour express service), Professional Steam Ironing, and Dry Cleaning for delicate garments. We also provide additional services including shoe cleaning, curtain washing, and blanket & comforter cleaning."
        },
        {
          question: "What are your operating hours?",
          answer: "We are open Monday to Saturday from 8:00 AM to 8:00 PM, and Sunday from 9:00 AM to 6:00 PM. We accept drop-offs and pickups during these hours."
        },
        {
          question: "Do you offer pickup and delivery services?",
          answer: "Currently, we operate as a drop-off and pickup service at our location. However, we're working on introducing home pickup and delivery services soon. Stay tuned for updates!"
        }
      ]
    },
    {
      category: "Service & Timing",
      icon: Clock,
      questions: [
        {
          question: "How long does the wash and fold service take?",
          answer: "Our express wash and fold service is completed within 3 hours. Simply drop off your laundry, and it will be washed, dried, and neatly folded, ready for pickup in just 3 hours."
        },
        {
          question: "What is the turnaround time for dry cleaning?",
          answer: "Standard dry cleaning typically takes 24-48 hours depending on the garment type and any special treatments required. For urgent requests, we offer same-day dry cleaning for an additional express fee."
        },
        {
          question: "Can I get same-day service?",
          answer: "Yes! Our wash and fold service offers 3-hour turnaround, making same-day service possible. For dry cleaning, same-day service is available for an additional express charge if you drop off before 10 AM."
        },
        {
          question: "Do you provide ironing as a separate service?",
          answer: "Absolutely! We offer professional steam ironing as a standalone service. You can drop off clothes that only need pressing, and we'll use our premium Italian-grade ironers to deliver perfectly pressed garments."
        }
      ]
    },
    {
      category: "Quality & Care",
      icon: Shield,
      questions: [
        {
          question: "Do you wash each customer's laundry separately?",
          answer: "Yes, absolutely! We wash each customer's laundry separately to ensure maximum hygiene and prevent any cross-contamination. This is one of our core quality promises."
        },
        {
          question: "What kind of detergents do you use?",
          answer: "We use high-quality, premium detergents that are effective yet gentle on fabrics. Our detergents are suitable for all fabric types and provide optimal cleanliness while maintaining fabric integrity."
        },
        {
          question: "How do you handle delicate fabrics?",
          answer: "Delicate fabrics receive special care through our dry cleaning service. We have expertise in handling designer wear, ethnic wear, silk, wool, and other delicate materials. Each garment is inspected and treated according to its specific care requirements."
        },
        {
          question: "What equipment do you use?",
          answer: "We use imported American washing machines for superior cleaning, professional dryers, and Italian-grade ironers for perfect finishing. All our equipment is commercial-grade and maintained to the highest standards."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      icon: DollarSign,
      questions: [
        {
          question: "How do you charge for wash and fold service?",
          answer: "Our wash and fold service is charged by weight (per kg). We weigh your laundry when you drop it off and provide you with an exact quote. Minimum order requirements may apply."
        },
        {
          question: "How is dry cleaning priced?",
          answer: "Dry cleaning is priced per garment based on the type of item (shirt, suit, dress, etc.). We provide a detailed price list at our location, and our staff will inform you of the exact cost before processing."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, all major credit and debit cards, and digital payment methods including UPI, Google Pay, PhonePe, and Paytm for your convenience."
        },
        {
          question: "Do you offer any discounts or loyalty programs?",
          answer: "Yes! We offer special discounts for bulk orders and regular customers. Ask our staff about our loyalty program where you can earn points with each service and redeem them for discounts."
        }
      ]
    },
    {
      category: "Locations & Contact",
      icon: MapPin,
      questions: [
        {
          question: "Where are you located?",
          answer: "We are conveniently located at our main facility. Please visit our Contact page or call us for detailed directions, address information, and parking availability. We're easily accessible with ample space for customer parking."
        },
        {
          question: "How can I contact you?",
          answer: "You can reach us by phone during business hours, visit our location in person, or use the contact form on our website. We respond to all inquiries within 24 hours and are always here to help with your laundry needs."
        },
        {
          question: "Do you have multiple locations?",
          answer: "Currently, we operate from our main central location. We're focused on providing exceptional service from our flagship facility and are always evaluating opportunities to better serve our growing customer base in new areas."
        }
      ]
    },
    {
      category: "Special Services",
      icon: Package,
      questions: [
        {
          question: "Can you remove tough stains?",
          answer: "Yes, we have expertise in stain removal. While we can handle most common stains effectively, we always inform customers if a stain may be permanent or requires special treatment before proceeding."
        },
        {
          question: "Do you clean wedding dresses and formal wear?",
          answer: "Absolutely! We specialize in cleaning wedding dresses, formal gowns, suits, and ethnic wear. These items receive extra care and attention through our premium dry cleaning service with specialized handling for delicate fabrics and intricate designs."
        },
        {
          question: "Can you clean large items like curtains and comforters?",
          answer: "Yes, we offer specialized cleaning for curtains, blankets, and comforters. These items require special equipment and processes, which we're fully equipped to handle with our commercial-grade machines designed for large fabric items."
        },
        {
          question: "What if something gets damaged?",
          answer: "While we take utmost care with every garment using premium equipment and trained professionals, in the rare event of damage, we have a fair compensation policy. Please check your items upon pickup and report any issues immediately so we can address them promptly and ensure your complete satisfaction."
        }
      ]
    }
  ];

  useEffect(() => {
    const animateElements = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      // Animate header
      const header = document.querySelector('[data-header]');
      if (header && !visibleItems.header) {
        const headerTop = header.offsetTop;
        if (scrollPosition > headerTop + 100) {
          setVisibleItems(prev => ({ ...prev, header: true }));
        }
      }

      // Animate each category
      faqCategories.forEach((category, categoryIndex) => {
        const categoryKey = `category${categoryIndex}`;
        const categoryEl = document.querySelector(`[data-category="${categoryIndex}"]`);
        
        if (categoryEl && !visibleItems[categoryKey]) {
          const categoryTop = categoryEl.offsetTop;
          const triggerPoint = scrollPosition > categoryTop + 50;
          
          if (triggerPoint) {
            setTimeout(() => {
              setVisibleItems(prev => ({ ...prev, [categoryKey]: true }));
            }, categoryIndex * 80);
          }
        }

        // Animate questions within visible categories
        if (visibleItems[categoryKey]) {
          category.questions.forEach((_, questionIndex) => {
            const questionKey = `q-${categoryIndex}-${questionIndex}`;
            const questionEl = document.querySelector(`[data-question="${categoryIndex}-${questionIndex}"]`);
            
            if (questionEl && !visibleItems[questionKey]) {
              const questionTop = questionEl.offsetTop;
              if (scrollPosition > questionTop + 30) {
                setTimeout(() => {
                  setVisibleItems(prev => ({ ...prev, [questionKey]: true }));
                }, questionIndex * 60);
              }
            }
          });
        }
      });
    };

    // Run on mount and scroll
    const handleScroll = () => {
      requestAnimationFrame(animateElements);
    };

    // Initial check
    setTimeout(animateElements, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleItems]);

  const toggleQuestion = (categoryIndex, questionIndex) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-white to-teal-50/30" data-faq-section>
      {/* Header Section */}
      <div 
        data-header
        className={`bg-white py-6 sm:py-8 px-4 transition-all duration-700 ease-out transform ${
          visibleItems.header ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-full mb-3 sm:mb-4 transition-all duration-700">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[#1aa6b3] transition-all duration-700">
            Frequently Asked Questions
          </h1>
          <p className="text-[#1aa6b3] text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-medium opacity-90 transition-all duration-700">
            Everything you need to know about our laundry and dry cleaning services
          </p>
        </div>
      </div>

      {/* FAQ Categories Grid - Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {faqCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            const categoryKey = `category${categoryIndex}`;
            const isCategoryVisible = visibleItems[categoryKey];
            
            return (
              <div 
                key={categoryIndex}
                data-category={categoryIndex}
                className={`transition-all duration-700 ease-out transform ${
                  isCategoryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1aa6b3]">
                    {category.category}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-2 sm:space-y-3">
                  {category.questions.map((item, questionIndex) => {
                    const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                    const questionKey = `q-${categoryIndex}-${questionIndex}`;
                    const isQuestionVisible = visibleItems[questionKey];
                    
                    return (
                      <div 
                        key={questionIndex}
                        data-question={`${categoryIndex}-${questionIndex}`}
                        className={`bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden border border-gray-100 transform ${
                          isQuestionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                        }`}
                      >
                        <button
                          onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                          className="w-full px-3 sm:px-4 py-3 text-left flex items-center justify-between gap-2 sm:gap-3 hover:bg-teal-50/50 transition-colors duration-300"
                        >
                          <span className="text-sm sm:text-base font-semibold text-[#1aa6b3] pr-2 flex-1 text-left">
                            {item.question}
                          </span>
                          <ChevronDown 
                            className={`w-4 h-4 sm:w-5 sm:h-5 text-[#1aa6b3] flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? 'transform rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        <div 
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="px-3 sm:px-4 pb-3 pt-1">
                            <div className="border-t border-teal-100 pt-3">
                              <p className="text-xs sm:text-sm text-[#1aa6b3] opacity-80 leading-relaxed">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}