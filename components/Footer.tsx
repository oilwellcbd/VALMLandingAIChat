'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      
      {/* Top section with accent line */}
      <div className="relative">
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-6 flex justify-start">
              <Link href="/" className="inline-block">
                <div className="relative w-64 h-16">
                  <Image 
                    src="/images/logo.png" 
                    alt="VA Loan Mortgages Logo" 
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Dedicated to serving those who served our country with the best VA loan experience possible. Our premium financial solutions are designed specifically for military personnel and veterans.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2 - VA Loans */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-5">VA Loans</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#benefits" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75"></span>
                  VA Loan Benefits
                </Link>
              </li>
              <li>
                <Link href="#eligibility" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75"></span>
                  Eligibility Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75"></span>
                  The Application Process
                </Link>
              </li>
              <li>
                <Link href="#loan-options" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75"></span>
                  VA Loan Types
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75"></span>
                  Current Rates
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-5">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 opacity-75"></span>
                  VA Loan Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 opacity-75"></span>
                  First-Time Homebuyer Tips
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 opacity-75"></span>
                  VA Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 opacity-75"></span>
                  Common Questions
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 opacity-75"></span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400 mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">(800) 555-1234</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">info@valoansfinance.com</span>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">
                  <p>123 Veterans Way</p>
                  <p>Arlington, VA 22201</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link href="#contact" className="inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-primary transition-colors duration-300">
                <span>Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Military Branch Logos */}
        <div className="py-10 border-t border-gray-800">
          <h4 className="text-center text-xs uppercase tracking-wider text-gray-500 mb-8">Proudly Serving All Military Branches</h4>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="group relative">
                <div className="relative h-16 w-16 md:h-20 md:w-20 grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100">
                  <Image 
                    src={`/images/military/logo-${num}.png`} 
                    alt={`Military Branch Logo ${num}`} 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-xs mb-4 md:mb-0 max-w-md">
              <p>VA Loans Finance is not affiliated with the Department of Veterans Affairs or any government agency.</p>
              <p className="mt-1">NMLS #12345</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link href="#" className="text-gray-500 hover:text-white transition-colors">
                Licenses
              </Link>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-xs mt-8">
            &copy; {currentYear} VA Loans Finance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
