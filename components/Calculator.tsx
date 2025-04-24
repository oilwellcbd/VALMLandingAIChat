'use client';

import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Calculator = () => {
  // Payment Calculator State
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  
  // Affordability Calculator State
  const [income, setIncome] = useState(5000);
  const [debts, setDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(20000);
  const [affordableAmount, setAffordableAmount] = useState(0);
  
  // Animation state
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
    calculatePayment();
    calculateAffordability();
  }, []);

  const calculatePayment = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  const calculateAffordability = () => {
    // Using the 28/36 rule
    // 28% of monthly income for housing
    // 36% of monthly income for all debt (including housing)
    
    const maxMonthlyPayment = Math.min(income * 0.28, income * 0.36 - debts);
    
    // Reverse the mortgage payment formula to find the loan amount
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    let affordable;
    if (monthlyRate === 0) {
      affordable = maxMonthlyPayment * numberOfPayments;
    } else {
      affordable = maxMonthlyPayment * ((Math.pow(1 + monthlyRate, numberOfPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)));
    }
    
    // Add down payment to get total affordable amount
    affordable += downPayment;
    
    setAffordableAmount(affordable);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<number>>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setter(value);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // Floating elements for animation
  const floatingElements = [
    { size: 'w-12 h-12', position: 'top-10 right-[10%]', shape: 'rounded-lg', rotation: 'rotate-12', animation: 'animate-float' },
    { size: 'w-8 h-8', position: 'top-32 left-[5%]', shape: 'rounded-full', rotation: '-rotate-6', animation: 'animate-float-slow' },
    { size: 'w-10 h-10', position: 'bottom-20 right-[15%]', shape: 'rounded-lg', rotation: 'rotate-45', animation: 'animate-float-reverse' },
    { size: 'w-6 h-6', position: 'bottom-40 left-[20%]', shape: 'rounded-full', rotation: 'rotate-12', animation: 'animate-float' },
  ];

  return (
    <section id="calculator" className="py-16 relative overflow-hidden">
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
            Financial Tools
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loan Calculators</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Use our tools to estimate your monthly payments and determine how much home you can afford.</p>
          
          {/* Premium divider */}
          <div className="flex items-center justify-center">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary mx-1"></div>
            <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-primary-light"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary-light mx-1"></div>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary-light/50 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tab.Group onChange={(index) => setActiveTab(index)}>
            <Tab.List className="flex p-1 space-x-2 bg-white rounded-xl shadow-md mb-8 border border-primary/10">
              {['Payment Calculator', 'Affordability Calculator'].map((category, idx: number) => (
                <Tab
                  key={idx}
                  className={({ selected }: { selected: boolean }) =>
                    classNames(
                      'w-full py-3 text-sm font-medium rounded-lg transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-primary/40 ring-offset-2 ring-offset-primary/10',
                      selected
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-md'
                        : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                    )
                  }
                  onMouseEnter={() => setIsHovering(idx)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <i className={`fas ${idx === 0 ? 'fa-calculator' : 'fa-home'} ${isHovering === idx && activeTab !== idx ? 'animate-bounce-subtle' : ''}`}></i>
                    <span>{category}</span>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            
            <Tab.Panels className="mt-2">
              {/* Payment Calculator Panel */}
              <Tab.Panel className={classNames(
                'bg-white rounded-xl p-6 shadow-lg border border-primary/10',
                'focus:outline-none focus:ring-2 focus:ring-primary/40 ring-offset-2 ring-offset-primary/10',
                'transform transition-all duration-500',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}>
                <div className="relative">
                  {/* Decorative corner accents */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg"></div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg"></div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mr-2">
                          <i className="fas fa-sliders-h text-xs"></i>
                        </div>
                        Input Parameters
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                              type="number"
                              value={loanAmount}
                              onChange={(e) => handleInputChange(e, setLoanAmount)}
                              onBlur={calculatePayment}
                              className="block w-full pl-7 pr-12 py-2 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary"
                              placeholder="0"
                            />
                          </div>
                          <div className="mt-1 flex justify-between">
                            <span className="text-xs text-gray-500">Min: $50,000</span>
                            <span className="text-xs text-gray-500">Max: $1,000,000</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                          <div className="relative">
                            <input
                              type="number"
                              value={interestRate}
                              onChange={(e) => handleInputChange(e, setInterestRate)}
                              onBlur={calculatePayment}
                              className="block w-full pr-12 py-2 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary"
                              placeholder="0"
                              step="0.1"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">%</span>
                            </div>
                          </div>
                          <div className="mt-1 flex justify-between">
                            <span className="text-xs text-gray-500">Current Avg: 3.5%</span>
                            <span className="text-xs text-gray-500">VA Min: 2.25%</span>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (years)</label>
                          <select
                            value={loanTerm}
                            onChange={(e) => {
                              setLoanTerm(parseInt(e.target.value));
                              calculatePayment();
                            }}
                            className="block w-full py-2 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary"
                          >
                            <option value={15}>15 years</option>
                            <option value={20}>20 years</option>
                            <option value={30}>30 years</option>
                          </select>
                        </div>
                        
                        <button
                          onClick={calculatePayment}
                          className="w-full py-2 px-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:from-primary-dark hover:to-primary transition duration-200 shadow-md flex items-center justify-center space-x-2 group"
                        >
                          <i className="fas fa-calculator group-hover:animate-bounce-subtle"></i>
                          <span>Calculate Payment</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-primary/10 shadow-inner flex flex-col justify-center items-center relative overflow-hidden">
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px]"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-[100px]"></div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary-dark text-white flex items-center justify-center mr-2">
                          <i className="fas fa-chart-line text-xs"></i>
                        </div>
                        Monthly Payment
                      </h3>
                      
                      <div className="text-5xl font-bold text-primary mb-4 relative">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full"></div>
                        {formatCurrency(monthlyPayment)}
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-6">Estimated monthly payment</div>
                      
                      <div className="w-full space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Principal & Interest</span>
                          <span className="font-medium">{formatCurrency(monthlyPayment)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Property Taxes (est.)</span>
                          <span className="font-medium">{formatCurrency(loanAmount * 0.015 / 12)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Insurance (est.)</span>
                          <span className="font-medium">{formatCurrency(loanAmount * 0.005 / 12)}</span>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-2"></div>
                        <div className="flex justify-between text-sm font-semibold">
                          <span className="text-gray-800">Total Payment</span>
                          <span>{formatCurrency(monthlyPayment + (loanAmount * 0.015 / 12) + (loanAmount * 0.005 / 12))}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              
              {/* Affordability Calculator Panel */}
              <Tab.Panel className={classNames(
                'bg-white rounded-xl p-6 shadow-lg border border-primary/10',
                'focus:outline-none focus:ring-2 focus:ring-primary/40 ring-offset-2 ring-offset-primary/10',
                'transform transition-all duration-500',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}>
                <div className="relative">
                  {/* Decorative corner accents */}
                  <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg"></div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
                  <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg"></div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg"></div>
                
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mr-2">
                          <i className="fas fa-sliders-h text-xs"></i>
                        </div>
                        Input Parameters
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                              type="number"
                              value={income}
                              onChange={(e) => handleInputChange(e, setIncome)}
                              onBlur={calculateAffordability}
                              className="block w-full pl-7 pr-12 py-2 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary"
                              placeholder="0"
                            />
                          </div>
                          <div className="mt-1 text-xs text-gray-500">After-tax monthly income</div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Debts</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                              type="number"
                              value={debts}
                              onChange={(e) => handleInputChange(e, setDebts)}
                              onBlur={calculateAffordability}
                              className="block w-full pl-7 pr-12 py-2 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary"
                              placeholder="0"
                            />
                          </div>
                          <div className="mt-1 text-xs text-gray-500">Car payments, credit cards, student loans, etc.</div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment</label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                              type="number"
                              value={downPayment}
                              onChange={(e) => handleInputChange(e, setDownPayment)}
                              onBlur={calculateAffordability}
                              className="block w-full pl-7 pr-12 py-2 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary"
                              placeholder="0"
                            />
                          </div>
                          <div className="mt-1 text-xs text-gray-500">VA loans often require 0% down payment</div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Interest Rate (%)</label>
                          <div className="relative">
                            <input
                              type="number"
                              value={interestRate}
                              onChange={(e) => handleInputChange(e, setInterestRate)}
                              onBlur={calculateAffordability}
                              className="block w-full pr-12 py-2 border border-primary/20 rounded-lg focus:ring-primary focus:border-primary"
                              placeholder="0"
                              step="0.1"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">%</span>
                            </div>
                          </div>
                        </div>
                        
                        <button
                          onClick={calculateAffordability}
                          className="w-full py-2 px-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg hover:from-primary-dark hover:to-primary transition duration-200 shadow-md flex items-center justify-center space-x-2 group"
                        >
                          <i className="fas fa-home group-hover:animate-bounce-subtle"></i>
                          <span>Calculate Affordability</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-primary/10 shadow-inner flex flex-col justify-center items-center relative overflow-hidden">
                      {/* Decorative background elements */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-[100px]"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-secondary/5 to-transparent rounded-tr-[100px]"></div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-secondary-dark text-white flex items-center justify-center mr-2">
                          <i className="fas fa-home text-xs"></i>
                        </div>
                        Home Price Range
                      </h3>
                      
                      <div className="text-5xl font-bold text-primary mb-4 relative">
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full"></div>
                        {formatCurrency(affordableAmount)}
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-6">Maximum affordable home price</div>
                      
                      <div className="w-full space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Loan Amount</span>
                          <span className="font-medium">{formatCurrency(affordableAmount - downPayment)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Down Payment</span>
                          <span className="font-medium">{formatCurrency(downPayment)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Monthly Payment</span>
                          <span className="font-medium">{formatCurrency(income * 0.28)}</span>
                        </div>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-2"></div>
                        <div className="flex justify-between text-sm font-semibold">
                          <span className="text-gray-800">Debt-to-Income Ratio</span>
                          <span>{Math.round(((income * 0.28) + debts) / income * 100)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
