'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const LoanProcess = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Define the loan process steps
  const steps = [
    {
      title: 'Eligibility Check',
      description: 'Verify your military service and eligibility for VA loan benefits.',
      icon: 'fa-medal',
      details: [
        'Confirm your service status (active duty, veteran, or surviving spouse)',
        'Verify length of service requirements',
        'Obtain your Certificate of Eligibility (COE)',
        'Check your VA entitlement amount'
      ]
    },
    {
      title: 'Pre-Approval',
      description: 'Get pre-approved to understand your budget and strengthen your offer.',
      icon: 'fa-file-certificate',
      details: [
        'Complete a loan application',
        'Provide financial documentation',
        'Credit check and debt-to-income analysis',
        'Receive your pre-approval letter'
      ]
    },
    {
      title: 'House Hunting',
      description: 'Find a home that meets VA property requirements and fits your needs.',
      icon: 'fa-house-magnifying-glass',
      details: [
        'Work with a real estate agent familiar with VA loans',
        'Ensure properties meet VA minimum property requirements (MPRs)',
        'Make an offer with your pre-approval',
        'Negotiate terms with the seller'
      ]
    },
    {
      title: 'VA Appraisal',
      description: 'The VA will appraise the property to determine its value and condition.',
      icon: 'fa-house-flag',
      details: [
        'VA assigns a licensed appraiser',
        'Property is evaluated for fair market value',
        'Home is inspected for VA minimum property requirements',
        'Appraisal report is reviewed by the VA'
      ]
    },
    {
      title: 'Loan Processing',
      description: 'Your lender will process your application and prepare for closing.',
      icon: 'fa-file-signature',
      details: [
        'Lender verifies all documentation',
        'Underwriter reviews your loan package',
        'Conditions are cleared for final approval',
        'Closing disclosure is prepared'
      ]
    },
    {
      title: 'Closing',
      description: 'Sign final paperwork, pay closing costs, and receive your keys.',
      icon: 'fa-handshake',
      details: [
        'Review and sign closing documents',
        'Pay closing costs (if not rolled into loan)',
        'Funding is completed',
        'Receive keys to your new home'
      ]
    }
  ];

  // Floating elements for animation
  const floatingElements = [
    { size: 'w-12 h-12', position: 'top-10 right-[10%]', shape: 'rounded-lg', rotation: 'rotate-12', animation: 'animate-float' },
    { size: 'w-8 h-8', position: 'top-32 left-[5%]', shape: 'rounded-full', rotation: '-rotate-6', animation: 'animate-float-slow' },
    { size: 'w-10 h-10', position: 'bottom-20 right-[15%]', shape: 'rounded-lg', rotation: 'rotate-45', animation: 'animate-float-reverse' },
    { size: 'w-6 h-6', position: 'bottom-40 left-[20%]', shape: 'rounded-full', rotation: 'rotate-12', animation: 'animate-float' },
  ];

  return (
    <section id="loan-process" className="py-16 relative overflow-hidden">
      {/* Dynamic background with neural network pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-0 bg-[url('/images/backgrounds/neural-pattern.svg')] bg-repeat opacity-5" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-primary-light/5 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/5 to-secondary-light/5 blur-3xl animate-float"></div>
        
        {/* Floating decorative elements */}
        {floatingElements.map((el, index) => (
          <div 
            key={index}
            className={`absolute ${el.size} ${el.position} ${el.shape} border-2 border-primary/10 ${el.rotation} ${el.animation} hidden lg:block`}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with premium divider */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VA Loan Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Follow these steps to secure your VA loan and achieve your homeownership goals.</p>
          
          {/* Premium divider */}
          <div className="flex items-center justify-center">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary mx-1"></div>
            <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-primary-light"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary-light mx-1"></div>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary-light/50 to-transparent"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 rounded-full"></div>
          
          {/* Steps */}
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center">
                  {/* Left side content (for even-indexed steps) */}
                  {index % 2 === 0 && (
                    <div className="w-1/2 pr-8 text-right">
                      <div 
                        className={`transition-all duration-300 ${activeStep === index ? 'transform -translate-y-1' : ''}`}
                        onMouseEnter={() => setActiveStep(index)}
                        onMouseLeave={() => setActiveStep(null)}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                        
                        {/* Details that appear on hover */}
                        <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center justify-end text-sm text-gray-600">
                              <span>{detail}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-primary ml-2"></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Empty space for right side (for even-indexed steps) */}
                  {index % 2 === 0 && <div className="w-1/2"></div>}
                  
                  {/* Empty space for left side (for odd-indexed steps) */}
                  {index % 2 === 1 && <div className="w-1/2"></div>}
                  
                  {/* Right side content (for odd-indexed steps) */}
                  {index % 2 === 1 && (
                    <div className="w-1/2 pl-8">
                      <div 
                        className={`transition-all duration-300 ${activeStep === index ? 'transform -translate-y-1' : ''}`}
                        onMouseEnter={() => setActiveStep(index)}
                        onMouseLeave={() => setActiveStep(null)}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                        
                        {/* Details that appear on hover */}
                        <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
                          activeStep === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Center icon - positioned absolutely */}
                <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: index % 2 === 0 ? '0' : '0' }}>
                  <div 
                    className={`w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center z-10 shadow-lg transition-all duration-300 ${
                      activeStep === index ? 'scale-110 shadow-primary/30' : ''
                    }`}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <i className={`fas ${step.icon} text-lg`}></i>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-primary/20">
                    {index + 1}
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-primary-light"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Final step with glow effect */}
        <div className="max-w-3xl mx-auto mt-16 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 animate-glow"></div>
          
          <div className="relative bg-white rounded-xl p-6 shadow-lg border border-primary/10 overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg"></div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary text-sm font-medium mb-3 border border-primary/20">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  Ready to Start?
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Begin Your VA Loan Journey Today</h3>
                <p className="text-gray-600 mb-6">Our team of VA loan specialists is ready to guide you through every step of the process and help you achieve your homeownership goals.</p>
                
                <button className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:from-primary-dark hover:to-primary transition duration-200 shadow-md flex items-center justify-center space-x-2 group">
                  <i className="fas fa-rocket mr-2 group-hover:animate-bounce-subtle"></i>
                  <span>Get Started Now</span>
                </button>
              </div>
              
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg"></div>
                <div className="relative p-4">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg border border-primary/10 relative bg-gray-900">
                    {/* Neural Network House Animation */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
                      {/* Neural network nodes */}
                      {[...Array(20)].map((_, i) => (
                        <div 
                          key={i}
                          className={`absolute w-1.5 h-1.5 rounded-full bg-primary/80 animate-pulse`}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                          }}
                        />
                      ))}
                      
                      {/* House outline created with neural connections */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-64 h-48">
                          {/* Roof */}
                          <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
                            <div className="w-0 h-0 border-l-[128px] border-r-[128px] border-b-[64px] border-l-transparent border-r-transparent border-b-primary/20 mx-auto"></div>
                            <div className="absolute top-0 left-0 right-0">
                              {[...Array(8)].map((_, i) => (
                                <div 
                                  key={i} 
                                  className="absolute h-px bg-primary animate-glow-pulse"
                                  style={{
                                    width: `${100 - i * 12.5}%`,
                                    left: `${i * 6.25}%`,
                                    top: `${i * 8}px`,
                                    animationDelay: `${i * 0.2}s`
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                          
                          {/* House body */}
                          <div className="absolute top-16 left-16 right-16 bottom-0 border-2 border-primary/20 rounded-sm overflow-hidden">
                            {/* Windows and door */}
                            <div className="absolute top-6 left-6 w-12 h-12 border border-primary/40 rounded-sm"></div>
                            <div className="absolute top-6 right-6 w-12 h-12 border border-primary/40 rounded-sm"></div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-20 border-t border-l border-r border-primary/40 rounded-t-sm"></div>
                            
                            {/* Neural connections inside house */}
                            {[...Array(15)].map((_, i) => (
                              <div 
                                key={i}
                                className="absolute bg-primary/30 animate-pulse-slow"
                                style={{
                                  height: '1px',
                                  width: `${20 + Math.random() * 60}px`,
                                  left: `${Math.random() * 100}%`,
                                  top: `${Math.random() * 100}%`,
                                  transform: `rotate(${Math.random() * 360}deg)`,
                                  animationDelay: `${Math.random() * 3}s`,
                                  animationDuration: `${3 + Math.random() * 4}s`
                                }}
                              />
                            ))}
                          </div>
                          
                          {/* Animated data points */}
                          {[...Array(30)].map((_, i) => {
                            const startX = Math.random() * 100;
                            const startY = Math.random() * 100;
                            const endX = Math.random() * 100;
                            const endY = Math.random() * 100;
                            
                            return (
                              <div 
                                key={i}
                                className="absolute w-1 h-1 rounded-full bg-secondary animate-data-flow"
                                style={{
                                  left: `${startX}%`,
                                  top: `${startY}%`,
                                  '--start-x': `${startX}%`,
                                  '--start-y': `${startY}%`,
                                  '--end-x': `${endX}%`,
                                  '--end-y': `${endY}%`,
                                  animationDelay: `${Math.random() * 10}s`,
                                  animationDuration: `${5 + Math.random() * 10}s`
                                } as React.CSSProperties}
                              />
                            );
                          })}
                        </div>
                      </div>
                      
                      {/* Glowing orb in center */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg animate-pulse-slow"></div>
                        <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary/40 to-secondary/40 blur-md animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary blur-sm animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                      </div>
                    </div>
                    
                    {/* Overlay text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                      <div className="text-lg font-bold mb-2 text-center px-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary animate-pulse-slow">
                        AI-Powered VA Loan Matching
                      </div>
                      <div className="text-xs text-center max-w-xs px-4 text-gray-300">
                        Our neural network analyzes thousands of loan options to find your perfect match
                      </div>
                    </div>
                    
                    {/* Interactive play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/20 cursor-pointer hover:scale-110 transition-transform duration-200 group">
                        <div 
                          className={`w-12 h-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center group-hover:from-primary-dark group-hover:to-primary`}
                        >
                          <i className="fas fa-play text-white group-hover:scale-110 transition-transform duration-200"></i>
                        </div>
                        <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success stats - enhanced version */}
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-primary/10 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="text-center group">
                        <div className="text-xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">98%</div>
                        <div className="text-xs text-gray-500">Success Rate</div>
                      </div>
                      <div className="h-8 w-px bg-gradient-to-b from-gray-100 via-primary/20 to-gray-100"></div>
                      <div className="text-center group">
                        <div className="text-xl font-bold text-secondary group-hover:scale-110 transition-transform duration-300">14k+</div>
                        <div className="text-xs text-gray-500">Veterans Helped</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanProcess;
