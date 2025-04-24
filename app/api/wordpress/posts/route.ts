import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const wpApiUrl = process.env.WORDPRESS_API_URL || 'https://valoansfinance.com/wp-json/wp/v2';
    
    // Fetch posts from WordPress
    const response = await fetch(`${wpApiUrl}/posts?_embed&per_page=3`);
    
    if (!response.ok) {
      throw new Error(`WordPress API responded with status: ${response.status}`);
    }
    
    const posts = await response.json();
    
    // Transform WordPress posts to our format
    const formattedPosts = posts.map((post: any) => {
      // Get the featured image if available
      const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/blog-placeholder.jpg';
      
      // Get the category
      const categories = post._embedded?.['wp:term']?.[0] || [];
      const category = categories.length > 0 ? categories[0].name : 'Uncategorized';
      
      return {
        id: post.id,
        title: post.title.rendered,
        excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        slug: post.slug,
        featuredImage,
        category
      };
    });
    
    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    
    // Return fallback posts if WordPress API fails
    return NextResponse.json([
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
  }
}
