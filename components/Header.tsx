'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Loan Options', href: '#loan-options' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Resources', href: '#resources' },
  ];

  return (
    <>
      {/* Single sticky header with combined top bar and main navigation */}
      <header className="sticky top-0 z-50 shadow-md">
        {/* Top section with contact info and social icons */}
        <div className="bg-gray-900 text-white py-2 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[url('/images/backgrounds/neural-pattern.svg')] bg-repeat opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-6">
                {/* Phone with icon */}
                <a href="tel:(866) 216-3577" className="text-sm flex items-center hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="mr-2">Call Us</span>
                  <span className="font-medium">(866) 216-3577</span>
                </a>
                
                {/* Email with icon */}
                <a href="mailto:info@valoansfinance.com" className="text-sm flex items-center hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="mr-2">Email Us</span>
                  <span className="font-medium">info@valoansfinance.com</span>
                </a>
                
                {/* Hours with icon */}
                <div className="text-sm flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="mr-2">Business Hours</span>
                  <span className="font-medium">Mon-Fri: 9:00 AM - 5:00 PM EST</span>
                </div>
              </div>
              
              {/* Social media icons */}
              <div className="flex items-center space-x-3">
                <a href="#" className="w-7 h-7 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[#1877F2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4 text-gray-300 group-hover:text-white relative z-10">
                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[#1DA1F2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-gray-300 group-hover:text-white relative z-10">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[#0A66C2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-gray-300 group-hover:text-white relative z-10">
                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[#E4405F] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-gray-300 group-hover:text-white relative z-10">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </a>
                <a href="#" className="w-7 h-7 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-[#FF0000] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4 text-gray-300 group-hover:text-white relative z-10">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="relative">
                <div className="relative w-48 h-12">
                  <Image 
                    src="/images/logo.png" 
                    alt="VA Loan Mortgages Logo" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <div className="flex items-center space-x-1">
                  {navLinks.map((link, index) => {
                    const isActive = activeLink === link.href || (link.href === '/' && activeLink === '');
                    return (
                      <Link 
                        key={index}
                        href={link.href} 
                        className={`relative px-3 py-2 text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                        onClick={() => setActiveLink(link.href)}
                      >
                        <span className="relative z-10">{link.name}</span>
                        {isActive && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></span>
                        )}
                      </Link>
                    );
                  })}
                  
                  {/* Apply Now button */}
                  <Link 
                    href="#apply" 
                    className="ml-4 px-4 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary-dark rounded transition-colors duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
              </nav>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden flex items-center justify-center w-10 h-10 relative"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="relative">
                  <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="text-gray-700 hover:text-primary font-medium text-sm" 
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100">
                  <Link 
                    href="#apply" 
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary-dark rounded transition-colors duration-300" 
                    onClick={toggleMenu}
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
