'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface BenefitCardProps {
  iconSrc: string;
  title: string;
  description: string;
  index: number;
}

const BenefitCard = ({ iconSrc, title, description, index }: BenefitCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
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

  return (
    <div 
      ref={cardRef}
      className={`relative transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="group relative bg-white p-6 rounded-lg border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden">
        {/* Accent line */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-primary to-primary-light' : 'from-secondary to-secondary-light'} transform origin-left transition-all duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-[0.3]'}`}></div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center">
              <div className="relative w-6 h-6">
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
            <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
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
      description: 'Purchase a home with 0% down in most cases, making homeownership more accessible.'
    },
    {
      iconSrc: '/images/icons/competitive-rates.svg',
      title: 'Competitive Rates',
      description: 'Enjoy lower interest rates compared to conventional loans, saving you money over time.'
    },
    {
      iconSrc: '/images/icons/no-pmi.svg',
      title: 'No PMI Required',
      description: 'VA loans don\'t require private mortgage insurance, reducing your monthly payment.'
    },
    {
      iconSrc: '/images/icons/faster-closings.svg',
      title: 'Faster Closings',
      description: 'Our streamlined process helps you close quickly and move into your new home sooner.'
    },
    {
      iconSrc: '/images/icons/flexible-credit.svg',
      title: 'Flexible Credit',
      description: 'More forgiving credit requirements than conventional loans, helping more veterans qualify.'
    },
    {
      iconSrc: '/images/icons/limited-closing-costs.svg',
      title: 'Limited Closing Costs',
      description: 'The VA limits certain closing costs and allows sellers to pay all closing costs.'
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Exclusive Benefits
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Loan Advantages</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Specialized financial solutions designed for those who served</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              iconSrc={benefit.iconSrc}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
