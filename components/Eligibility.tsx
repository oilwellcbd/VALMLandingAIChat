'use client';

import { useState } from 'react';

const Eligibility = () => {
  const [serviceType, setServiceType] = useState('');
  const [servicePeriod, setServicePeriod] = useState('');
  const [serviceLength, setServiceLength] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isEligible, setIsEligible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple eligibility check logic - in production this would be more sophisticated
    if (serviceType && servicePeriod && serviceLength) {
      setIsEligible(true);
    } else {
      setIsEligible(false);
    }
    
    setShowResults(true);
  };

  const resetForm = () => {
    setServiceType('');
    setServicePeriod('');
    setServiceLength('');
    setShowResults(false);
  };

  return (
    <section id="eligibility" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Service Verification
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Your Eligibility</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Find out if you qualify for a VA loan in minutes</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Eligibility Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 relative overflow-hidden">
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light"></div>
            
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Who Qualifies?</h3>
            
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">Active Duty Service Members</h4>
                  <p className="text-sm text-gray-600 mt-1">Currently serving in the U.S. Armed Forces</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">Veterans</h4>
                  <p className="text-sm text-gray-600 mt-1">Those who served in the U.S. Armed Forces and were discharged under conditions other than dishonorable</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">National Guard & Reserve Members</h4>
                  <p className="text-sm text-gray-600 mt-1">With 6 years of service and honorable discharge, or currently serving</p>
                </div>
              </li>
              
              <li className="flex items-start group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mt-1 mr-4 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-base text-gray-900">Surviving Spouses</h4>
                  <p className="text-sm text-gray-600 mt-1">Unremarried spouses of service members who died in the line of duty or from a service-connected disability</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>
                  Eligibility requirements may vary. Contact us for a personalized assessment.
                </p>
              </div>
            </div>
          </div>
          
          {/* Eligibility Checker */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            {!showResults ? (
              <>
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">Check Your Eligibility</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Answer a few questions to see if you may qualify
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="service-type" className="block text-sm font-medium text-gray-700">
                      Military Branch
                    </label>
                    <select 
                      id="service-type" 
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select Military Branch</option>
                      <option value="army">Army</option>
                      <option value="navy">Navy</option>
                      <option value="airforce">Air Force</option>
                      <option value="marines">Marines</option>
                      <option value="coastguard">Coast Guard</option>
                      <option value="reserves">Reserves</option>
                      <option value="nationalguard">National Guard</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service-period" className="block text-sm font-medium text-gray-700">
                      Service Period
                    </label>
                    <select 
                      id="service-period" 
                      value={servicePeriod}
                      onChange={(e) => setServicePeriod(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select Service Period</option>
                      <option value="wwii">World War II</option>
                      <option value="korea">Korean War</option>
                      <option value="vietnam">Vietnam War</option>
                      <option value="gulf">Gulf War</option>
                      <option value="peacetime">Peacetime</option>
                      <option value="current">Current Active Duty</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service-length" className="block text-sm font-medium text-gray-700">
                      Length of Service
                    </label>
                    <select 
                      id="service-length" 
                      value={serviceLength}
                      onChange={(e) => setServiceLength(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    >
                      <option value="">Select Length of Service</option>
                      <option value="less90">Less than 90 days</option>
                      <option value="90to181">90 to 181 days</option>
                      <option value="181to2">181 days to 2 years</option>
                      <option value="2to6">2 to 6 years</option>
                      <option value="6plus">More than 6 years</option>
                    </select>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-sm"
                  >
                    Check Eligibility
                  </button>
                </form>
              </>
            ) : (
              <div className="p-8">
                {isEligible ? (
                  <>
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">You May Be Eligible!</h3>
                    <p className="text-sm text-gray-600 mb-6 text-center">
                      Based on the information provided, you may qualify for a VA loan. 
                      Speak with one of our loan experts to confirm your eligibility and start your application.
                    </p>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-3 bg-secondary hover:bg-secondary-dark text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-sm">
                        Start Application
                      </button>
                      <button 
                        onClick={resetForm}
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors duration-300"
                      >
                        Check Again
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 rounded-full bg-yellow-50 flex items-center justify-center mx-auto mb-6 text-yellow-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 text-center">We Need More Information</h3>
                    <p className="text-sm text-gray-600 mb-6 text-center">
                      We need more details to determine your eligibility. 
                      Please speak with one of our loan experts for a personalized assessment.
                    </p>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-sm">
                        Contact an Expert
                      </button>
                      <button 
                        onClick={resetForm}
                        className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors duration-300"
                      >
                        Check Again
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
