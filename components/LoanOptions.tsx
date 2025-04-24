'use client';

import { useState } from 'react';
import Image from 'next/image';

interface LoanOption {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  idealFor: string[];
}

const LoanOptions = () => {
  const [activeTab, setActiveTab] = useState('purchase');
  
  const loanOptions: Record<string, LoanOption[]> = {
    purchase: [
      {
        id: 'standard',
        title: 'Standard Purchase Loan',
        icon: 'fa-home',
        description: 'The traditional VA home loan for purchasing a primary residence with competitive rates and no down payment required.',
        features: [
          'No down payment required',
          'Competitive interest rates',
          'No private mortgage insurance',
          'Flexible credit requirements',
          'Loan limits based on county'
        ],
        idealFor: [
          'First-time homebuyers',
          'Veterans with full entitlement',
          'Active duty service members',
          'Those with limited savings for down payment'
        ]
      },
      {
        id: 'jumbo',
        title: 'Jumbo VA Loan',
        icon: 'fa-dollar-sign',
        description: 'For higher-priced homes that exceed the standard VA loan limits in your county.',
        features: [
          'Higher loan amounts available',
          'May require a down payment for amounts over county limit',
          'Still offers competitive rates',
          'No PMI regardless of down payment',
          'Stricter qualification requirements'
        ],
        idealFor: [
          'Veterans buying in high-cost areas',
          'Those purchasing luxury homes',
          'Buyers in competitive urban markets',
          'Service members with higher income'
        ]
      }
    ],
    refinance: [
      {
        id: 'irrrl',
        title: 'Interest Rate Reduction Refinance Loan (IRRRL)',
        icon: 'fa-percentage',
        description: 'Also known as the VA Streamline Refinance, this option allows you to refinance an existing VA loan with minimal paperwork.',
        features: [
          'No appraisal required in most cases',
          'Minimal documentation needed',
          'Lower funding fee than other VA loans',
          'Can be done with no out-of-pocket costs',
          'Must result in lower interest rate in most cases'
        ],
        idealFor: [
          'Current VA loan holders',
          'Those looking to lower their interest rate',
          'Veterans wanting to reduce monthly payments',
          'Those who want to switch from adjustable to fixed rate'
        ]
      },
      {
        id: 'cashout',
        title: 'Cash-Out Refinance',
        icon: 'fa-money-bill-wave',
        description: 'Access your home\'s equity for debt consolidation, home improvements, or other financial needs.',
        features: [
          'Refinance up to 100% of your home\'s value',
          'Can be used to convert a non-VA loan to a VA loan',
          'Access cash from your home\'s equity',
          'Requires full underwriting and appraisal',
          'Higher funding fee than IRRRL'
        ],
        idealFor: [
          'Homeowners with significant equity',
          'Those with high-interest debt to consolidate',
          'Veterans planning major home improvements',
          'Non-VA loan holders wanting VA loan benefits'
        ]
      }
    ],
    special: [
      {
        id: 'nadl',
        title: 'Native American Direct Loan (NADL)',
        icon: 'fa-landmark',
        description: 'Specialized loans for Native American Veterans to purchase, construct, or improve homes on Federal Trust Land.',
        features: [
          'Direct loan from the VA (not a private lender)',
          'Low interest rate fixed for 30 years',
          'No down payment required',
          'No private mortgage insurance',
          'Limited to Federal Trust Land'
        ],
        idealFor: [
          'Native American Veterans',
          'Alaska Native Veterans',
          'Veterans married to Native Americans',
          'Those building on Federal Trust Land'
        ]
      },
      {
        id: 'adapted',
        title: 'Specially Adapted Housing (SAH) Grant',
        icon: 'fa-wheelchair',
        description: 'Financial assistance for Veterans with certain service-connected disabilities to build, remodel, or purchase an adapted home.',
        features: [
          'Grant (not a loan) up to $101,754 (2022)',
          'Can be used multiple times up to maximum amount',
          'Can be combined with other VA loans',
          'Doesn\'t need to be repaid',
          'Specific disability requirements apply'
        ],
        idealFor: [
          'Veterans with severe service-connected disabilities',
          'Those needing wheelchair accessibility',
          'Veterans with vision or mobility limitations',
          'Those modifying homes for disability accommodation'
        ]
      }
    ]
  };

  return (
    <section id="loan-options" className="py-16 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Financing Solutions
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Loan Options</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Specialized mortgage solutions designed for military service members and veterans</p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
          <button 
            className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'purchase' 
                ? 'text-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('purchase')}
          >
            Purchase Loans
            {activeTab === 'purchase' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
          <button 
            className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'refinance' 
                ? 'text-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('refinance')}
          >
            Refinance Loans
            {activeTab === 'refinance' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
          <button 
            className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'special' 
                ? 'text-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('special')}
          >
            Specialized Programs
            {activeTab === 'special' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
        </div>
        
        {/* Loan Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loanOptions[activeTab].map((option, idx) => (
            <div 
              key={option.id} 
              className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group"
            >
              <div className={`relative bg-gradient-to-r ${idx % 2 === 0 ? 'from-primary/5 to-primary/10' : 'from-secondary/5 to-secondary/10'} p-6`}>
                {/* Accent line */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${idx % 2 === 0 ? 'from-primary to-primary-light' : 'from-secondary to-secondary-light'}`}></div>
                
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-lg ${idx % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white`}>
                    <i className={`fas ${option.icon} text-lg`}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{option.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{option.description}</p>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-2 ${idx % 2 === 0 ? 'text-primary' : 'text-secondary'} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-gray-500 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Ideal For
                  </h4>
                  <ul className="space-y-2">
                    {option.idealFor.map((ideal, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-2 ${idx % 2 === 0 ? 'text-primary' : 'text-secondary'} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-600">{ideal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <button className={`w-full px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${idx % 2 === 0 ? 'bg-primary hover:bg-primary-dark text-white' : 'bg-secondary hover:bg-secondary-dark text-white'}`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;
