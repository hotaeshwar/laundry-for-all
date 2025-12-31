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
      
      const header = document.querySelector('[data-header]');
      if (header && !visibleItems.header) {
        const headerTop = header.offsetTop;
        if (scrollPosition > headerTop + 100) {
          setVisibleItems(prev => ({ ...prev, header: true }));
        }
      }

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

    const handleScroll = () => {
      requestAnimationFrame(animateElements);
    };

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
    <div className="bg-gradient-to-br from-slate-50 via-teal-50/20 to-slate-50 min-h-screen" data-faq-section>
      <div 
        data-header
        className={`relative bg-white/80 backdrop-blur-sm py-10 sm:py-14 px-4 mb-8 transition-all duration-700 ease-out transform ${
          visibleItems.header ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#1aa6b3] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-2xl mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 text-[#1aa6b3] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-[#1aa6b3] text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-semibold opacity-90">
            Everything you need to know about our laundry and dry cleaning services
          </p>
          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#1aa6b3] to-transparent mx-auto mt-4"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-5 sm:p-6 shadow-lg border border-[#1aa6b3]/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#1aa6b3] rounded-xl blur-md opacity-50"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-xl flex items-center justify-center shadow-md">
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#1aa6b3]">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {category.questions.map((item, questionIndex) => {
                      const isOpen = openIndex === `${categoryIndex}-${questionIndex}`;
                      const questionKey = `q-${categoryIndex}-${questionIndex}`;
                      const isQuestionVisible = visibleItems[questionKey];
                      
                      return (
                        <div 
                          key={questionIndex}
                          data-question={`${categoryIndex}-${questionIndex}`}
                          className={`relative group transition-all duration-500 transform ${
                            isQuestionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                          }`}
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1aa6b3] to-teal-400 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                          <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
                            <button
                              onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                              className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 hover:bg-teal-50/50 transition-colors duration-200"
                            >
                              <span className="text-sm sm:text-base font-bold text-[#1aa6b3] pr-2 flex-1">
                                {item.question}
                              </span>
                              <div className={`flex-shrink-0 w-7 h-7 bg-gradient-to-br from-[#1aa6b3] to-teal-400 rounded-lg flex items-center justify-center transition-all duration-300 ${
                                isOpen ? 'rotate-180' : ''
                              }`}>
                                <ChevronDown className="w-4 h-4 text-white" />
                              </div>
                            </button>
                            
                            <div 
                              className={`overflow-hidden transition-all duration-400 ease-in-out ${
                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className="px-4 pb-4">
                                <div className="bg-gradient-to-br from-teal-50/60 to-cyan-50/40 rounded-lg p-3.5 border-l-4 border-[#1aa6b3]">
                                  <p className="text-sm text-[#1aa6b3] opacity-90 leading-relaxed">
                                    {item.answer}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-10">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#1aa6b3]/20 max-w-3xl mx-auto">
            <p className="text-[#1aa6b3] text-lg font-bold mb-2">Still have questions?</p>
            <p className="text-[#1aa6b3]/80 text-base">Feel free to reach out to us anytime. We're here to help!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
