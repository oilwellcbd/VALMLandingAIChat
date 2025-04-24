'use client';

import { useState, useEffect } from 'react';

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
    <section id="calculator" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Financial Planning
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Loan Calculators</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Plan your VA loan with precision using our sophisticated financial tools</p>
        </div>
        
        {/* Calculator Tabs */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200">
          <button 
            className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'payment' 
                ? 'text-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('payment')}
          >
            Payment Calculator
            {activeTab === 'payment' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
          <button 
            className={`relative px-6 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'affordability' 
                ? 'text-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('affordability')}
          >
            Affordability Calculator
            {activeTab === 'affordability' && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">
                {activeTab === 'payment' ? 'Calculate Your Monthly Payment' : 'Estimate What You Can Afford'}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {activeTab === 'payment' 
                  ? 'See what your monthly payments would be based on loan amount, interest rate, and term.' 
                  : 'Find out how much house you can afford based on your income and existing debts.'}
              </p>
            </div>
            
            <div className="p-6">
              {activeTab === 'payment' ? (
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700">
                        Loan Amount: {formatCurrency(loanAmount)}
                      </label>
                      <span className="text-xs text-gray-500">${loanAmount.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      id="loan-amount"
                      min="50000"
                      max="1000000"
                      step="1000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">$50,000</span>
                      <span className="text-xs text-gray-500">$1,000,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700">
                        Interest Rate: {interestRate}%
                      </label>
                      <span className="text-xs text-gray-500">{interestRate}%</span>
                    </div>
                    <input
                      type="range"
                      id="interest-rate"
                      min="2"
                      max="10"
                      step="0.125"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">2%</span>
                      <span className="text-xs text-gray-500">10%</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700">
                        Loan Term: {loanTerm} years
                      </label>
                      <span className="text-xs text-gray-500">{loanTerm} years</span>
                    </div>
                    <div className="flex space-x-4">
                      {[15, 20, 30].map((term) => (
                        <button
                          key={term}
                          type="button"
                          onClick={() => setLoanTerm(term)}
                          className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-300 ${
                            loanTerm === term
                              ? 'bg-primary text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {term} Years
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="annual-income" className="block text-sm font-medium text-gray-700">
                        Annual Income: {formatCurrency(annualIncome)}
                      </label>
                      <span className="text-xs text-gray-500">${annualIncome.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      id="annual-income"
                      min="30000"
                      max="300000"
                      step="1000"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">$30,000</span>
                      <span className="text-xs text-gray-500">$300,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="monthly-debts" className="block text-sm font-medium text-gray-700">
                        Monthly Debts: {formatCurrency(monthlyDebts)}
                      </label>
                      <span className="text-xs text-gray-500">${monthlyDebts.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      id="monthly-debts"
                      min="0"
                      max="5000"
                      step="50"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">$0</span>
                      <span className="text-xs text-gray-500">$5,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700">
                        Down Payment: {formatCurrency(downPayment)}
                      </label>
                      <span className="text-xs text-gray-500">${downPayment.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      id="down-payment"
                      min="0"
                      max="100000"
                      step="1000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">$0</span>
                      <span className="text-xs text-gray-500">$100,000</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Results */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-900">Your Results</h3>
              <p className="text-sm text-gray-600 mt-1">
                {activeTab === 'payment' 
                  ? 'Based on your loan details' 
                  : 'Based on your financial profile'}
              </p>
            </div>
            
            <div className="p-6">
              {activeTab === 'payment' ? (
                <>
                  <div className="mb-8">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-primary">{formatCurrency(monthlyPayment)}</span>
                      <p className="text-sm text-gray-500 mt-1">Estimated Monthly Payment</p>
                    </div>
                    
                    <div className="mt-6 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Principal & Interest:</span>
                        <span className="text-sm font-medium">{formatCurrency(monthlyPayment)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">VA Funding Fee:</span>
                        <span className="text-sm font-medium">{formatCurrency(fundingFee)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Funding Fee Added to Loan:</span>
                        <span className="text-sm font-medium">Yes</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Loan Amount:</span>
                      <span className="font-medium">{formatCurrency(loanAmount)}</span>
                    </div>
                    
                    <div className="flex justify-between pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Interest Rate:</span>
                      <span className="font-medium">{interestRate}%</span>
                    </div>
                    
                    <div className="flex justify-between pb-3 border-b border-gray-100">
                      <span className="text-gray-600">Loan Term:</span>
                      <span className="font-medium">{loanTerm} years</span>
                    </div>
                    
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-700 font-medium">Total Cost Over {loanTerm} Years:</span>
                      <span className="font-bold">{formatCurrency(totalCost)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-xs text-gray-500 mb-4">
                      <strong>Note:</strong> This calculator provides an estimate. Actual payment may vary based on exact interest rate, closing costs, and other factors.
                    </p>
                    <button className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-sm">
                      Get Pre-Approved
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-8">
                    <div className="text-center">
                      <span className="text-4xl font-bold text-primary">{formatCurrency(affordableAmount)}</span>
                      <p className="text-sm text-gray-500 mt-1">Estimated Home Price</p>
                    </div>
                    
                    <div className="mt-6 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Monthly Income:</span>
                        <span className="text-sm font-medium">{formatCurrency(annualIncome / 12)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">Debt-to-Income Ratio:</span>
                        <span className="text-sm font-medium">41%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Estimated Monthly Payment:</span>
                        <span className="text-sm font-medium">{formatCurrency((affordableAmount - downPayment) * (5.5 / 100 / 12) * Math.pow(1 + (5.5 / 100 / 12), 360) / (Math.pow(1 + (5.5 / 100 / 12), 360) - 1))}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
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
                    
                    <div className="flex justify-between pt-2">
                      <span className="text-gray-700 font-medium">Loan Amount:</span>
                      <span className="font-bold">{formatCurrency(affordableAmount - downPayment)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-xs text-gray-500 mb-4">
                      <strong>Note:</strong> This calculator provides an estimate based on a 30-year fixed VA loan at 5.5% interest. Actual affordability may vary based on credit score, debt-to-income ratio, and other factors.
                    </p>
                    <button className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-md transition-colors duration-300 shadow-sm">
                      Find Homes In Your Range
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
