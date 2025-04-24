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
      {/* Top contact bar with animated background */}
      <div className="relative bg-gray-900 text-white py-2 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[url('/images/backgrounds/neural-pattern.svg')] bg-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              {/* Phone with better styling */}
              <a href="tel:(866) 216-3577" className="text-sm flex items-center hover:text-primary transition-colors">
                <span className="mr-2">Call Us</span>
                <span className="font-medium">(866) 216-3577</span>
              </a>
              
              {/* Email with better styling */}
              <a href="mailto:info@valoansfinance.com" className="text-sm flex items-center hover:text-primary transition-colors">
                <span className="mr-2">Email Us</span>
                <span className="font-medium">info@valoansfinance.com</span>
              </a>
              
              {/* Hours of operation */}
              <div className="text-sm flex items-center">
                <span className="mr-2">Business Hours</span>
                <span className="font-medium">Mon-Fri: 9:00 AM - 5:00 PM EST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <header className="bg-white shadow-sm">
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
                
                <div className="flex items-center ml-4 space-x-4">
                  <a 
                    href="tel:(866) 216-3577" 
                    className="text-sm font-medium text-gray-700"
                  >
                    (866) 216-3577
                  </a>
                  
                  <Link 
                    href="#apply" 
                    className="px-4 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary-dark rounded transition-colors duration-300"
                  >
                    Apply Now
                  </Link>
                </div>
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
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
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
                <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                  <a 
                    href="tel:(866) 216-3577" 
                    className="flex items-center text-gray-700 hover:text-primary font-medium text-sm"
                  >
                    (866) 216-3577
                  </a>
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
