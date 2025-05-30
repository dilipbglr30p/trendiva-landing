import React, { useEffect, useState } from 'react';
import QRCode from '../components/QRCode';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-green-300/20 dark:bg-green-700/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-blue-300/20 dark:bg-blue-700/10 rounded-full filter blur-3xl -z-10"></div>

      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-bold mb-6">
              Group Buying Made <span className="text-green-500">Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Join our WhatsApp group and save money by purchasing together. Perfect for apartments, offices, and communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#register" className="btn btn-primary text-lg">
                Get Started
              </a>
              <a href="#how-it-works" className="btn btn-secondary text-lg">
                Learn More
              </a>
            </div>
            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 flex items-center justify-center bg-gray-200 dark:bg-gray-700"
                  >
                    <span className="text-xs font-medium">👤</span>
                  </div>
                ))}
              </div>
              <p>Join 2,500+ happy customers</p>
            </div>
          </div>

          <div className={`flex justify-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-sm w-full">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Scan to Join</h3>
                <p className="text-gray-500 dark:text-gray-400">Our WhatsApp Group</p>
              </div>
              <div className="bg-white p-4 rounded-lg mx-auto w-fit mb-6">
                <QRCode value="https://wa.me/1234567890" size={180} />
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Or click the button below</p>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a 
            href="#features" 
            className="animate-bounce-slow p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;