import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target;
      const formDataObj = new FormData(form);
      
      await fetch('https://formsubmit.co/laundryforalllfa@gmail.com', {
        method: 'POST',
        body: formDataObj
      });
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Form Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1aa6b3] mb-4">CONTACT US</h2>
          <div className="w-24 h-1 bg-[#1aa6b3] mx-auto mb-6"></div>
          <p className="text-lg text-[#1aa6b3] max-w-2xl mx-auto">
            Have questions? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1aa6b3] mb-8 text-center">Contact Information</h3>
            
            {/* Call Us */}
            <div className="flex flex-col items-center text-center mb-10 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#1aa6b3] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1aa6b3] mb-2">Call Us</h4>
              <a 
                href="tel:+917014638562" 
                className="text-2xl font-bold text-[#1aa6b3] hover:text-[#158993] transition-colors"
              >
                +91-7014638562
              </a>
              <p className="text-[#1aa6b3] mt-2">Available 8AM - 8PM, 7 days a week</p>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center text-center mb-10 p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#1aa6b3] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1aa6b3] mb-2">Visit Us</h4>
              <div className="text-[#1aa6b3]">
                <p className="font-medium mb-1">Under Hotel Masterinn</p>
                <p>Jamni Kund Road, Pushkar</p>
                <p>Rajasthan - 305022</p>
              </div>
              <a 
                href="https://maps.google.com/?q=Under+Hotel+Masterinn,+Jamni+Kund+Road,+Pushkar,+Rajasthan+305022"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-[#1aa6b3] hover:text-[#158993] font-medium"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                View on Map
              </a>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-[#1aa6b3] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#1aa6b3] mb-2">Email Us</h4>
              <a 
                href="mailto:laundryforalllfa@gmail.com" 
                className="text-lg font-medium text-[#1aa6b3] hover:text-[#158993] transition-colors break-all"
              >
                laundryforalllfa@gmail.com
              </a>
              <p className="text-[#1aa6b3] mt-2">We respond within 24 hours</p>
            </div>

            {/* Logo */}
            <div className="mt-10 text-center">
              <img 
                src="/images/LFA-03.png" 
                alt="Laundry For All Logo" 
                className="h-24 w-auto object-contain mx-auto"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1aa6b3] mb-8 text-center">Send us a Message</h3>
            
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1aa6b3] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all outline-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3] focus:ring-opacity-20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1aa6b3] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all outline-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3] focus:ring-opacity-20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1aa6b3] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all outline-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3] focus:ring-opacity-20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50"
                  placeholder="+91 12345 67890"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1aa6b3] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-all outline-none resize-none focus:border-[#1aa6b3] focus:ring-2 focus:ring-[#1aa6b3] focus:ring-opacity-20 text-[#1aa6b3] placeholder:text-[#1aa6b3]/50"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-4 text-white font-bold rounded-lg transition-all disabled:cursor-not-allowed hover:shadow-lg transform hover:-translate-y-0.5 transition-transform duration-200 text-lg"
                style={{ 
                  backgroundColor: isSubmitting ? '#81e6d9' : '#1aa6b3'
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>

              {/* Privacy Note */}
              <div className="text-center text-sm text-[#1aa6b3] pt-4 border-t border-gray-100">
                <p>We respect your privacy and will not share your information with third parties.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-[#1aa6b3]">Find Us on Map</h3>
          </div>
          <div className="h-96 bg-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.648544666204!2d74.5552583!3d26.4875833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6d8fcfe7c81%3A0xcb5f5e5a5a5a5a5a!2sHotel%20Masterinn%2C%20Jamni%20Kund%20Road%2C%20Pushkar%2C%20Rajasthan%20305022!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Laundry For All Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}