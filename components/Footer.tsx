'use client';

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="mb-4 flex justify-start">
              <Link href="/" className="inline-block">
                <div className="relative w-80 h-20">
                  <Image 
                    src="/images/logo.png" 
                    alt="VA Loan Mortgages Logo" 
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicated to serving those who served our country with the best VA loan experience possible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 - VA Loans */}
          <div>
            <h3 className="text-lg font-semibold mb-4">VA Loans</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  VA Loan Benefits
                </Link>
              </li>
              <li>
                <Link href="#eligibility" className="text-gray-400 hover:text-white transition-colors">
                  Eligibility Requirements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  The Application Process
                </Link>
              </li>
              <li>
                <Link href="#loan-options" className="text-gray-400 hover:text-white transition-colors">
                  VA Loan Types
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Current Rates
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  VA Loan Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  First-Time Homebuyer Tips
                </Link>
              </li>
              <li>
                <Link href="#calculator" className="text-gray-400 hover:text-white transition-colors">
                  VA Loan Calculator
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Common Questions
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(800) 555-LOAN</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@valoansfinance.com</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-400">
                  <p>123 Veterans Way</p>
                  <p>Arlington, VA 22201</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link href="#contact" className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Military Branch Logos */}
        <div className="flex flex-wrap justify-center gap-12 py-10 border-t border-b border-gray-800">
          <div className="relative h-32 w-32">
            <Image 
              src="/images/military/logo-1.png" 
              alt="Army Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-32 w-32">
            <Image 
              src="/images/military/logo-2.png" 
              alt="Navy Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-32 w-32">
            <Image 
              src="/images/military/logo-3.png" 
              alt="Air Force Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-32 w-32">
            <Image 
              src="/images/military/logo-4.png" 
              alt="Marines Logo" 
              fill
              className="object-contain"
            />
          </div>
          <div className="relative h-32 w-32">
            <Image 
              src="/images/military/logo-5.png" 
              alt="Coast Guard Logo" 
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              <p>VA Loans Finance is not affiliated with the Department of Veterans Affairs or any government agency.</p>
              <p>NMLS #12345</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
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
          
          <div className="text-center text-gray-600 text-sm mt-8">
            &copy; {currentYear} VA Loans Finance. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
