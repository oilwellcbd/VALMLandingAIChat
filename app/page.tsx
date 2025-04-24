import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import LoanProcess from '@/components/LoanProcess';
import Eligibility from '@/components/Eligibility';
import LoanOptions from '@/components/LoanOptions';
import BlogSection from '@/components/BlogSection';
import Calculator from '@/components/Calculator';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'VA Loan Mortgages | Home',
  description: 'VA Loan Mortgages offers specialized VA loan services for military members, veterans, and their families. Get expert guidance on VA home loans, refinancing, and more.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <LoanProcess />
        <Eligibility />
        <LoanOptions />
        <Calculator />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
