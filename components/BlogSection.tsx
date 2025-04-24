'use client';

import { useState, useEffect, useRef } from 'react';
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
  const postsContainerRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/hero-pattern.svg')] bg-repeat opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-medium tracking-wider uppercase mb-3">
            Expert Insights
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">VA Loan Insights & Updates</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-600">Expert advice and the latest news to guide your VA loan journey</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-white p-1.5 rounded-full shadow-md flex space-x-1 border border-gray-100">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Blog Posts */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div 
              ref={postsContainerRef}
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300 ${
                animating ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {filteredPosts.map((post, index) => (
                <article 
                  key={post.id} 
                  className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 bg-white border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors(index)} opacity-80`}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center p-6">
                        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                          {post.category}
                        </span>
                        <h3 className="text-xl font-bold mb-1">{post.title.substring(0, 30)}...</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {post.readTime}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-primary font-medium group-hover:text-primary-dark transition-colors"
                    >
                      Read Article
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors duration-300"
              >
                View All Articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        )}
        
        {/* Decorative divider */}
        <div className="relative my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20h-1M5 4h10a2 2 0 012 2v1M5 4a2 2 0 00-2 2v12a2 2 0 002 2h1M12 11v5M9 14h6" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="relative mt-16 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/images/backgrounds/pattern-light.svg')] bg-repeat opacity-10"></div>
          
          <div className="relative p-10 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated on VA Loan Changes</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Get the latest VA loan news, rate updates, and expert advice delivered directly to your inbox. Join thousands of veterans who trust our insights.
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
                    className="w-full pl-12 pr-4 py-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="px-6 py-4 bg-white text-primary font-medium rounded-lg shadow-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              
              <p className="text-white/60 text-sm mt-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
