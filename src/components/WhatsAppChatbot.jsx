import React, { useState } from 'react';
import { MessageCircle, X, Send, Phone } from 'lucide-react';

export default function WhatsAppChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const phoneNumber = '917054828682';

  const quickMessages = [
    { text: 'Schedule a Pickup', emoji: '📦' },
    { text: 'View Pricing', emoji: '💰' },
    { text: 'Track My Order', emoji: '📍' },
    { text: 'Service Areas', emoji: '🗺️' }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const handleQuickMessage = (text) => {
    const encodedMessage = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const handleCallNow = () => {
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  return (
    <>
      {/* WhatsApp Chat Button - Fixed Position */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
            aria-label="Open WhatsApp Chat"
          >
            <svg
              viewBox="0 0 32 32"
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 0C7.163 0 0 7.163 0 16c0 2.828.744 5.48 2.038 7.787L0 32l8.464-2.012A15.917 15.917 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.5c-2.444 0-4.75-.656-6.725-1.8l-.481-.288-5.019 1.194 1.219-4.869-.313-.5A13.399 13.399 0 0 1 2.5 16C2.5 8.544 8.544 2.5 16 2.5S29.5 8.544 29.5 16 23.456 29.5 16 29.5z"/>
              <path d="M22.906 19.406c-.369-.188-2.181-1.075-2.519-1.2-.337-.119-.581-.175-.825.188-.244.369-.95 1.2-1.163 1.444-.219.244-.438.275-.806.094-.369-.188-1.556-.575-2.963-1.831-1.094-.975-1.831-2.181-2.044-2.55-.219-.369-.025-.569.162-.75.169-.169.369-.438.55-.656.188-.219.25-.369.375-.619.125-.244.063-.463-.031-.65-.094-.188-.825-1.987-1.131-2.719-.3-.712-.606-.613-.825-.625-.219-.006-.469-.006-.719-.006s-.656.094-.994.463c-.344.369-1.3 1.269-1.3 3.094s1.331 3.594 1.519 3.838c.188.244 2.638 4.025 6.387 5.644.894.387 1.594.619 2.138.794.9.287 1.719.244 2.363.15.719-.106 2.181-.894 2.488-1.756.306-.863.306-1.6.219-1.756-.094-.15-.344-.244-.719-.425z"/>
            </svg>
          </button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[95vw] max-w-[380px] sm:w-96 shadow-2xl rounded-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <svg
                  viewBox="0 0 32 32"
                  className="w-10 h-10 fill-current bg-white rounded-full p-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path className="fill-green-500" d="M16 0C7.163 0 0 7.163 0 16c0 2.828.744 5.48 2.038 7.787L0 32l8.464-2.012A15.917 15.917 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.5c-2.444 0-4.75-.656-6.725-1.8l-.481-.288-5.019 1.194 1.219-4.869-.313-.5A13.399 13.399 0 0 1 2.5 16C2.5 8.544 8.544 2.5 16 2.5S29.5 8.544 29.5 16 23.456 29.5 16 29.5z"/>
                  <path className="fill-green-500" d="M22.906 19.406c-.369-.188-2.181-1.075-2.519-1.2-.337-.119-.581-.175-.825.188-.244.369-.95 1.2-1.163 1.444-.219.244-.438.275-.806.094-.369-.188-1.556-.575-2.963-1.831-1.094-.975-1.831-2.181-2.044-2.55-.219-.369-.025-.569.162-.75.169-.169.369-.438.55-.656.188-.219.25-.369.375-.619.125-.244.063-.463-.031-.65-.094-.188-.825-1.987-1.131-2.719-.3-.712-.606-.613-.825-.625-.219-.006-.469-.006-.719-.006s-.656.094-.994.463c-.344.369-1.3 1.269-1.3 3.094s1.331 3.594 1.519 3.838c.188.244 2.638 4.025 6.387 5.644.894.387 1.594.619 2.138.794.9.287 1.719.244 2.363.15.719-.106 2.181-.894 2.488-1.756.306-.863.306-1.6.219-1.756-.094-.15-.344-.244-.719-.425z"/>
                </svg>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
              </div>
              <div>
                <h3 className="font-semibold text-base">LFA Laundry</h3>
                <p className="text-xs text-green-100">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-700 rounded-full p-1.5 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="bg-gray-50 p-4 h-[420px] sm:h-96 overflow-y-auto">
            {/* Welcome Message */}
            <div className="mb-4">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm max-w-[85%] animate-in slide-in-from-left duration-300">
                <p className="text-sm text-gray-800 mb-1">
                  👋 Hello! Welcome to <strong>LFA Laundry</strong>
                </p>
                <p className="text-sm text-gray-600">
                  How can we help you today? Choose a quick option below or type your message.
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-1 ml-1">Just now</p>
            </div>

            {/* Quick Reply Buttons */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 font-medium mb-2 text-center">Quick Options</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(msg.text)}
                  className="w-full bg-white hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-lg p-3 text-left transition-all duration-200 shadow-sm hover:shadow group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-xl mr-2">{msg.emoji}</span>
                  <span className="text-sm text-gray-700 group-hover:text-green-700 font-medium">
                    {msg.text}
                  </span>
                </button>
              ))}
            </div>

            {/* Call Now Button */}
            <button
              onClick={handleCallNow}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg p-3 flex items-center justify-center space-x-2 transition-colors shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call Now: +91-7054828682</span>
            </button>

            {/* Service Info */}
            <div className="mt-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs text-gray-600 mb-2">
                <strong className="text-green-700">Service Areas:</strong>
              </p>
              <p className="text-xs text-gray-600">
                Jaipur • Udaipur • Jodhpur & All of Rajasthan
              </p>
              <div className="mt-2 pt-2 border-t border-green-200">
                <p className="text-xs text-gray-600">
                  ⏰ <strong>Operating Hours:</strong> 7 AM - 10 PM (Daily)
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full p-2.5 transition-colors shadow-md disabled:shadow-none"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-gray-400 text-center mt-2">
              We typically reply within minutes
            </p>
          </div>
        </div>
      )}
    </>
  );
}