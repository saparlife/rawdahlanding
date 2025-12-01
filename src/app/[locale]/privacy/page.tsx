import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isRussian = locale === 'ru';

  return {
    title: isRussian ? 'Политика конфиденциальности' : 'Privacy Policy',
    description: isRussian
      ? 'Политика конфиденциальности Rawdah - приложения для изучения 99 имён Аллаха.'
      : 'Privacy Policy for Rawdah - 99 Names of Allah app.',
    openGraph: {
      title: isRussian ? 'Политика конфиденциальности | Rawdah' : 'Privacy Policy | Rawdah',
      description: isRussian ? 'Политика конфиденциальности Rawdah' : 'Privacy Policy for Rawdah app',
    },
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('privacy');

  const sections = [
    { key: 'section1' },
    { key: 'section2' },
    { key: 'section3' },
    { key: 'section4' },
    { key: 'section5' },
    { key: 'section6' },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] transition-colors">
      {/* Header */}
      <header className="border-b border-[var(--card-border)]">
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
              <span className="font-bold text-[var(--text-primary)]">Rawdah</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-emerald-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {locale === 'ru' ? 'Назад' : 'Back'}
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-4">
          {t('title')}
        </h1>
        <p className="text-[var(--text-muted)] mb-8">
          {t('lastUpdated')}: {locale === 'ru' ? 'Декабрь 2024' : 'December 2024'}
        </p>

        <div className="max-w-none">
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            {t('intro')}
          </p>

          {sections.map(({ key }) => (
            <section key={key} className="mb-8">
              <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                {t(`${key}.title`)}
              </h2>
              <div className="text-[var(--text-secondary)] whitespace-pre-line leading-relaxed">
                {t(`${key}.content`)}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} Rawdah</p>
        </div>
      </footer>
    </div>
  );
}
