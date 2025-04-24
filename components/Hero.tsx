'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChatComponent from './ChatComponent';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-background to-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              VA Loans <span className="text-primary">Made Simple</span>
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Get the home loan benefits you've earned with expert guidance every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="#eligibility" className="btn btn-primary">
                Check Eligibility
              </Link>
              <Link href="#calculator" className="btn btn-outline">
                Calculate Payment
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-card">
                <span className="block text-3xl font-bold text-primary">0%</span>
                <span className="text-sm text-gray-600">Down Payment Options</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-card">
                <span className="block text-3xl font-bold text-primary">97%</span>
                <span className="text-sm text-gray-600">Customer Satisfaction</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-card">
                <span className="block text-3xl font-bold text-primary">24/7</span>
                <span className="text-sm text-gray-600">AI Support</span>
              </div>
            </div>
            
            {/* Military Badges */}
            <div className="flex justify-center mt-8 space-x-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image 
                  src="/images/military/logo-1.png" 
                  alt="Army Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image 
                  src="/images/military/logo-2.png" 
                  alt="Navy Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image 
                  src="/images/military/logo-3.png" 
                  alt="Air Force Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image 
                  src="/images/military/logo-4.png" 
                  alt="Marines Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <Image 
                  src="/images/military/logo-5.png" 
                  alt="Coast Guard Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - AI Chat */}
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="bg-primary text-white p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">VA Loan Expert</h3>
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
