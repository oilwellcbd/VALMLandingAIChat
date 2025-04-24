import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This would be replaced with actual WordPress API call in production
async function getBlogPosts() {
  // Mock data for development
  const posts = [
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
    },
    {
      id: 4,
      title: 'Understanding the VA Funding Fee: 2025 Updates',
      excerpt: 'The VA funding fee is a one-time payment that helps offset the cost of the VA loan program. Learn about the latest changes and who qualifies for exemptions.',
      date: 'March 22, 2025',
      slug: 'understanding-va-funding-fee',
      featuredImage: '/blog-1.jpg',
      category: 'News'
    },
    {
      id: 5,
      title: '5 Common VA Loan Myths Debunked',
      excerpt: 'There are many misconceptions about VA loans that might prevent veterans from using this valuable benefit. Let\'s set the record straight.',
      date: 'March 15, 2025',
      slug: 'va-loan-myths-debunked',
      featuredImage: '/blog-2.jpg',
      category: 'Tips'
    },
    {
      id: 6,
      title: 'How to Use Your VA Loan Benefit Multiple Times',
      excerpt: 'Did you know you can use your VA loan benefit more than once? Learn how to restore and reuse your entitlement for multiple home purchases.',
      date: 'March 8, 2025',
      slug: 'reusing-va-loan-benefit',
      featuredImage: '/blog-3.jpg',
      category: 'Guides'
    }
  ];
  
  return posts;
}

export const metadata = {
  title: 'Blog - VA Loans Finance',
  description: 'Expert advice and the latest news on VA loans, eligibility, benefits, and the homebuying process for veterans and military families.',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];
  
  return (
    <>
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">VA Loan Insights & Resources</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, tips, and the latest news to help you navigate your VA loan journey with confidence.
            </p>
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <div className="relative rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 relative h-80 w-full mb-6">
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                    Featured Blog Image Placeholder
                  </div>
                </div>
                <div className="lg:col-span-2 bg-primary p-8 lg:p-12 flex items-center">
                  <div className="text-white">
                    <div className="inline-block bg-white/20 text-white rounded-full px-3 py-1 text-sm mb-4">
                      {posts[0].category}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{posts[0].title}</h2>
                    <p className="mb-6 opacity-90">{posts[0].excerpt}</p>
                    <div className="mb-6 text-sm opacity-80">{posts[0].date}</div>
                    <Link 
                      href={`/blog/${posts[0].slug}`} 
                      className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center mb-12">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category === 'All' ? '/blog' : `/blog/category/${category.toLowerCase()}`}
                className="px-4 py-2 m-1 rounded-full transition-colors bg-white text-gray-700 hover:bg-primary hover:text-white"
              >
                {category}
              </Link>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.id} className="card overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                <div className="relative h-48 w-full">
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                    Blog Image Placeholder
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-gray-500 text-sm mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-primary font-medium hover:underline">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="inline-flex rounded-md shadow-sm">
              <span className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-lg cursor-not-allowed">
                Previous
              </span>
              <a href="#" className="px-4 py-2 text-sm font-medium text-primary bg-white border-t border-b border-gray-300 hover:bg-gray-100">
                1
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300 hover:bg-gray-100 hover:text-primary">
                2
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border-t border-b border-gray-300 hover:bg-gray-100 hover:text-primary">
                3
              </a>
              <a href="#" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-primary">
                Next
              </a>
            </div>
          </div>
          
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
      </main>
      
      <Footer />
    </>
  );
}
