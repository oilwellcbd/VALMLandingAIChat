'use client';

import { useState, useEffect, useRef } from 'react';

const Calculator = () => {
  // Payment calculator state
  const [loanAmount, setLoanAmount] = useState(300000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [fundingFee, setFundingFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  
  // Affordability calculator state
  const [annualIncome, setAnnualIncome] = useState(80000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(0);
  const [affordableAmount, setAffordableAmount] = useState(0);
  
  // Active calculator tab
  const [activeTab, setActiveTab] = useState('payment');
  const [animating, setAnimating] = useState(false);
  const calculatorContentRef = useRef<HTMLDivElement>(null);
  
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

  // Calculate monthly payment
  useEffect(() => {
    if (loanAmount > 0 && interestRate > 0 && loanTerm > 0) {
      // Convert annual interest rate to monthly and decimal
      const monthlyRate = interestRate / 100 / 12;
      
      // Calculate number of payments
      const payments = loanTerm * 12;
      
      // Calculate funding fee (simplified version)
      const feePercentage = 2.3 / 100; // 2.3% for first use with no down payment
      const calculatedFundingFee = loanAmount * feePercentage;
      setFundingFee(calculatedFundingFee);
      
      // Add funding fee to loan amount for total loan
      const totalLoan = loanAmount + calculatedFundingFee;
      
      // Calculate monthly payment using formula: P = L[c(1 + c)^n]/[(1 + c)^n - 1]
      const payment = totalLoan * (monthlyRate * Math.pow(1 + monthlyRate, payments)) / (Math.pow(1 + monthlyRate, payments) - 1);
      
      setMonthlyPayment(payment);
      setTotalCost(payment * payments);
    } else {
      setMonthlyPayment(0);
      setTotalCost(0);
    }
  }, [loanAmount, interestRate, loanTerm]);

  // Calculate affordable amount
  useEffect(() => {
    if (annualIncome > 0) {
      // Convert annual income to monthly
      const monthlyIncome = annualIncome / 12;
      
      // Maximum recommended DTI (Debt-to-Income) ratio for VA loans is around 41%
      const maxMonthlyPayment = monthlyIncome * 0.41 - monthlyDebts;
      
      // Convert monthly payment to loan amount (reverse of payment calculation)
      // This is a simplified calculation
      const monthlyRate = 5.5 / 100 / 12; // Using 5.5% as a default rate
      const payments = 30 * 12; // 30 years
      
      // Formula: L = P[((1 + c)^n - 1)/(c(1 + c)^n)]
      const loanAmount = maxMonthlyPayment * ((Math.pow(1 + monthlyRate, payments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, payments)));
      
      // Add down payment to get total affordable amount
      setAffordableAmount(loanAmount + downPayment);
    } else {
      setAffordableAmount(0);
    }
  }, [annualIncome, monthlyDebts, downPayment]);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="calculator" className="py-24 relative bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Financial Planning
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Loan Calculators</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Plan your VA loan with precision using our sophisticated financial tools</p>
        </div>
        
        {/* Calculator Tabs */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center">
            <div className="bg-white p-1.5 rounded-full shadow-md flex space-x-1 border border-gray-100">
              <button
                className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeTab === 'payment' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleTabChange('payment')}
              >
                Payment Calculator
              </button>
              <button
                className={`px-6 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeTab === 'affordability' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleTabChange('affordability')}
              >
                Affordability Calculator
              </button>
            </div>
          </div>
        </div>
        
        {/* Calculator Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Column - Inputs */}
              <div className="p-6 md:p-8 bg-gray-50 border-r border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {activeTab === 'payment' ? 'Calculate Your Monthly Payment' : 'How Much Home Can You Afford?'}
                </h3>
                
                {activeTab === 'payment' ? (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Loan Amount: {formatCurrency(loanAmount)}</label>
                        <span className="text-xs text-primary">{(loanAmount / 1000000 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="50000"
                          max="1000000"
                          step="5000"
                          value={loanAmount}
                          onChange={(e) => setLoanAmount(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="absolute -bottom-4 left-0 text-xs text-gray-500">$50K</div>
                        <div className="absolute -bottom-4 right-0 text-xs text-gray-500">$1M</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Interest Rate: {interestRate}%</label>
                        <span className="text-xs text-primary">{((interestRate - 2) / 8 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="2"
                          max="10"
                          step="0.125"
                          value={interestRate}
                          onChange={(e) => setInterestRate(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="absolute -bottom-4 left-0 text-xs text-gray-500">2%</div>
                        <div className="absolute -bottom-4 right-0 text-xs text-gray-500">10%</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Loan Term: {loanTerm} years</label>
                        <span className="text-xs text-primary">{((loanTerm - 10) / 20 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="10"
                          max="30"
                          step="5"
                          value={loanTerm}
                          onChange={(e) => setLoanTerm(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="absolute -bottom-4 left-0 text-xs text-gray-500">10yr</div>
                        <div className="absolute -bottom-4 right-0 text-xs text-gray-500">30yr</div>
                      </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">VA Funding Fee:</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium">{formatCurrency(fundingFee)}</span>
                          <div className="ml-2 group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                              VA funding fee is 2.3% for first-time use with no down payment. Veterans with service-connected disabilities may be exempt.
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Total Loan Amount:</span>
                        <span className="text-sm font-medium">{formatCurrency(loanAmount + fundingFee)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Annual Income: {formatCurrency(annualIncome)}</label>
                        <span className="text-xs text-primary">{(annualIncome / 300000 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="30000"
                          max="300000"
                          step="5000"
                          value={annualIncome}
                          onChange={(e) => setAnnualIncome(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="absolute -bottom-4 left-0 text-xs text-gray-500">$30K</div>
                        <div className="absolute -bottom-4 right-0 text-xs text-gray-500">$300K</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Monthly Debts: {formatCurrency(monthlyDebts)}</label>
                        <span className="text-xs text-primary">{(monthlyDebts / 5000 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max="5000"
                          step="100"
                          value={monthlyDebts}
                          onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="absolute -bottom-4 left-0 text-xs text-gray-500">$0</div>
                        <div className="absolute -bottom-4 right-0 text-xs text-gray-500">$5K</div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700">Down Payment: {formatCurrency(downPayment)}</label>
                        <span className="text-xs text-primary">{(downPayment / 100000 * 100).toFixed(0)}%</span>
                      </div>
                      <div className="relative">
                        <input
                          type="range"
                          min="0"
                          max="100000"
                          step="5000"
                          value={downPayment}
                          onChange={(e) => setDownPayment(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                        <div className="absolute -bottom-4 left-0 text-xs text-gray-500">$0</div>
                        <div className="absolute -bottom-4 right-0 text-xs text-gray-500">$100K</div>
                      </div>
                    </div>
                    
                    <div className="pt-6 mt-6 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">Monthly Income:</span>
                        <span className="text-sm font-medium">{formatCurrency(annualIncome / 12)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Debt-to-Income Ratio:</span>
                        <div className="flex items-center">
                          <span className="text-sm font-medium">41%</span>
                          <div className="ml-2 group relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                              VA loans typically allow a maximum debt-to-income ratio of 41%, which is more flexible than conventional loans.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Right Column - Results */}
              <div 
                ref={calculatorContentRef}
                className={`p-6 md:p-8 min-h-[500px] flex flex-col transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
              >
                {activeTab === 'payment' ? (
                  <>
                    <div className="mb-8">
                      <div className="text-center">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-110"></div>
                          <div className="relative bg-white rounded-full p-6 border-2 border-primary/20 shadow-lg">
                            <span className="text-4xl font-bold text-primary">{formatCurrency(monthlyPayment)}</span>
                            <p className="text-sm text-gray-500 mt-1">Monthly Payment</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">{loanTerm} years</span>
                          <p className="text-xs text-gray-500 mt-1">Loan Term</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">{interestRate}%</span>
                          <p className="text-xs text-gray-500 mt-1">Interest Rate</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm flex-grow">
                      <div className="flex justify-between pb-3 border-b border-gray-100">
                        <span className="text-gray-600">Principal & Interest:</span>
                        <span className="font-medium">{formatCurrency(monthlyPayment)}</span>
                      </div>
                      
                      <div className="flex justify-between pb-3 border-b border-gray-100">
                        <span className="text-gray-600">Property Taxes (est.):</span>
                        <span className="font-medium">{formatCurrency(loanAmount * 0.012 / 12)}</span>
                      </div>
                      
                      <div className="flex justify-between pb-3 border-b border-gray-100">
                        <span className="text-gray-600">Homeowners Insurance (est.):</span>
                        <span className="font-medium">{formatCurrency(loanAmount * 0.0035 / 12)}</span>
                      </div>
                      
                      <div className="flex justify-between pt-2">
                        <span className="text-gray-700 font-medium">Total Monthly Cost:</span>
                        <span className="font-bold">{formatCurrency(monthlyPayment + (loanAmount * 0.012 / 12) + (loanAmount * 0.0035 / 12))}</span>
                      </div>
                      
                      <div className="flex justify-between pt-4 mt-4 border-t border-gray-100">
                        <span className="text-gray-700 font-medium">Total Cost Over {loanTerm} Years:</span>
                        <span className="font-bold">{formatCurrency(totalCost)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">
                            <strong>Pro Tip:</strong> VA loans don't require private mortgage insurance (PMI), saving you approximately {formatCurrency(loanAmount * 0.005 / 12)} per month compared to conventional loans with less than 20% down.
                          </p>
                        </div>
                      </div>
                      
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center">
                        Get Pre-Approved
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-8">
                      <div className="text-center">
                        <div className="relative inline-block">
                          <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl transform scale-110"></div>
                          <div className="relative bg-white rounded-full p-6 border-2 border-primary/20 shadow-lg">
                            <span className="text-4xl font-bold text-primary">{formatCurrency(affordableAmount)}</span>
                            <p className="text-sm text-gray-500 mt-1">Home Price Range</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">{formatCurrency(affordableAmount - downPayment)}</span>
                          <p className="text-xs text-gray-500 mt-1">Loan Amount</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <span className="text-lg font-semibold text-gray-900">{formatCurrency((affordableAmount - downPayment) * (5.5 / 100 / 12) * Math.pow(1 + (5.5 / 100 / 12), 360) / (Math.pow(1 + (5.5 / 100 / 12), 360) - 1))}</span>
                          <p className="text-xs text-gray-500 mt-1">Monthly Payment</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm flex-grow">
                      <div className="flex justify-between pb-3 border-b border-gray-100">
                        <span className="text-gray-600">Annual Income:</span>
                        <span className="font-medium">{formatCurrency(annualIncome)}</span>
                      </div>
                      
                      <div className="flex justify-between pb-3 border-b border-gray-100">
                        <span className="text-gray-600">Monthly Debts:</span>
                        <span className="font-medium">{formatCurrency(monthlyDebts)}</span>
                      </div>
                      
                      <div className="flex justify-between pb-3 border-b border-gray-100">
                        <span className="text-gray-600">Down Payment:</span>
                        <span className="font-medium">{formatCurrency(downPayment)}</span>
                      </div>
                      
                      <div className="flex justify-between pb-3 border-b border-gray-100">
                        <span className="text-gray-600">Monthly Housing Budget:</span>
                        <span className="font-medium">{formatCurrency((annualIncome / 12) * 0.41 - monthlyDebts)}</span>
                      </div>
                      
                      <div className="flex justify-between pt-2">
                        <span className="text-gray-700 font-medium">Loan Amount:</span>
                        <span className="font-bold">{formatCurrency(affordableAmount - downPayment)}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600">
                            <strong>Pro Tip:</strong> VA loans often allow for a higher debt-to-income ratio than conventional loans, helping you qualify for more home with the same income.
                          </p>
                        </div>
                      </div>
                      
                      <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center">
                        Find Homes In Your Range
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
