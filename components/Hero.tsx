'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChatComponent from './ChatComponent';

const Hero = () => {
  // For subtle animations
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white" />
        <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-20" />
      </div>
      
      {/* Accent elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-[100px] z-0" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-secondary/5 to-transparent rounded-tr-[100px] z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
              Specialized VA Loan Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              VA Loans <span className="text-primary">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Get the home loan benefits you've earned with expert guidance every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="#eligibility" className="btn btn-primary shadow-lg shadow-primary/20 transform transition hover:-translate-y-1">
                Check Eligibility
              </Link>
              <Link href="#calculator" className="btn btn-outline border-2 transform transition hover:-translate-y-1">
                Calculate Payment
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition hover:shadow-xl hover:-translate-y-1">
                <span className="block text-3xl font-bold text-secondary mb-1">0%</span>
                <span className="text-sm text-gray-500">Down Payment</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition hover:shadow-xl hover:-translate-y-1">
                <span className="block text-3xl font-bold text-secondary mb-1">97%</span>
                <span className="text-sm text-gray-500">Satisfaction</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition hover:shadow-xl hover:-translate-y-1">
                <span className="block text-3xl font-bold text-secondary mb-1">24/7</span>
                <span className="text-sm text-gray-500">AI Support</span>
              </div>
            </div>
            
            {/* Military Badges */}
            <div className="flex justify-start space-x-6 overflow-x-auto pb-4 -mx-2 px-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-white shadow-md border border-gray-100 transform transition hover:shadow-lg hover:-translate-y-1">
                  <Image 
                    src={`/images/military/logo-${num}.png`} 
                    alt={`Military Branch Logo ${num}`} 
                    fill
                    className="object-contain p-1"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - AI Chat */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)]">
              <div className="bg-primary text-white p-5 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">VA Loan Expert</h3>
                <div className="ml-auto flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                  <span className="text-xs text-white/80">Online</span>
                </div>
              </div>
              
              <ChatComponent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
