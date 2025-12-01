'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Footer() {
  const t = useTranslations('footer');
  const { theme, toggleTheme, mounted } = useTheme();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--surface)] text-[var(--text-secondary)] pt-20 pb-8 relative overflow-hidden transition-colors">
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
              <span className="font-bold text-2xl text-[var(--text-primary)]">Rawdah</span>
            </motion.div>
            <p className="text-[var(--text-muted)] max-w-sm mb-6">
              {t('description')}
            </p>
            {/* Social links and theme toggle */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-border-hover)] rounded-xl flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-[var(--card-border-hover)] rounded-xl flex items-center justify-center transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 16.09V8.91c0-.66.76-1.05 1.31-.67l5.14 4.59c.45.4.45 1.12 0 1.53l-5.14 4.59c-.55.38-1.31-.01-1.31-.67v-.19z"/>
                </svg>
              </a>
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/50 rounded-xl flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600" />
                  )}
                </motion.button>
              )}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-6">{t('legal')}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="text-[var(--text-muted)] hover:text-emerald-500 transition-colors"
                >
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[var(--text-muted)] hover:text-emerald-500 transition-colors"
                >
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-[var(--text-muted)] hover:text-emerald-500 transition-colors"
                >
                  {t('deleteAccount')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h3 className="font-semibold text-[var(--text-primary)] mb-6">Download</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://rawdah-app.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-emerald-500 transition-colors"
                >
                  Web App
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/ru/app/rawdah-99-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%B0%D0%BB%D0%BB%D0%B0%D1%85%D0%B0/id1626704913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--text-muted)] hover:text-emerald-500 transition-colors"
                >
                  App Store
                </a>
              </li>
              <li>
                <span className="text-[var(--text-muted)] opacity-50">
                  Google Play (Скоро)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--card-border)] pt-8 text-center text-[var(--text-muted)] text-sm">
          <p>&copy; {currentYear} Rawdah. {t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
