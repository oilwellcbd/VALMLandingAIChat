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
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40 animate-float-slow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:(866) 216-3577" className="text-sm flex items-center hover:text-primary transition-colors group">
                <div className="relative mr-2">
                  <i className="fas fa-phone-alt text-primary group-hover:opacity-0 transition-opacity duration-300"></i>
                  <i className="fas fa-phone-volume absolute inset-0 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
                <span className="relative overflow-hidden">
                  <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">(866) 216-3577</span>
                  <span className="absolute left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">(866) 216-3577</span>
                </span>
              </a>
              <a href="mailto:info@valoansfinance.com" className="text-sm flex items-center hover:text-primary transition-colors group">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <span className="relative overflow-hidden">
                  <span className="inline-block group-hover:-translate-y-full transition-transform duration-300">info@valoansfinance.com</span>
                  <span className="absolute left-0 inline-block translate-y-full group-hover:translate-y-0 transition-transform duration-300">Email Us</span>
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="relative w-8 h-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/100 rounded-full transition-colors duration-300"></div>
                <i className="fab fa-facebook-f text-sm text-white group-hover:text-white relative z-10"></i>
              </a>
              <a href="#" className="relative w-8 h-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/100 rounded-full transition-colors duration-300"></div>
                <i className="fab fa-twitter text-sm text-white group-hover:text-white relative z-10"></i>
              </a>
              <a href="#" className="relative w-8 h-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/100 rounded-full transition-colors duration-300"></div>
                <i className="fab fa-linkedin-in text-sm text-white group-hover:text-white relative z-10"></i>
              </a>
              <a href="#" className="relative w-8 h-8 flex items-center justify-center group">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/100 rounded-full transition-colors duration-300"></div>
                <i className="fab fa-instagram text-sm text-white group-hover:text-white relative z-10"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main header with glass morphism effect */}
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 backdrop-blur-md bg-white/90 shadow-lg' 
          : 'py-4 bg-white'
      }`}>
        {/* Animated accent line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-gradient"></div>
        
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with hover effect */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-secondary/5 group-hover:to-primary/5 rounded-lg blur-md transition-all duration-500 group-hover:duration-200"></div>
                <Image 
                  src="/images/logo.png" 
                  alt="VA Loan Mortgages Logo" 
                  width={262} 
                  height={75}
                  className={`h-auto transition-all duration-500 relative ${isScrolled ? 'w-48' : 'w-60'}`}
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu button with animation */}
            <button 
              className="md:hidden flex items-center justify-center w-10 h-10 relative group"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gray-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative">
                <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-800 mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>

            {/* Desktop Navigation with animated underline */}
            <nav className="hidden md:flex items-center">
              <div className="flex space-x-1 mr-6">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary group overflow-hidden"
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink('')}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                    
                    {/* Hover background effect */}
                    <span className="absolute inset-0 bg-primary/5 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    
                    {/* Animated dot indicator */}
                    {activeLink === link.name && (
                      <span className="absolute top-1 right-1 w-1 h-1 rounded-full bg-primary"></span>
                    )}
                  </Link>
                ))}
              </div>
              <div className="flex items-center space-x-3">
                <a 
                  href="tel:(866) 216-3577" 
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-white border border-transparent overflow-hidden group"
                >
                  {/* Button background animation */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  
                  <div className="relative z-10 flex items-center">
                    <i className="fas fa-phone-alt mr-2 text-primary group-hover:text-white transition-colors duration-300"></i>
                    <span className="group-hover:text-white transition-colors duration-300">(866) 216-3577</span>
                  </div>
                </a>
                <Link 
                  href="#apply" 
                  className="relative px-4 py-2 text-sm font-medium text-white overflow-hidden group"
                >
                  {/* Button background animation */}
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary-dark"></span>
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary-dark to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Button shine effect */}
                  <span className="absolute inset-0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></span>
                  
                  <span className="relative z-10 flex items-center">
                    <span>Apply Now</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                </Link>
              </div>
            </nav>
          </div>

          {/* Mobile Navigation with animations */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fade-in-down">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <Link 
                    key={index}
                    href={link.href} 
                    className="text-gray-700 hover:text-primary font-medium text-sm flex items-center transform hover:translate-x-2 transition-transform duration-300" 
                    onClick={toggleMenu}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-75"></span>
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                  <a 
                    href="tel:(866) 216-3577" 
                    className="flex items-center text-gray-700 hover:text-primary font-medium text-sm transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <i className="fas fa-phone-alt mr-2 text-primary"></i>
                    (866) 216-3577
                  </a>
                  <a 
                    href="mailto:info@valoansfinance.com" 
                    className="flex items-center text-gray-700 hover:text-primary font-medium text-sm transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <i className="fas fa-envelope mr-2 text-primary"></i>
                    info@valoansfinance.com
                  </a>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <Link 
                      href="#contact" 
                      className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded-md text-center hover:bg-gray-50 transition-colors duration-300" 
                      onClick={toggleMenu}
                    >
                      Contact
                    </Link>
                    <Link 
                      href="#apply" 
                      className="px-4 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary-dark rounded-md text-center transition-colors duration-300" 
                      onClick={toggleMenu}
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
