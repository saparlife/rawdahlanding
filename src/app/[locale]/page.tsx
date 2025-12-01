import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import NamesShowcase from '@/components/NamesShowcase';
import Gamification from '@/components/Gamification';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FeedbackModal from '@/components/FeedbackModal';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
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
