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
    <section id="eligibility" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="text-primary mb-2">Check Your Eligibility</h2>
          <p className="text-xl text-gray-600">Find out if you qualify for a VA loan in minutes</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Eligibility Information */}
          <div className="card p-8">
            <h3 className="text-2xl font-semibold mb-4">Who Qualifies?</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Active Duty Service Members</h4>
                  <p className="text-gray-600">Currently serving in the U.S. Armed Forces</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Veterans</h4>
                  <p className="text-gray-600">Those who served in the U.S. Armed Forces and were discharged under conditions other than dishonorable</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">National Guard & Reserve Members</h4>
                  <p className="text-gray-600">With 6 years of service and honorable discharge, or currently serving</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mt-1 mr-3 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">Surviving Spouses</h4>
                  <p className="text-gray-600">Spouses of service members who died in the line of duty or from a service-connected disability</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <p className="text-gray-700">
                Our AI-powered eligibility checker can help you determine if you qualify for a VA loan and guide you through the next steps.
              </p>
            </div>
          </div>
          
          {/* Eligibility Form */}
          <div className="card p-8">
            {!showResults ? (
              <>
                <h3 className="text-2xl font-semibold mb-4">Quick Eligibility Check</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="service-type" className="block text-gray-700 font-medium mb-2">
                      Service Type
                    </label>
                    <select 
                      id="service-type" 
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Service Type</option>
                      <option value="active">Active Duty</option>
                      <option value="veteran">Veteran</option>
                      <option value="reserve">National Guard/Reserve</option>
                      <option value="spouse">Surviving Spouse</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="service-period" className="block text-gray-700 font-medium mb-2">
                      Service Period
                    </label>
                    <select 
                      id="service-period" 
                      value={servicePeriod}
                      onChange={(e) => setServicePeriod(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Select Service Period</option>
                      <option value="wwii">WWII</option>
                      <option value="korea">Korean War</option>
                      <option value="vietnam">Vietnam War</option>
                      <option value="gulf">Gulf War</option>
                      <option value="post911">Post-9/11</option>
                      <option value="peacetime">Peacetime</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="service-length" className="block text-gray-700 font-medium mb-2">
                      Length of Service
                    </label>
                    <select 
                      id="service-length" 
                      value={serviceLength}
                      onChange={(e) => setServiceLength(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
                    className="w-full btn btn-primary"
                  >
                    Check Eligibility
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                {isEligible ? (
                  <>
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-green-600">You May Be Eligible!</h3>
                    <p className="text-gray-600 mb-6">
                      Based on the information provided, you may qualify for a VA loan. 
                      Speak with one of our loan experts to confirm your eligibility and start your application.
                    </p>
                    <div className="space-y-4">
                      <button className="w-full btn btn-primary">
                        Start Application
                      </button>
                      <button 
                        onClick={resetForm}
                        className="w-full btn btn-outline"
                      >
                        Check Again
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4 text-yellow-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold mb-2 text-yellow-600">We Need More Information</h3>
                    <p className="text-gray-600 mb-6">
                      We need more details to determine your eligibility. 
                      Please speak with one of our loan experts for a personalized assessment.
                    </p>
                    <div className="space-y-4">
                      <button className="w-full btn btn-primary">
                        Contact an Expert
                      </button>
                      <button 
                        onClick={resetForm}
                        className="w-full btn btn-outline"
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
