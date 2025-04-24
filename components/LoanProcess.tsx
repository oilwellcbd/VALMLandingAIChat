'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const LoanProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Initialize stepRefs with empty array
  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, 0).concat(new Array(7).fill(null));
  }, []);

  // Steps data
  const steps = [
    {
      id: 1,
      title: 'Pre-Qualification',
      description: 'Get a quick assessment of your borrowing potential based on your financial information.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      stats: [
        { label: 'Time Required', value: '15-30 minutes' },
        { label: 'Documentation', value: 'Minimal' },
        { label: 'Credit Check', value: 'Soft Pull' }
      ]
    },
    {
      id: 2,
      title: 'Certificate of Eligibility',
      description: 'Obtain your COE to verify your eligibility for a VA loan based on your military service.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      stats: [
        { label: 'Time Required', value: '1-3 days' },
        { label: 'Documentation', value: 'DD-214 or Statement of Service' },
        { label: 'Validity', value: 'Indefinite for most veterans' }
      ]
    },
    {
      id: 3,
      title: 'Pre-Approval',
      description: 'Get formally pre-approved for a specific loan amount after a thorough review of your finances.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      stats: [
        { label: 'Time Required', value: '1-3 days' },
        { label: 'Documentation', value: 'Income, Assets, Debts' },
        { label: 'Credit Check', value: 'Hard Pull' }
      ]
    },
    {
      id: 4,
      title: 'Home Search',
      description: 'Find your dream home with the confidence of knowing exactly what you can afford.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      stats: [
        { label: 'Time Required', value: 'Varies' },
        { label: 'Property Types', value: 'Primary Residences Only' },
        { label: 'VA Requirements', value: 'Must Meet Minimum Property Requirements' }
      ]
    },
    {
      id: 5,
      title: 'Loan Application',
      description: 'Complete your formal loan application once you\'ve found a home and your offer is accepted.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      stats: [
        { label: 'Time Required', value: '1-2 hours' },
        { label: 'Documentation', value: 'Extensive' },
        { label: 'Processing Time', value: '1-2 days' }
      ]
    },
    {
      id: 6,
      title: 'Processing & Underwriting',
      description: 'Your loan application is processed and reviewed by underwriters to ensure it meets all requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      stats: [
        { label: 'Time Required', value: '2-3 weeks' },
        { label: 'Appraisal', value: 'Required' },
        { label: 'Conditions', value: 'May Require Additional Documentation' }
      ]
    },
    {
      id: 7,
      title: 'Closing',
      description: 'Sign your final loan documents, pay closing costs, and receive the keys to your new home.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
        </svg>
      ),
      stats: [
        { label: 'Time Required', value: '1-2 hours' },
        { label: 'Funding Fee', value: '1.4% - 3.6% of Loan Amount' },
        { label: 'Cash Needed', value: 'Closing Costs Only (No Down Payment Required)' }
      ]
    }
  ];

  // Scroll to active step with improved animation
  useEffect(() => {
    if (stepRefs.current[activeStep] && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const element = stepRefs.current[activeStep];
      
      if (element) {
        // Calculate the scroll position to center the element
        const elementRect = element.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        
        const scrollTop = element.offsetTop - container.offsetTop - 
                         (containerRect.height / 2) + (elementRect.height / 2);
        
        // Smooth scroll with custom easing
        const startPosition = container.scrollTop;
        const distance = scrollTop - startPosition;
        const duration = 600;
        let startTime: number | null = null;
        
        const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);
        
        const scroll = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easing = easeOutQuart(progress);
          
          container.scrollTop = startPosition + distance * easing;
          
          if (progress < 1) {
            window.requestAnimationFrame(scroll);
          }
        };
        
        window.requestAnimationFrame(scroll);
      }
    }
  }, [activeStep]);

  // Intersection observer to animate when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (processRef.current) {
      observer.observe(processRef.current);
    }

    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  // Function to set ref for each step
  const setStepRef = (el: HTMLDivElement | null, index: number) => {
    stepRefs.current[index] = el;
  };

  return (
    <section id="loan-process" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            The Path To Homeownership
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Loan Process</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Your journey to homeownership with a VA loan - streamlined, simplified, and supported every step of the way</p>
        </div>
        
        <div 
          ref={processRef}
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Process visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Steps visualization */}
            <div 
              ref={scrollContainerRef}
              className="relative max-h-[600px] overflow-y-auto pr-4 hide-scrollbar rounded-lg"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(203, 213, 225, 0.5) rgba(243, 244, 246, 0.5)'
              }}
            >
              {/* Steps */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[20px] top-0 bottom-0 w-1 bg-gray-200"></div>
                <div 
                  className="absolute left-[20px] top-0 w-1 bg-primary transition-all duration-700 ease-out" 
                  style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                ></div>
                
                {steps.map((step, index) => (
                  <div 
                    key={step.id}
                    ref={(el) => setStepRef(el, index)}
                    className={`flex py-6 ${index !== steps.length - 1 ? 'border-b border-gray-100' : ''}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="relative">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          index === activeStep 
                            ? 'bg-primary text-white shadow-lg' 
                            : index < activeStep 
                              ? 'bg-primary/20 text-primary' 
                              : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        <span className="text-base font-semibold">{step.id}</span>
                      </div>
                    </div>
                    
                    <div className="ml-5 flex-1">
                      <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${
                        index === activeStep ? 'text-primary' : 'text-gray-700'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                      
                      {index === activeStep && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 animate-fadeIn">
                          {step.stats.map((stat, i) => (
                            <div key={i} className="bg-gray-50 p-2 rounded-lg border-l-2 border-primary">
                              <p className="text-xs text-gray-500">{stat.label}</p>
                              <p className="text-sm font-medium text-gray-900">{stat.value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right side - Active step details */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all duration-700 sticky top-24">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6 text-white">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mr-4">
                    {steps[activeStep].icon}
                  </div>
                  <h3 className="text-xl font-bold">Step {steps[activeStep].id}: {steps[activeStep].title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-3">About This Step</h4>
                  <p className="text-gray-700">{steps[activeStep].description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-3">Key Information</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {steps[activeStep].stats.map((stat, i) => (
                      <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700 font-medium">{stat.label}:</span>
                        <span className="text-primary font-semibold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => setActiveStep(prev => prev === 0 ? steps.length - 1 : prev - 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Previous step"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <div className="flex space-x-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === activeStep ? 'bg-primary w-6' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setActiveStep(prev => prev === steps.length - 1 ? 0 : prev + 1)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    aria-label="Next step"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-md transition-colors duration-300 shadow-sm">
              Start Your VA Loan Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanProcess;
