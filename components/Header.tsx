'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="VA Loan Mortgages Logo" 
                width={262} 
                height={75}
                className="h-auto w-60"
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
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#benefits" className="text-gray-700 hover:text-primary font-medium">
              Benefits
            </Link>
            <Link href="#eligibility" className="text-gray-700 hover:text-primary font-medium">
              Eligibility
            </Link>
            <Link href="#loan-options" className="text-gray-700 hover:text-primary font-medium">
              Loan Options
            </Link>
            <Link href="#calculator" className="text-gray-700 hover:text-primary font-medium">
              Calculator
            </Link>
            <Link href="#blog" className="text-gray-700 hover:text-primary font-medium">
              Resources
            </Link>
            <Link href="#contact" className="btn btn-outline">
              Contact Us
            </Link>
            <Link href="#apply" className="btn btn-primary">
              Apply Now
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="#benefits" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
                Benefits
              </Link>
              <Link href="#eligibility" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
                Eligibility
              </Link>
              <Link href="#loan-options" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
                Loan Options
              </Link>
              <Link href="#calculator" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
                Calculator
              </Link>
              <Link href="#blog" className="text-gray-700 hover:text-primary font-medium" onClick={toggleMenu}>
                Resources
              </Link>
              <Link href="#contact" className="btn btn-outline w-full text-center" onClick={toggleMenu}>
                Contact Us
              </Link>
              <Link href="#apply" className="btn btn-primary w-full text-center" onClick={toggleMenu}>
                Apply Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
