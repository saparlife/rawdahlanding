import { getTranslations, setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import DeleteAccountForm from './DeleteAccountForm';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isRussian = locale === 'ru';

  return {
    title: isRussian ? 'Удаление аккаунта' : 'Delete Account',
    description: isRussian
      ? 'Запросить удаление аккаунта Rawdah и связанных данных'
      : 'Request deletion of your Rawdah account and associated data',
    openGraph: {
      title: isRussian ? 'Удаление аккаунта | Rawdah' : 'Delete Account | Rawdah',
      description: isRussian
        ? 'Запросить удаление аккаунта Rawdah'
        : 'Request Rawdah account deletion',
    },
  };
}

export default async function DeleteAccountPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('deleteAccount');

  const steps = [
    t('steps.step1'),
    t('steps.step2'),
    t('steps.step3'),
    t('steps.step4'),
    t('steps.step5'),
  ];

  const deletedItems = [
    locale === 'ru' ? 'Профиль аккаунта (email, имя, фото профиля)' : 'Your account profile (email, name, profile photo)',
    locale === 'ru' ? 'Прогресс обучения и статистика' : 'Learning progress and statistics',
    locale === 'ru' ? 'Достижения и очки XP' : 'Achievements and XP points',
    locale === 'ru' ? 'История серий' : 'Streak history',
    locale === 'ru' ? 'Результаты и история тестов' : 'Quiz results and history',
  ];

  const retainedItems = [
    locale === 'ru' ? 'Анонимизированные аналитические данные (не могут быть связаны с вами)' : 'Anonymized analytics data (cannot be linked back to you)',
    locale === 'ru' ? 'Агрегированная статистика для улучшения приложения' : 'Aggregated statistics for app improvement',
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
          {t('pageTitle')}
        </h1>
        <p className="text-lg text-[var(--text-secondary)] mb-8">
          {t('subtitle')}
        </p>

        {/* Steps Section */}
        <section className="mb-10 bg-[var(--surface)] border border-[var(--card-border)] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            {t('steps.title')}
          </h2>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-[var(--text-secondary)]">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Data Info Section */}
        <section className="mb-10 bg-[var(--surface)] border border-[var(--card-border)] rounded-2xl p-6">
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-4">
            {t('dataInfo.title')}
          </h2>

          <div className="mb-6">
            <h3 className="font-semibold text-red-500 mb-2">{t('dataInfo.deleted')}</h3>
            <ul className="space-y-2">
              {deletedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-red-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-amber-500 mb-2">{t('dataInfo.retained')}</h3>
            <ul className="space-y-2">
              {retainedItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-[var(--text-secondary)]">
                  <span className="text-amber-500">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[var(--text-muted)] text-sm border-t border-[var(--card-border)] pt-4">
            {t('dataInfo.retentionPeriod')}
          </p>
        </section>

        {/* Form Section */}
        <section className="bg-[var(--surface)] border border-[var(--card-border)] rounded-2xl p-6">
          <DeleteAccountForm />
        </section>

        {/* Contact Info */}
        <p className="mt-8 text-center text-[var(--text-muted)]">
          {t('contact')} <a href="mailto:sapar@1app.kz" className="text-emerald-500 hover:underline">sapar@1app.kz</a>
        </p>
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
