import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for Rawdah - 99 Names of Allah app. Read our terms and conditions for using the application.',
  openGraph: {
    title: 'Terms of Use | Rawdah',
    description: 'Terms of Use for Rawdah app',
  },
};

export default function TermsPage() {
  const t = useTranslations('terms');

  const sections = [
    { key: 'section1' },
    { key: 'section2' },
    { key: 'section3' },
    { key: 'section4' },
    { key: 'section5' },
    { key: 'section6' },
    { key: 'section7' },
    { key: 'section8' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Rawdah"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-white">Rawdah</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {t('title')}
        </h1>
        <p className="text-gray-500 mb-8">
          {t('lastUpdated')}: November 2024
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 mb-8">
            {t('intro')}
          </p>

          {sections.map(({ key }) => (
            <section key={key} className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">
                {t(`${key}.title`)}
              </h2>
              <div className="text-gray-400 whitespace-pre-line leading-relaxed">
                {t(`${key}.content`)}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Rawdah</p>
        </div>
      </footer>
    </div>
  );
}
