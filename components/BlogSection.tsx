'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage: string;
  category: string;
  readTime?: string;
}

const BlogSection = () => {
  // In a real implementation, these would be fetched from WordPress API
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: '2025 VA Loan Limits Update: What Veterans Need to Know',
      excerpt: 'The Department of Veterans Affairs has announced new loan limits for 2025. Learn how these changes might affect your home buying plans.',
      date: 'April 15, 2025',
      slug: 'va-loan-limits-2025',
      featuredImage: '/blog-1.jpg',
      category: 'News',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'How to Improve Your Chances of VA Loan Approval',
      excerpt: 'While VA loans have more flexible requirements than conventional loans, there are still steps you can take to strengthen your application.',
      date: 'April 8, 2025',
      slug: 'improve-va-loan-approval-chances',
      featuredImage: '/blog-2.jpg',
      category: 'Tips',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'VA Loan vs. FHA: Which Is Better for Military Homebuyers?',
      excerpt: 'Both VA and FHA loans offer benefits for homebuyers, but which one makes more sense for veterans? We compare the pros and cons of each.',
      date: 'March 30, 2025',
      slug: 'va-loan-vs-fha',
      featuredImage: '/blog-3.jpg',
      category: 'Guides',
      readTime: '6 min read'
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [animating, setAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const postsContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Function to fetch posts from WordPress API (would be implemented in production)
  const fetchPosts = async () => {
    // This would be replaced with actual WordPress API call
    /*
    setIsLoading(true);
    try {
      const response = await fetch('/api/wordpress/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setIsLoading(false);
    }
    */
  };
  
  // Handle category change with animation
  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }, 300);
  };
  
  // Filter posts by category
  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);
  
  // Categories derived from posts
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

  // Generate placeholder gradient colors
  const getGradientColors = (index: number) => {
    const gradients = [
      'from-primary to-primary-dark',
      'from-primary-dark to-primary',
      'from-primary to-secondary',
      'from-secondary to-primary',
      'from-primary-dark to-secondary'
    ];
    return gradients[index % gradients.length];
  };

  // Floating elements for animation
  const floatingElements = [
    { size: 'w-12 h-12', position: 'top-10 right-[10%]', shape: 'rounded-lg', rotation: 'rotate-12', animation: 'animate-float' },
    { size: 'w-8 h-8', position: 'top-32 left-[5%]', shape: 'rounded-full', rotation: '-rotate-6', animation: 'animate-float-slow' },
    { size: 'w-10 h-10', position: 'bottom-20 right-[15%]', shape: 'rounded-lg', rotation: 'rotate-45', animation: 'animate-float-reverse' },
    { size: 'w-6 h-6', position: 'bottom-40 left-[20%]', shape: 'rounded-full', rotation: 'rotate-12', animation: 'animate-float' },
  ];

  return (
    <section id="blog" className="py-16 relative overflow-hidden">
      {/* Dynamic background with neural network pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50" />
        <div className="absolute inset-0 bg-[url('/images/backgrounds/neural-pattern.svg')] bg-repeat opacity-5" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary/5 to-primary-light/5 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-secondary/5 to-secondary-light/5 blur-3xl animate-float"></div>
        
        {/* Floating decorative elements */}
        {floatingElements.map((el, index) => (
          <div 
            key={index}
            className={`absolute ${el.size} ${el.position} ${el.shape} border-2 border-primary/10 ${el.rotation} ${el.animation} hidden lg:block`}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with premium divider */}
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
            Expert Insights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VA Loan Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Stay informed with the latest news, tips, and guides about VA loans and the homebuying process.</p>
          
          {/* Premium divider */}
          <div className="flex items-center justify-center">
            <div className="h-0.5 w-12 bg-gradient-to-r from-transparent to-primary/50"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary mx-1"></div>
            <div className="h-0.5 w-24 bg-gradient-to-r from-primary to-primary-light"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-primary-light mx-1"></div>
            <div className="h-0.5 w-12 bg-gradient-to-r from-primary-light/50 to-transparent"></div>
          </div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full shadow-md flex space-x-1 border border-primary/10">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeCategory === category 
                    ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-sm' 
                    : 'text-gray-600 hover:bg-primary/5'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog posts */}
        {isLoading ? (
          <div className="text-center py-10">
            <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : (
          <>
            <div 
              ref={postsContainerRef}
              className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <div 
                    key={post.id}
                    className={`transition-all duration-700 ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredPost(post.id)}
                    onMouseLeave={() => setHoveredPost(null)}
                  >
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-primary/10 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative">
                      {/* Decorative corner accents - only visible on hover */}
                      <div className={`absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-primary/20 rounded-tl-lg transition-opacity duration-300 ${hoveredPost === post.id ? 'opacity-100' : 'opacity-0'}`}></div>
                      <div className={`absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary/20 rounded-tr-lg transition-opacity duration-300 ${hoveredPost === post.id ? 'opacity-100' : 'opacity-0'}`}></div>
                      <div className={`absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary/20 rounded-bl-lg transition-opacity duration-300 ${hoveredPost === post.id ? 'opacity-100' : 'opacity-0'}`}></div>
                      <div className={`absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-primary/20 rounded-br-lg transition-opacity duration-300 ${hoveredPost === post.id ? 'opacity-100' : 'opacity-0'}`}></div>
                      
                      {/* Featured image */}
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10"></div>
                        
                        {/* Placeholder gradient while image loads */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                        
                        {/* Category badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary shadow-sm border border-primary/10">
                            {post.category}
                          </div>
                        </div>
                        
                        {/* Read time badge */}
                        {post.readTime && (
                          <div className="absolute top-4 right-4 z-10">
                            <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 shadow-sm border border-gray-100 flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {post.readTime}
                            </div>
                          </div>
                        )}
                        
                        <Image 
                          src={post.featuredImage || `/images/blog/${post.slug}.jpg`}
                          alt={post.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="text-xs text-gray-500 mb-2">{post.date}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-primary font-medium text-sm group/link"
                        >
                          <span className="mr-2 transition-all duration-300 group-hover/link:mr-3">Read Article</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* View all link */}
              <div className="text-center mt-12">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center px-6 py-3 border-2 border-primary/20 text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-md group"
                >
                  <span className="mr-2">View All Articles</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </>
        )}
        
        {/* Newsletter Signup with premium design */}
        <div className="relative mt-24 rounded-2xl overflow-hidden group">
          {/* Animated glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-2xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000 animate-glow"></div>
          
          <div className="relative bg-white rounded-xl border border-primary/10 overflow-hidden">
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-primary/20 rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-primary/20 rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-primary/20 rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-primary/20 rounded-br-lg"></div>
            
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
            <div className="absolute inset-0 bg-[url('/images/backgrounds/pattern-light.svg')] bg-repeat opacity-10"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-12 h-12 rounded-lg border-2 border-primary/10 rotate-12 animate-float hidden lg:block"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full border-2 border-secondary/10 animate-float-reverse hidden lg:block"></div>
            
            <div className="relative p-10 md:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center px-4 py-1.5 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary text-sm font-medium mb-4 border border-primary/20">
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                  Stay Informed
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get VA Loan Updates & Expert Advice</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Join thousands of veterans who receive our newsletter with the latest VA loan news, rate updates, and expert advice delivered directly to your inbox.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input 
                      type="email" 
                      placeholder="Your email address" 
                      className="w-full pl-12 pr-4 py-4 rounded-lg border border-primary/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent"
                      required
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="px-6 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded-lg shadow-md hover:from-primary-dark hover:to-primary transition-all duration-300 whitespace-nowrap flex items-center justify-center space-x-2 group"
                  >
                    <span>Subscribe Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
                
                <p className="text-gray-500 text-sm mt-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
