'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ChatComponent from './ChatComponent';

const Hero = () => {
  // For animations and interactions
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // AI features to highlight
  const aiFeatures = [
    {
      title: "Personalized Guidance",
      description: "Get tailored VA loan advice based on your specific military service and financial situation.",
      icon: "fa-user-shield"
    },
    {
      title: "Real-Time Calculations",
      description: "Instantly calculate loan amounts, monthly payments, and funding fees with precision.",
      icon: "fa-calculator"
    },
    {
      title: "24/7 Availability",
      description: "Get expert assistance whenever you need it, day or night, with no waiting.",
      icon: "fa-clock"
    },
    {
      title: "Latest VA Guidelines",
      description: "Access the most current VA loan policies and requirements, updated through April 2025.",
      icon: "fa-book"
    }
  ];
  
  useEffect(() => {
    setIsLoaded(true);
    
    // Cycle through AI features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % aiFeatures.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle scroll to expand chat
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      
      // If scrolled past hero section, collapse the expanded chat
      if (scrollPosition > heroHeight) {
        setIsExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative bg-white py-16 md:py-24 overflow-hidden">
      {/* Dynamic background with neural network pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-0 bg-[url('/images/backgrounds/neural-pattern.svg')] bg-repeat opacity-10" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/10 to-primary-light/10 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/10 to-secondary-light/10 blur-3xl animate-float"></div>
        
        {/* Geometric accents */}
        <div className="absolute top-20 right-[10%] w-16 h-16 border-2 border-primary/20 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-20 left-[10%] w-12 h-12 border-2 border-secondary/20 rounded-full animate-float-reverse"></div>
      </div>
      
      {/* Neural network lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-5" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0070f3" />
              <stop offset="100%" stopColor="#0070f3" />
            </linearGradient>
          </defs>
          <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
            {/* Randomly generated neural network lines */}
            <path d="M0,500 C300,400 700,600 1000,500" className="animate-pulse" style={{ animationDelay: '0s' }} />
            <path d="M0,300 C200,500 800,500 1000,300" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <path d="M0,700 C400,600 600,800 1000,700" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <path d="M200,0 C300,300 700,700 800,1000" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <path d="M500,0 C400,300 600,700 500,1000" className="animate-pulse" style={{ animationDelay: '2s' }} />
            <path d="M800,0 C700,300 300,700 200,1000" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
          </g>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary text-sm font-medium mb-6 border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
              Specialized VA Loan Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              VA Loans <span className="relative inline-block">
                <span className="relative z-10">Made Simple</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full -z-10"></span>
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Get the home loan benefits you've earned with expert AI guidance every step of the way.
            </p>
            
            {/* AI Feature Highlight */}
            <div className="bg-white rounded-xl border border-primary/10 p-5 mb-8 shadow-lg relative overflow-hidden group min-h-[150px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100px]"></div>
              
              {aiFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 absolute inset-0 p-5 ${
                    activeFeature === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ height: '150px' }}
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mr-4 shadow-md">
                      <i className={`fas ${feature.icon} text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Feature indicator dots */}
              <div className="absolute bottom-3 left-0 w-full flex justify-center space-x-1">
                {aiFeatures.map((_, index) => (
                  <div 
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeFeature === index ? 'bg-primary w-4' : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                href="#eligibility" 
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-600 rounded-full opacity-70 blur-sm group-hover:opacity-100 transition duration-200"></div>
                <button className="relative px-6 py-3 bg-primary text-white rounded-full font-medium shadow-lg group-hover:shadow-primary/50 transition duration-200">
                  Check Eligibility
                </button>
              </Link>
              
              <Link 
                href="#calculator" 
                className="px-6 py-3 border-2 border-primary/20 text-gray-700 rounded-full font-medium hover:border-primary hover:text-primary transition duration-200"
              >
                Calculate Payment
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-primary/20 transform transition hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="block text-3xl font-bold text-primary mb-1 relative z-10">0%</span>
                <span className="text-sm text-gray-500 relative z-10">Down Payment</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-secondary/20 transform transition hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="block text-3xl font-bold text-secondary mb-1 relative z-10">97%</span>
                <span className="text-sm text-gray-500 relative z-10">Satisfaction</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-primary/20 transform transition hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="block text-3xl font-bold text-indigo-500 mb-1 relative z-10">24/7</span>
                <span className="text-sm text-gray-500 relative z-10">AI Support</span>
              </div>
            </div>
            
            {/* Military Badges */}
            <div className="flex justify-start space-x-6 overflow-x-auto pb-4 -mx-2 px-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 bg-white shadow-md border border-primary/20 transform transition hover:shadow-lg hover:-translate-y-1 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image 
                    src={`/images/military/logo-${num}.png`} 
                    alt={`Military Branch Logo ${num}`} 
                    fill
                    className="object-contain p-1 relative z-10"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - AI Chat */}
          <div 
            className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${isExpanded ? 'lg:scale-110 lg:-translate-y-6' : ''}`}
          >
            {/* Floating elements around the chat */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg border-2 border-primary/20 rotate-12 animate-float hidden lg:block"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full border-2 border-secondary/20 animate-float-reverse hidden lg:block"></div>
            
            {/* Expand/collapse button */}
            <button 
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-full w-8 h-8 shadow-md flex items-center justify-center z-20 border border-primary/20 lg:block hidden"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ display: 'flex' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isExpanded ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"} />
              </svg>
            </button>
            
            {/* Chat container with glow effect */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary-light rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000 animate-glow"></div>
              
              {/* Chat component */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-primary/20 transition-all duration-500">
                <div className="flex flex-col h-[700px] relative">
                  <div className="absolute -top-6 right-6 bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1 rounded-t-lg text-xs font-medium z-20 flex items-center shadow-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    VA Loan Expert
                  </div>
                  <ChatComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
