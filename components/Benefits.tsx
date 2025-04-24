'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BenefitCardProps {
  iconSrc: string;
  title: string;
  description: string;
  index: number;
  stat?: {
    value: string;
    label: string;
  };
}

const BenefitCard = ({ iconSrc, title, description, index, stat }: BenefitCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150); // Increased delay for more noticeable staggered effect
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  // Determine gradient colors based on index
  const gradientColors = index % 3 === 0 
    ? 'from-primary/5 via-primary/10 to-primary/5' 
    : index % 3 === 1 
      ? 'from-secondary/5 via-secondary/10 to-secondary/5' 
      : 'from-blue-400/5 via-blue-500/10 to-blue-400/5';

  // Determine accent colors
  const accentColor = index % 3 === 0 
    ? 'bg-primary' 
    : index % 3 === 1 
      ? 'bg-secondary' 
      : 'bg-blue-500';

  return (
    <div 
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-16'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group h-full relative bg-white p-7 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl overflow-hidden">
        {/* Gradient background that shows on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Glowing accent in corner */}
        <div className={`absolute -top-10 -right-10 w-20 h-20 ${accentColor} rounded-full opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500 transform group-hover:scale-150`}></div>
        
        {/* Accent line */}
        <div className={`absolute top-0 left-0 w-full h-1 ${accentColor} transform origin-left transition-all duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-[0.3]'}`}></div>
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mr-4">
              <div className={`w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:shadow-md transition-all duration-300 border border-gray-100 group-hover:border-${index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'blue-400'}/20`}>
                <div className={`relative w-8 h-8 transform transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                  <Image 
                    src={iconSrc}
                    alt={title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{description}</p>
            </div>
          </div>
          
          {/* Stat highlight if available */}
          {stat && (
            <div className="mt-auto pt-4 border-t border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
              <div className="flex items-center">
                <span className={`text-lg font-bold ${index % 3 === 0 ? 'text-primary' : index % 3 === 1 ? 'text-secondary' : 'text-blue-500'}`}>
                  {stat.value}
                </span>
                <span className="ml-2 text-xs text-gray-500">{stat.label}</span>
              </div>
            </div>
          )}
          
          {/* Learn more link */}
          <div className="mt-auto pt-4">
            <Link 
              href="#" 
              className={`inline-flex items-center text-sm font-medium ${
                index % 3 === 0 ? 'text-primary hover:text-primary-dark' : 
                index % 3 === 1 ? 'text-secondary hover:text-secondary-dark' : 
                'text-blue-500 hover:text-blue-600'
              } transition-colors duration-300`}
            >
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Benefits = () => {
  const benefits = [
    {
      iconSrc: '/images/icons/no-down-payment.svg',
      title: 'No Down Payment',
      description: 'Purchase a home with 0% down in most cases, making homeownership more accessible for veterans and service members.',
      stat: {
        value: '100%',
        label: 'Financing Available'
      }
    },
    {
      iconSrc: '/images/icons/competitive-rates.svg',
      title: 'Competitive Rates',
      description: 'Enjoy lower interest rates compared to conventional loans, saving you thousands of dollars over the life of your mortgage.',
      stat: {
        value: '0.5%',
        label: 'Lower Than Average'
      }
    },
    {
      iconSrc: '/images/icons/no-pmi.svg',
      title: 'No PMI Required',
      description: 'VA loans don\'t require private mortgage insurance, reducing your monthly payment and increasing your purchasing power.',
      stat: {
        value: '$250+',
        label: 'Monthly Savings'
      }
    },
    {
      iconSrc: '/images/icons/faster-closings.svg',
      title: 'Faster Closings',
      description: 'Our streamlined process helps you close quickly and move into your new home sooner with less paperwork and hassle.',
      stat: {
        value: '21',
        label: 'Days Average Close'
      }
    },
    {
      iconSrc: '/images/icons/flexible-credit.svg',
      title: 'Flexible Credit',
      description: 'More forgiving credit requirements than conventional loans, helping more veterans qualify for the home financing they deserve.',
      stat: {
        value: '620+',
        label: 'Minimum Score'
      }
    },
    {
      iconSrc: '/images/icons/limited-closing-costs.svg',
      title: 'Limited Closing Costs',
      description: 'The VA limits certain closing costs and allows sellers to pay all closing costs, reducing your out-of-pocket expenses.',
      stat: {
        value: '4%',
        label: 'Seller Concessions'
      }
    }
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Premium background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary/5 to-transparent rounded-bl-[100px] z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-secondary/5 to-transparent rounded-tr-[100px] z-0"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary opacity-20 animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-6 h-6 rounded-full bg-secondary opacity-10 animate-float-slow"></div>
      <div className="absolute top-1/2 left-3/4 w-3 h-3 rounded-full bg-blue-400 opacity-15 animate-float-reverse"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium tracking-wider uppercase mb-4 border border-primary/20">
            Exclusive Benefits
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">VA Loan Advantages</h2>
          
          {/* Enhanced divider */}
          <div className="relative flex items-center justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
            <div className="absolute w-12 h-1 bg-secondary mx-auto animate-pulse"></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Specialized financial solutions designed exclusively for those who served, offering unique advantages over conventional mortgages
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              iconSrc={benefit.iconSrc}
              title={benefit.title}
              description={benefit.description}
              index={index}
              stat={benefit.stat}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-block relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link 
              href="#eligibility" 
              className="relative px-8 py-4 bg-white rounded-lg leading-none flex items-center divide-x divide-gray-600 shadow-md group-hover:shadow-xl transition-all duration-300"
            >
              <span className="flex items-center space-x-3 pr-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-900 font-semibold">Check Your Eligibility</span>
              </span>
              <span className="pl-6 text-primary group-hover:text-primary-dark transition duration-200">Get Started &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
