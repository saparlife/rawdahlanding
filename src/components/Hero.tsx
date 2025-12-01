'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Play, Star } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-[var(--hero-gradient-from)] via-[var(--background)] to-[var(--hero-gradient-to)] transition-colors">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[150px]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[var(--badge-bg)] border border-[var(--badge-border)] text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              {t('badge')}
              <span className="flex items-center gap-1 ml-2 text-yellow-400">
                <Star className="w-3 h-3 fill-yellow-400" />
                4.9
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-[var(--text-primary)] mb-6 leading-tight"
            >
              {t('title').split(' ').map((word, i) => (
                <span key={i}>
                  {word === '99' || word === 'Allah' || word === 'Аллаха' || word === 'имён' ? (
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                      {word}
                    </span>
                  ) : (
                    word
                  )}{' '}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-[var(--text-secondary)] mb-8 max-w-2xl"
            >
              {t('subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://rawdah-app.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Play className="w-5 h-5 relative z-10 fill-white" />
                <span className="relative z-10">{t('openApp')}</span>
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-[var(--surface)] hover:bg-emerald-500 text-[var(--text-primary)] hover:text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all border border-[var(--card-border)] hover:border-emerald-500 backdrop-blur-sm"
              >
                {t('learnMore')}
              </a>
            </motion.div>

            {/* App Store buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-8"
            >
              <a
                href="https://apps.apple.com/ru/app/rawdah-99-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%B0%D0%BB%D0%BB%D0%B0%D1%85%D0%B0/id1626704913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[var(--text-primary)] text-[var(--background)] px-5 py-3 rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <div className="inline-flex items-center gap-3 bg-[var(--card-bg)] text-[var(--text-muted)] px-5 py-3 rounded-xl cursor-not-allowed border border-[var(--card-border)]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-60">Google Play</div>
                  <div className="text-sm font-semibold">{t('comingSoon')}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* App mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative perspective-1000"
          >
            <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] blur-3xl opacity-30 scale-110" />

              {/* Phone frame */}
              <motion.div
                className="relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-black h-8 flex items-center justify-center">
                    <div className="w-20 h-5 bg-gray-900 rounded-full" />
                  </div>
                  {/* Screen content */}
                  <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 aspect-[9/16] flex flex-col items-center justify-center p-6 text-white relative overflow-hidden">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '20px 20px',
                      }} />
                    </div>

                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Image
                        src="/logo.png"
                        alt="Rawdah"
                        width={80}
                        height={80}
                        className="rounded-2xl mb-4 shadow-lg"
                      />
                    </motion.div>
                    <div className="text-3xl font-bold mb-2">Rawdah</div>
                    <div className="text-lg opacity-90 text-center">{t('mockup.subtitle')}</div>
                    <div className="mt-6 w-full space-y-3">
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm border border-white/10">
                        <div className="text-sm opacity-80">{t('mockup.progress')}</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-white/30 rounded-full h-2.5 overflow-hidden">
                            <motion.div
                              className="bg-white rounded-full h-2.5"
                              initial={{ width: 0 }}
                              animate={{ width: '34%' }}
                              transition={{ duration: 1.5, delay: 1 }}
                            />
                          </div>
                          <span className="text-sm font-bold">34%</span>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm border border-white/10 flex items-center justify-between">
                        <span className="text-sm opacity-80">{t('mockup.xpEarned')}</span>
                        <span className="font-bold text-lg">1,250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-3 shadow-lg shadow-orange-500/30"
                initial={{ opacity: 0, scale: 0, rotate: -20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-1">
                  <span className="text-2xl">🔥</span>
                  <span className="text-sm font-bold text-white">{t('mockup.streak')}</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-3 shadow-lg shadow-yellow-500/30"
                initial={{ opacity: 0, scale: 0, rotate: 20 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-1">
                  <span className="text-2xl">⭐</span>
                  <span className="text-sm font-bold text-white">{t('mockup.level')}</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-3 shadow-lg shadow-purple-500/30"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-2xl">🎯</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-3 bg-emerald-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
