import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main className="pt-20 pb-16 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link href="/" className="btn btn-primary">
            Return to Homepage
          </Link>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
