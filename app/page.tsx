import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Eligibility from '@/components/Eligibility';
import LoanOptions from '@/components/LoanOptions';
import BlogSection from '@/components/BlogSection';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Benefits />
      <Eligibility />
      <LoanOptions />
      <Calculator />
      <BlogSection />
      <Footer />
    </main>
  );
}
