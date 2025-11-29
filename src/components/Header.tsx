'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const router = useRouter();

  const toggleLocale = () => {
    const currentLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('locale='))
      ?.split('=')[1] || 'ru';

    const newLocale = currentLocale === 'ru' ? 'en' : 'ru';
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Rawdah"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="font-bold text-xl text-gray-900 dark:text-white">Rawdah</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              {t('features')}
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              {t('about')}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <a
              href="https://rawdah-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-full font-medium transition-colors"
            >
              {t('openApp')}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
