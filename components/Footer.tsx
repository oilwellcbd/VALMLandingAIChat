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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                  <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
                  <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                  <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
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
