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
    <section id="calculator" className="section bg-white">
      <div className="container">
        <div className="section-header">
          <h2 className="text-primary mb-2">VA Loan Calculators</h2>
          <p className="text-xl text-gray-600">Plan your VA loan with our easy-to-use tools</p>
        </div>
        
        {/* Calculator Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          <button 
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'payment' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('payment')}
          >
            Payment Calculator
          </button>
          <button 
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'affordability' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-600 hover:text-primary'
            }`}
            onClick={() => setActiveTab('affordability')}
          >
            Affordability Calculator
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="card p-8">
            {activeTab === 'payment' ? (
              <>
                <h3 className="text-2xl font-semibold mb-6">Estimate Your Monthly Payment</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Loan Amount: {formatCurrency(loanAmount)}
                    </label>
                    <input
                      type="range"
                      min="50000"
                      max="1000000"
                      step="10000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$50,000</span>
                      <span>$1,000,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Interest Rate: {interestRate}%
                    </label>
                    <input
                      type="range"
                      min="2"
                      max="10"
                      step="0.125"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>2%</span>
                      <span>10%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Loan Term: {loanTerm} years
                    </label>
                    <div className="flex space-x-4">
                      <button
                        className={`flex-1 py-2 rounded-lg transition-colors ${
                          loanTerm === 15 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setLoanTerm(15)}
                      >
                        15 Years
                      </button>
                      <button
                        className={`flex-1 py-2 rounded-lg transition-colors ${
                          loanTerm === 30 
                            ? 'bg-primary text-white' 
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                        onClick={() => setLoanTerm(30)}
                      >
                        30 Years
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-6">How Much Can You Afford?</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Annual Income: {formatCurrency(annualIncome)}
                    </label>
                    <input
                      type="range"
                      min="30000"
                      max="200000"
                      step="5000"
                      value={annualIncome}
                      onChange={(e) => setAnnualIncome(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$30,000</span>
                      <span>$200,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Monthly Debts: {formatCurrency(monthlyDebts)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="100"
                      value={monthlyDebts}
                      onChange={(e) => setMonthlyDebts(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$3,000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Down Payment: {formatCurrency(downPayment)}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="5000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>$0</span>
                      <span>$100,000</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          
          {/* Results */}
          <div className="card p-8 bg-primary/5">
            {activeTab === 'payment' ? (
              <>
                <h3 className="text-2xl font-semibold mb-6">Your Estimated Payment</h3>
                
                <div className="mb-8">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-primary">{formatCurrency(monthlyPayment)}</span>
                    <span className="text-gray-600 ml-2">per month</span>
                  </div>
                  <p className="text-center text-gray-500 mt-2">Principal and Interest</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Loan Amount:</span>
                    <span className="font-medium">{formatCurrency(loanAmount)}</span>
                  </div>
                  
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">VA Funding Fee:</span>
                    <span className="font-medium">{formatCurrency(fundingFee)}</span>
                  </div>
                  
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Total Loan Amount:</span>
                    <span className="font-medium">{formatCurrency(loanAmount + fundingFee)}</span>
                  </div>
                  
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Interest Rate:</span>
                    <span className="font-medium">{interestRate}%</span>
                  </div>
                  
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Loan Term:</span>
                    <span className="font-medium">{loanTerm} years</span>
                  </div>
                  
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-700 font-medium">Total Cost Over {loanTerm} Years:</span>
                    <span className="font-bold">{formatCurrency(totalCost)}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Note:</strong> This calculator provides an estimate. Actual payment may vary based on exact interest rate, closing costs, and other factors.
                  </p>
                  <button className="btn btn-primary w-full">Get Pre-Approved</button>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-6">Your Affordability Estimate</h3>
                
                <div className="mb-8">
                  <div className="text-center">
                    <span className="text-5xl font-bold text-primary">{formatCurrency(affordableAmount)}</span>
                  </div>
                  <p className="text-center text-gray-500 mt-2">Estimated Home Price</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Annual Income:</span>
                    <span className="font-medium">{formatCurrency(annualIncome)}</span>
                  </div>
                  
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Monthly Income:</span>
                    <span className="font-medium">{formatCurrency(annualIncome / 12)}</span>
                  </div>
                  
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Monthly Debts:</span>
                    <span className="font-medium">{formatCurrency(monthlyDebts)}</span>
                  </div>
                  
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="text-gray-700">Down Payment:</span>
                    <span className="font-medium">{formatCurrency(downPayment)}</span>
                  </div>
                  
                  <div className="flex justify-between pt-2">
                    <span className="text-gray-700 font-medium">Estimated Monthly Payment:</span>
                    <span className="font-bold">{formatCurrency((affordableAmount - downPayment) * (5.5 / 100 / 12) * Math.pow(1 + (5.5 / 100 / 12), 360) / (Math.pow(1 + (5.5 / 100 / 12), 360) - 1))}</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="text-sm text-gray-500 mb-4">
                    <strong>Note:</strong> This calculator provides an estimate based on a 30-year fixed VA loan at 5.5% interest. Actual affordability may vary based on credit score, debt-to-income ratio, and other factors.
                  </p>
                  <button className="btn btn-primary w-full">Find Homes In Your Range</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
