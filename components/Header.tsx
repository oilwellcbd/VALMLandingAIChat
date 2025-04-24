'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="VA Loan Mortgages Logo" 
                width={262} 
                height={75}
                className={`h-auto transition-all duration-300 ${isScrolled ? 'w-48' : 'w-60'}`}
                priority
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-1 mr-6">
              {['Benefits', 'Eligibility', 'Loan Options', 'Calculator', 'Resources'].map((item, index) => (
                <Link 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                href="#contact" 
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary border border-transparent hover:border-gray-200 rounded-md transition-all duration-300"
              >
                Contact
              </Link>
              <Link 
                href="#apply" 
                className="px-4 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary-dark rounded-md transition-all duration-300 shadow-sm hover:shadow"
              >
                Apply Now
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-4">
              {['Benefits', 'Eligibility', 'Loan Options', 'Calculator', 'Resources'].map((item, index) => (
                <Link 
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-gray-700 hover:text-primary font-medium text-sm flex items-center" 
                  onClick={toggleMenu}
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75"></span>
                  {item}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-100 grid grid-cols-2 gap-3">
                <Link 
                  href="#contact" 
                  className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-md text-center" 
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link 
                  href="#apply" 
                  className="px-4 py-2 text-sm font-medium text-white bg-secondary rounded-md text-center" 
                  onClick={toggleMenu}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
