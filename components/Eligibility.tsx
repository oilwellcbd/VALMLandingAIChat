'use client';

import { useState, useRef } from 'react';

const Eligibility = () => {
  const [serviceType, setServiceType] = useState('');
  const [servicePeriod, setServicePeriod] = useState('');
  const [serviceLength, setServiceLength] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setAnimating(true);
    
    // Simple eligibility check logic - in production this would be more sophisticated
    if (serviceType && servicePeriod && serviceLength) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
    
    setTimeout(() => {
      setShowResults(true);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }, 300);
  };

  const resetForm = () => {
    setAnimating(true);
    
    setTimeout(() => {
      setServiceType('');
      setServicePeriod('');
      setServiceLength('');
      setShowResults(false);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }, 300);
  };

  return (
    <section id="eligibility" className="py-24 relative bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Service Verification
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Eligibility</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Find out if you qualify for a VA loan in minutes</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Eligibility Information */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-8 relative overflow-hidden">
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
            
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Who Qualifies?</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">Active Duty Service Members</h4>
                  <p className="text-sm text-gray-600 mt-1">Currently serving in the U.S. Armed Forces with at least 90 continuous days of service.</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">Veterans</h4>
                  <p className="text-sm text-gray-600 mt-1">Those who served in the U.S. Armed Forces and were discharged under conditions other than dishonorable.</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">National Guard & Reserves</h4>
                  <p className="text-sm text-gray-600 mt-1">Members with at least 6 years of service and honorable discharge, or 90 days of active service during wartime.</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">Surviving Spouses</h4>
                  <p className="text-sm text-gray-600 mt-1">Unremarried spouses of service members who died in the line of duty or from a service-connected disability.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    <strong>Pro Tip:</strong> Have your Certificate of Eligibility (COE) ready when applying for a VA loan. We can help you obtain this document if needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Eligibility Form/Results */}
          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden relative min-h-[600px]">
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary-light"></div>
            
            <div 
              ref={resultsContainerRef}
              className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
            >
              {!showResults ? (
                <>
                  <div className="p-8 border-b border-gray-100 bg-gray-50">
                    <h3 className="text-xl font-semibold text-gray-900">Check Your Eligibility</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Answer a few questions to see if you may qualify for a VA loan
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    <div>
                      <label htmlFor="service-type" className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Service
                      </label>
                      <select
                        id="service-type"
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select Service Type</option>
                        <option value="active">Active Duty</option>
                        <option value="veteran">Veteran</option>
                        <option value="guard">National Guard/Reserves</option>
                        <option value="spouse">Surviving Spouse</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="service-period" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Period
                      </label>
                      <select
                        id="service-period"
                        value={servicePeriod}
                        onChange={(e) => setServicePeriod(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select Service Period</option>
                        <option value="post911">Post 9/11 (Sept 2001 - Present)</option>
                        <option value="gulf">Gulf War (Aug 1990 - Aug 2001)</option>
                        <option value="vietnam">Vietnam Era (Aug 1964 - May 1975)</option>
                        <option value="korea">Korean War (Jun 1950 - Jan 1955)</option>
                        <option value="ww2">World War II (Sep 1940 - Jul 1947)</option>
                        <option value="peacetime">Peacetime</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="service-length" className="block text-sm font-medium text-gray-700 mb-2">
                        Length of Service
                      </label>
                      <select
                        id="service-length"
                        value={serviceLength}
                        onChange={(e) => setServiceLength(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select Length of Service</option>
                        <option value="90days">90-181 days</option>
                        <option value="6mo">181 days - 2 years</option>
                        <option value="2to6">2 to 6 years</option>
                        <option value="6plus">More than 6 years</option>
                      </select>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="w-full px-4 py-3 bg-gradient-to-r from-secondary to-secondary-dark text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center"
                    >
                      Check Eligibility
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                </>
              ) : (
                <div className="p-8 flex flex-col items-center justify-center min-h-[600px]">
                  {isEligible ? (
                    <>
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-green-100 rounded-full blur-xl transform scale-110"></div>
                        <div className="relative w-24 h-24 rounded-full bg-white border-2 border-green-200 flex items-center justify-center shadow-lg">
                          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900 text-center">You May Be Eligible!</h3>
                      <p className="text-gray-600 mb-8 text-center max-w-md">
                        Based on the information provided, you may qualify for a VA loan. 
                        Speak with one of our loan experts to confirm your eligibility and start your application.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">$0</span>
                          <p className="text-xs text-gray-500 mt-1">Down Payment</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">No PMI</span>
                          <p className="text-xs text-gray-500 mt-1">Required</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 w-full max-w-md mt-8">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-secondary to-secondary-dark text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center">
                          Start Application
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>
                        <button 
                          onClick={resetForm}
                          className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                        >
                          Check Again
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-yellow-100 rounded-full blur-xl transform scale-110"></div>
                        <div className="relative w-24 h-24 rounded-full bg-white border-2 border-yellow-200 flex items-center justify-center shadow-lg">
                          <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900 text-center">We Need More Information</h3>
                      <p className="text-gray-600 mb-8 text-center max-w-md">
                        We need more details to determine your eligibility. 
                        Please speak with one of our loan experts for a personalized assessment.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">Free</span>
                          <p className="text-xs text-gray-500 mt-1">Consultation</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">Expert</span>
                          <p className="text-xs text-gray-500 mt-1">Guidance</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 w-full max-w-md mt-8">
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center">
                          Contact an Expert
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </button>
                        <button 
                          onClick={resetForm}
                          className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center"
                        >
                          Check Again
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
