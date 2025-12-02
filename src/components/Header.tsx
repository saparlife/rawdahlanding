'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'ru' ? 'en' : 'ru';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--background)]/90 backdrop-blur-xl border-b border-[var(--card-border)] shadow-sm'
          : 'bg-[var(--background)]/50 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/logo.png"
              alt="Rawdah"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <span className="font-bold text-xl text-[var(--text-primary)]">Rawdah</span>
          </motion.div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              {t('features')}
            </a>
            <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              {t('about')}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleLocale}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-2xl cursor-pointer transition-transform"
              aria-label="Toggle language"
            >
              {locale === 'ru' ? '🇬🇧' : '🇷🇺'}
            </motion.button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)]/95 backdrop-blur-xl border-b border-[var(--card-border)]"
          >
            <div className="px-4 py-4 space-y-4">
              <a
                href="#features"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
              >
                {t('features')}
              </a>
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
              >
                {t('about')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
