'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface LoanOption {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  idealFor: string[];
  stats?: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
}

const LoanOptions = () => {
  const [activeTab, setActiveTab] = useState('purchase');
  const [animating, setAnimating] = useState(false);
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  
  // Handle tab change with animation
  const handleTabChange = (tab: string) => {
    if (tab === activeTab) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }, 300);
  };
  
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
        ],
        stats: [
          { label: 'Down Payment', value: '0%', highlight: true },
          { label: 'Funding Fee', value: '1.4% - 2.3%' },
          { label: 'Credit Score', value: '620+ recommended' }
        ]
      },
      {
        id: 'jumbo',
        title: 'Jumbo VA Loan',
        icon: 'fa-dollar-sign',
        description: 'For higher-priced homes that exceed the standard VA loan limits in your county. Perfect for luxury properties and high-cost areas.',
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
        ],
        stats: [
          { label: 'Loan Limit', value: '$1M+', highlight: true },
          { label: 'Down Payment', value: 'May be required' },
          { label: 'Credit Score', value: '640+ recommended' }
        ]
      }
    ],
    refinance: [
      {
        id: 'irrrl',
        title: 'Interest Rate Reduction Refinance Loan (IRRRL)',
        icon: 'fa-percentage',
        description: 'Also known as the VA Streamline Refinance, this option allows you to refinance an existing VA loan with minimal paperwork and hassle.',
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
        ],
        stats: [
          { label: 'Paperwork', value: 'Minimal', highlight: true },
          { label: 'Funding Fee', value: '0.5%' },
          { label: 'Time to Close', value: '2-4 weeks' }
        ]
      },
      {
        id: 'cashout',
        title: 'Cash-Out Refinance',
        icon: 'fa-money-bill-wave',
        description: 'Access your home\'s equity for debt consolidation, home improvements, or other financial needs. Turn your home\'s value into usable funds.',
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
        ],
        stats: [
          { label: 'Cash Access', value: 'Up to 100% LTV', highlight: true },
          { label: 'Funding Fee', value: '2.3% - 3.6%' },
          { label: 'Time to Close', value: '30-45 days' }
        ]
      }
    ],
    special: [
      {
        id: 'nadl',
        title: 'Native American Direct Loan (NADL)',
        icon: 'fa-landmark',
        description: 'Specialized loans for Native American Veterans to purchase, construct, or improve homes on Federal Trust Land. Offers unique benefits for eligible borrowers.',
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
        ],
        stats: [
          { label: 'Direct From', value: 'The VA', highlight: true },
          { label: 'Down Payment', value: '0%' },
          { label: 'Interest Rate', value: 'Fixed for 30 years' }
        ]
      },
      {
        id: 'adapted',
        title: 'Specially Adapted Housing (SAH) Grant',
        icon: 'fa-wheelchair',
        description: 'Financial assistance for Veterans with certain service-connected disabilities to build, remodel, or purchase an adapted home. Supports independent living.',
        features: [
          'Grant (not a loan) up to $101,754 (2025)',
          'Can be used multiple times up to maximum amount',
          'Can be combined with a VA loan',
          'Doesn\'t need to be repaid',
          'Available for severe service-connected disabilities'
        ],
        idealFor: [
          'Veterans with qualifying disabilities',
          'Those needing home modifications for accessibility',
          'Veterans who lost limbs in service',
          'Those with severe burns or blindness'
        ],
        stats: [
          { label: 'Maximum Grant', value: '$101,754', highlight: true },
          { label: 'Repayment', value: 'None required' },
          { label: 'Usage', value: 'Multiple times allowed' }
        ]
      }
    ]
  };

  return (
    <section id="loan-options" className="py-24 relative bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Financing Options
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Loan Options</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Explore our range of VA loan programs designed to meet your specific needs</p>
        </div>
        
        {/* Tabs */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center">
            <div className="bg-white p-1.5 rounded-full shadow-md flex space-x-1 border border-gray-100">
              <button
                className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeTab === 'purchase' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleTabChange('purchase')}
              >
                Purchase Loans
              </button>
              <button
                className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeTab === 'refinance' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleTabChange('refinance')}
              >
                Refinance Loans
              </button>
              <button
                className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeTab === 'special' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleTabChange('special')}
              >
                Specialized Programs
              </button>
            </div>
          </div>
        </div>
        
        {/* Loan Options */}
        <div 
          ref={optionsContainerRef}
          className={`transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loanOptions[activeTab].map((option, idx) => (
              <div key={option.id} className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="p-6 bg-gray-50 relative">
                  {/* Accent line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${idx % 2 === 0 ? 'from-primary to-primary-light' : 'from-secondary to-secondary-light'}`}></div>
                  
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg ${idx % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-white`}>
                      <i className={`fas ${option.icon} text-lg`}></i>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{option.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{option.description}</p>
                  
                  {/* Stats Section - New Addition */}
                  {option.stats && (
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {option.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className={`text-sm font-bold ${stat.highlight ? (idx % 2 === 0 ? 'text-primary' : 'text-secondary') : 'text-gray-700'}`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-6 flex-grow">
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
                  
                  <div className="pt-4 border-t border-gray-100 flex-grow">
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
                    <button className={`w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] ${
                      idx % 2 === 0 
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-md hover:shadow-lg' 
                        : 'bg-gradient-to-r from-secondary to-secondary-dark text-white shadow-md hover:shadow-lg'
                    }`}>
                      <span className="flex items-center justify-center">
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanOptions;
