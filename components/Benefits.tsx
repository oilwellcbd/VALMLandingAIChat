'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface BenefitCardProps {
  iconSrc: string;
  title: string;
  description: string;
  delay?: number;
}

const BenefitCard = ({ iconSrc, title, description, delay = 0 }: BenefitCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
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
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`card p-6 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
        <div className="relative w-10 h-10">
          <Image 
            src={iconSrc}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
    <section id="benefits" className="section bg-background">
      <div className="container">
        <div className="section-header">
          <h2 className="text-primary mb-2">VA Loan Benefits</h2>
          <p className="text-xl text-gray-600">Exclusive advantages for those who served</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              iconSrc={benefit.iconSrc}
              title={benefit.title}
              description={benefit.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
