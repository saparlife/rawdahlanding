'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-gray-400 pt-20 pb-8 relative overflow-hidden">
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <Image
                src="/logo.png"
                alt="Rawdah"
                width={48}
                height={48}
                className="rounded-xl"
              />
              <span className="font-bold text-2xl text-white">Rawdah</span>
            </motion.div>
            <p className="text-gray-500 max-w-sm mb-6">
              {t('description')}
            </p>
            {/* Social links placeholder */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 16.09V8.91c0-.66.76-1.05 1.31-.67l5.14 4.59c.45.4.45 1.12 0 1.53l-5.14 4.59c-.55.38-1.31-.01-1.31-.67v-.19z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-6">{t('legal')}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-semibold text-white mb-6">Download</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://rawdah-app.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  Web App
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/ru/app/rawdah-99-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%B0%D0%BB%D0%BB%D0%B0%D1%85%D0%B0/id1626704913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  App Store
                </a>
              </li>
              <li>
                <span className="text-gray-600">
                  Google Play (Скоро)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {currentYear} Rawdah. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
