import { useEffect, useRef } from 'react';

export default function AboutUs() {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScrollAnimations = () => {
      const elements = [
        { ref: imageRef, className: 'animate-on-scroll-left' },
        { ref: contentRef, className: 'animate-on-scroll-right' }
      ];

      elements.forEach(({ ref, className }) => {
        if (ref.current && !ref.current.classList.contains('animated')) {
          const rect = ref.current.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight * 0.85;
          
          if (isVisible) {
            ref.current.classList.add('animated');
          }
        }
      });
    };

    // Initial check
    handleScrollAnimations();

    // Throttle scroll events for better performance
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

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section - Left Side */}
          <div ref={imageRef} className="w-full lg:w-1/2">
            <img 
              src="/images/about1.png" 
              alt="LaundryForAll professional laundry services in Rajasthan"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
          </div>

          {/* Content Section - Right Side */}
          <div ref={contentRef} className="w-full lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#1393c4' }}>
              About <span className="font-extrabold">LaundryForAll</span>
            </h1>
            
            <div className="space-y-4 text-base sm:text-lg leading-relaxed" style={{ color: '#1393c4' }}>
              <p className="opacity-90">
                <span className="font-semibold" style={{ color: '#1393c4' }}>LaundryForAll</span> was founded to revolutionize laundry for tourists and locals in Rajasthan. Our mission is to provide <span className="font-semibold">hotel-quality cleaning</span> with personal service and convenience.
              </p>
              
              <p className="opacity-90">
                We start in <span className="font-semibold">Jaipur</span>, then expand to all of Rajasthan and eventually nationwide, following the success of India's largest laundry chains. Our leadership team combines <span className="font-semibold">hospitality and logistics expertise</span> to ensure reliability and trust.
              </p>
              
              <p className="opacity-90">
                We value <span className="font-semibold" style={{ color: '#1393c4' }}>sustainability and customer satisfaction</span>: all cleaning agents are gentle and eco-friendly, and we never use harsh chemicals that could affect sensitive skin.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold pt-4 pb-2" style={{ color: '#1393c4' }}>
                Why <span>LaundryForAll?</span>
              </h2>

              <ul className="space-y-3 mt-4">
                <li className="flex items-start opacity-90">
                  <span className="inline-block mr-2 mt-1 text-xl" style={{ color: '#1393c4' }}>•</span>
                  <span>Founded by experienced laundry entrepreneurs to serve Rajasthan's travelers and residents.</span>
                </li>
                <li className="flex items-start opacity-90">
                  <span className="inline-block mr-2 mt-1 text-xl" style={{ color: '#1393c4' }}>•</span>
                  <span>Focus on highest standards of <span className="font-semibold">hygiene and eco-friendly practices</span>.</span>
                </li>
                <li className="flex items-start opacity-90">
                  <span className="inline-block mr-2 mt-1 text-xl" style={{ color: '#1393c4' }}>•</span>
                  <span>Expanding rapidly with plans to cover every major city after proving our model in Jaipur.</span>
                </li>
                <li className="flex items-start opacity-90">
                  <span className="inline-block mr-2 mt-1 text-xl" style={{ color: '#1393c4' }}>•</span>
                  <span><span className="font-semibold">Transparent business model</span>: we follow proven industry best-practices with no hidden fees and open pricing.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Styles - Put this in your global CSS or component CSS */}
      <style jsx>{`
        /* Initial state */
        .w-full.lg\\:w-1\\/2:first-child,
        .w-full.lg\\:w-1\\/2:last-child {
          opacity: 0;
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        /* Image section - initially positioned left */
        .w-full.lg\\:w-1\\/2:first-child {
          transform: translateX(-30px);
        }

        /* Content section - initially positioned right */
        .w-full.lg\\:w-1\\/2:last-child {
          transform: translateX(30px);
        }

        /* Animated state */
        .w-full.lg\\:w-1\\/2:first-child.animated {
          opacity: 1;
          transform: translateX(0);
        }

        .w-full.lg\\:w-1\\/2:last-child.animated {
          opacity: 1;
          transform: translateX(0);
        }

        /* Delay for content section */
        .w-full.lg\\:w-1\\/2:last-child.animated {
          transition-delay: 0.2s;
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .w-full.lg\\:w-1\\/2:first-child,
          .w-full.lg\\:w-1\\/2:last-child {
            opacity: 1;
            transform: none;
            transition: opacity 0.3s ease;
          }
        }
      `}</style>
    </section>
  );
}