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
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2 - VA Loans */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              VA Loans
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Loans & VA Refinancing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  How To Use VA Loan Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  How Credit Affects VA Loans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Loan Eligibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Certificate Of Eligibility (COE)
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  The VA Loan Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Loan FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - VA Refinance */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              VA Refinance
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Loan Refinancing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Refinancing Saves You Money
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Loan Streamline Refinance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA Cash Out Refinance Loans
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  VA IRRRL
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-primary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Phone</p>
                  <a href="tel:(866) 216-3577" className="text-gray-300 text-sm hover:text-primary transition-colors">(866) 216-3577</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Email</p>
                  <a href="mailto:info@valoansfinance.com" className="text-gray-300 text-sm hover:text-primary transition-colors">info@valoansfinance.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Office Hours</p>
                  <p className="text-gray-300 text-sm">Mon-Fri: 9:00 AM - 5:00 PM EST</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Main Office</p>
                  <p>VA Loans Finance</p>
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
