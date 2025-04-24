import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// This would be replaced with actual WordPress API call in production
async function getBlogPost(slug: string) {
  // Mock data for development
  const posts = [
    {
      id: 1,
      title: '2025 VA Loan Limits Update: What Veterans Need to Know',
      content: `<p>The Department of Veterans Affairs has announced new loan limits for 2025. These changes will affect veterans looking to purchase homes in various counties across the United States.</p>
      
      <h2>Key Changes for 2025</h2>
      
      <p>The VA loan limits have been adjusted to reflect housing market changes. In most counties, the baseline loan limit has increased to $726,200, up from $715,000 in 2024. In high-cost areas, the limit can be as high as $1,089,300.</p>
      
      <p>It's important to note that these limits don't cap how much you can borrow, but rather how much you can borrow without making a down payment if you don't have full entitlement available.</p>
      
      <h2>What This Means for Veterans</h2>
      
      <p>If you're a veteran with full entitlement, these limits won't affect you, as the VA removed loan limits for those with full entitlement in 2020. However, if you have partial entitlement (perhaps because you have an active VA loan or have lost entitlement from a foreclosure), these limits will determine how much you can borrow without a down payment.</p>
      
      <h2>County-Specific Limits</h2>
      
      <p>The VA loan limits vary by county, so it's essential to check the specific limit for the area where you're looking to buy. You can find this information on the VA's official website or by speaking with a VA loan specialist.</p>
      
      <h2>Planning Your Home Purchase</h2>
      
      <p>If you're planning to buy a home in 2025, now is an excellent time to start preparing. Check your credit score, gather your documentation, and consider getting pre-approved for a VA loan to understand your buying power.</p>
      
      <p>Our VA loan experts are available to help you navigate these changes and find the best loan option for your needs. Contact us today to learn more about how the 2025 VA loan limits might affect your home buying plans.</p>`,
      date: 'April 15, 2025',
      slug: 'va-loan-limits-2025',
      featuredImage: '/blog-1.jpg',
      category: 'News',
      author: 'John Veteran'
    },
    {
      id: 2,
      title: 'How to Improve Your Chances of VA Loan Approval',
      content: `<p>While VA loans have more flexible requirements than conventional loans, there are still steps you can take to strengthen your application and improve your chances of approval.</p>
      
      <h2>Check and Improve Your Credit Score</h2>
      
      <p>Although the VA doesn't set a minimum credit score requirement, most lenders look for a score of at least 620. To improve your score:</p>
      <ul>
        <li>Pay all bills on time</li>
        <li>Reduce credit card balances</li>
        <li>Avoid opening new credit accounts before applying</li>
        <li>Check your credit report for errors and dispute any inaccuracies</li>
      </ul>
      
      <h2>Manage Your Debt-to-Income Ratio</h2>
      
      <p>Your debt-to-income (DTI) ratio is a critical factor in loan approval. The VA prefers a DTI of 41% or lower, though exceptions can be made. To improve your DTI:</p>
      <ul>
        <li>Pay down existing debts</li>
        <li>Avoid taking on new debt before applying</li>
        <li>Consider increasing your income through a second job or overtime</li>
      </ul>
      
      <h2>Save for Closing Costs</h2>
      
      <p>While VA loans don't require a down payment, you'll still need to cover closing costs. Having these funds ready shows lenders you're financially prepared. You can also negotiate for the seller to pay some or all of these costs.</p>
      
      <h2>Gather Your Documentation Early</h2>
      
      <p>Being prepared with all necessary documentation can speed up the approval process. Have these documents ready:</p>
      <ul>
        <li>Certificate of Eligibility (COE)</li>
        <li>Recent pay stubs and W-2 forms</li>
        <li>Tax returns for the past two years</li>
        <li>Bank statements</li>
        <li>Proof of any additional income</li>
      </ul>
      
      <h2>Work with a VA Loan Specialist</h2>
      
      <p>Not all lenders have the same experience with VA loans. Working with a lender that specializes in VA loans can significantly improve your chances of approval and ensure you receive all the benefits you're entitled to.</p>
      
      <p>Our team of VA loan experts is ready to guide you through the application process and help maximize your chances of approval. Contact us today to get started on your journey to homeownership.</p>`,
      date: 'April 8, 2025',
      slug: 'improve-va-loan-approval-chances',
      featuredImage: '/blog-2.jpg',
      category: 'Tips',
      author: 'Sarah Military'
    },
    {
      id: 3,
      title: 'VA Loan vs. FHA: Which Is Better for Military Homebuyers?',
      content: `<p>Both VA and FHA loans offer benefits for homebuyers, but which one makes more sense for veterans? Let's compare the key features of each to help you make an informed decision.</p>
      
      <h2>Down Payment Requirements</h2>
      
      <p><strong>VA Loan:</strong> No down payment required in most cases.</p>
      <p><strong>FHA Loan:</strong> Minimum 3.5% down payment with a credit score of 580 or higher; 10% down payment with a credit score between 500-579.</p>
      
      <h2>Mortgage Insurance</h2>
      
      <p><strong>VA Loan:</strong> No monthly mortgage insurance premium. Instead, there's a one-time VA funding fee (which can be waived for certain veterans with service-connected disabilities).</p>
      <p><strong>FHA Loan:</strong> Requires both an upfront mortgage insurance premium (UFMIP) and an annual mortgage insurance premium (MIP) that's paid monthly.</p>
      
      <h2>Credit Score Requirements</h2>
      
      <p><strong>VA Loan:</strong> No official minimum from the VA, but most lenders require around 620.</p>
      <p><strong>FHA Loan:</strong> Minimum 500, but 580 or higher for the lowest down payment requirement.</p>
      
      <h2>Debt-to-Income Ratio</h2>
      
      <p><strong>VA Loan:</strong> More flexible, generally allowing up to 41% but can go higher with compensating factors.</p>
      <p><strong>FHA Loan:</strong> Typically allows up to 43%, with some exceptions up to 50% with compensating factors.</p>
      
      <h2>Loan Limits</h2>
      
      <p><strong>VA Loan:</strong> No loan limit for veterans with full entitlement. For those with partial entitlement, county-specific limits apply.</p>
      <p><strong>FHA Loan:</strong> Varies by county, ranging from $420,680 to $970,800 for single-family homes in 2023.</p>
      
      <h2>Property Requirements</h2>
      
      <p><strong>VA Loan:</strong> Property must be your primary residence and meet VA's Minimum Property Requirements (MPRs).</p>
      <p><strong>FHA Loan:</strong> Property must be your primary residence and meet FHA's Minimum Property Standards (MPS).</p>
      
      <h2>Which Is Better for Military Homebuyers?</h2>
      
      <p>For most veterans and active-duty service members, a VA loan offers superior benefits:</p>
      <ul>
        <li>No down payment requirement saves thousands upfront</li>
        <li>No monthly mortgage insurance saves hundreds each month</li>
        <li>More flexible credit and DTI requirements</li>
        <li>Potentially lower interest rates</li>
      </ul>
      
      <p>However, an FHA loan might be better in certain situations:</p>
      <ul>
        <li>If you don't qualify for a VA loan</li>
        <li>If the property doesn't meet VA requirements but meets FHA standards</li>
        <li>If you have a very low credit score (below 620)</li>
      </ul>
      
      <h2>Get Expert Advice</h2>
      
      <p>Every financial situation is unique. Our loan specialists can help you compare both options based on your specific circumstances and guide you toward the best choice for your homebuying journey.</p>
      
      <p>Contact us today for a personalized consultation to determine whether a VA or FHA loan is right for you.</p>`,
      date: 'March 30, 2025',
      slug: 'va-loan-vs-fha',
      featuredImage: '/blog-3.jpg',
      category: 'Guides',
      author: 'Mike Serviceman'
    }
  ];
  
  const post = posts.find(p => p.slug === slug);
  return post;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - VA Loans Finance',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} - VA Loans Finance`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, '')
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-primary">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{post.title}</span>
          </div>
          
          {/* Featured Image */}
          <div className="h-96 w-full bg-gray-200 flex items-center justify-center text-gray-500 mb-8">
            Blog Image Placeholder
          </div>
          
          {/* Post Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center text-gray-500 space-x-4">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </div>
          
          {/* Post Content */}
          <div className="max-w-3xl mx-auto prose prose-lg prose-blue">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Share and Tags */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-gray-700 font-medium mr-2">Share:</span>
                <div className="inline-flex space-x-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
              
              <div>
                <span className="text-gray-700 font-medium mr-2">Category:</span>
                <Link 
                  href={`/blog/category/${post.category.toLowerCase()}`}
                  className="inline-block bg-gray-100 text-gray-800 rounded-full px-3 py-1 text-sm hover:bg-primary hover:text-white transition-colors"
                >
                  {post.category}
                </Link>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* This would be dynamically generated in production */}
              <div className="card overflow-hidden">
                <div className="relative h-48">
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                    Blog Image Placeholder
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">How to Improve Your Chances of VA Loan Approval</h3>
                  <Link href="/blog/improve-va-loan-approval-chances" className="text-primary text-sm hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="relative h-48">
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                    Blog Image Placeholder
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">VA Loan vs. FHA: Which Is Better for Military Homebuyers?</h3>
                  <Link href="/blog/va-loan-vs-fha" className="text-primary text-sm hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
              
              <div className="card overflow-hidden">
                <div className="relative h-48">
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                    Blog Image Placeholder
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">2025 VA Loan Limits Update: What Veterans Need to Know</h3>
                  <Link href="/blog/va-loan-limits-2025" className="text-primary text-sm hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-primary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your VA Loan Journey?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our VA loan experts are ready to answer your questions and guide you through the application process.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#eligibility" className="btn btn-primary">
                Check Eligibility
              </Link>
              <Link href="/#calculator" className="btn btn-outline">
                Calculate Payment
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
