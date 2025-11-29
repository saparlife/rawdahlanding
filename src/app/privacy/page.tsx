import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  const sections = [
    { key: 'section1' },
    { key: 'section2' },
    { key: 'section3' },
    { key: 'section4' },
    { key: 'section5' },
    { key: 'section6' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800">
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
              <span className="font-bold text-gray-900 dark:text-white">Rawdah</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('title')}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          {t('lastUpdated')}: November 2024
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('intro')}
          </p>

          {sections.map(({ key }) => (
            <section key={key} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t(`${key}.title`)}
              </h2>
              <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {t(`${key}.content`)}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rawdah</p>
        </div>
      </footer>
    </div>
  );
}
