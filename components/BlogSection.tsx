'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  featuredImage: string;
  category: string;
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
      category: 'News'
    },
    {
      id: 2,
      title: 'How to Improve Your Chances of VA Loan Approval',
      excerpt: 'While VA loans have more flexible requirements than conventional loans, there are still steps you can take to strengthen your application.',
      date: 'April 8, 2025',
      slug: 'improve-va-loan-approval-chances',
      featuredImage: '/blog-2.jpg',
      category: 'Tips'
    },
    {
      id: 3,
      title: 'VA Loan vs. FHA: Which Is Better for Military Homebuyers?',
      excerpt: 'Both VA and FHA loans offer benefits for homebuyers, but which one makes more sense for veterans? We compare the pros and cons of each.',
      date: 'March 30, 2025',
      slug: 'va-loan-vs-fha',
      featuredImage: '/blog-3.jpg',
      category: 'Guides'
    }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  
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
  
  // Filter posts by category
  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);
  
  // Categories derived from posts
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];

  return (
    <section id="blog" className="section bg-background">
      <div className="container">
        <div className="section-header">
          <h2 className="text-primary mb-2">VA Loan Insights & Updates</h2>
          <p className="text-xl text-gray-600">Expert advice and the latest news on VA loans</p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 m-1 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Blog Posts */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="card overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg">
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                      Blog Image Placeholder
                    </div>
                    <div className="p-6">
                      <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                      <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Link href="/blog" className="btn btn-outline">
                View All Articles
              </Link>
            </div>
          </>
        )}
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-primary/10 rounded-xl p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Updated on VA Loan Changes</h3>
            <p className="text-gray-600 mb-6">
              Get the latest VA loan news, rate updates, and expert advice delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button type="submit" className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
