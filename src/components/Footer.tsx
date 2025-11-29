'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Rawdah"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="font-bold text-xl text-white">Rawdah</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              {t('description')}
            </p>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('legal')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-semibold text-white mb-4">Download</h3>
            <div className="space-y-3">
              <a
                href="https://rawdah-app.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                Web App
              </a>
              <a
                href="https://apps.apple.com/ru/app/rawdah-99-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%B0%D0%BB%D0%BB%D0%B0%D1%85%D0%B0/id1626704913"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-emerald-400 transition-colors"
              >
                App Store
              </a>
              <span className="block text-gray-500">
                Google Play (Скоро)
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Rawdah. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
