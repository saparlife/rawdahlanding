import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import NamesShowcase from '@/components/NamesShowcase';
import Gamification from '@/components/Gamification';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FeedbackModal from '@/components/FeedbackModal';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <NamesShowcase />
        <Gamification />
        <CTA />
      </main>
      <Footer />
      <FeedbackModal />
    </>
  );
}
