'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300/30 dark:bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300/30 dark:bg-teal-500/10 rounded-full blur-3xl" />

      {/* Arabic pattern overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322C55E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              {t('badge')}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t('title')}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {t('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://rawdah-app.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg shadow-emerald-500/30"
              >
                {t('openApp')}
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                {t('learnMore')}
              </a>
            </div>

            {/* App Store buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mt-6">
              <a
                href="https://apps.apple.com/ru/app/rawdah-99-%D0%B8%D0%BC%D0%B5%D0%BD-%D0%B0%D0%BB%D0%BB%D0%B0%D1%85%D0%B0/id1626704913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <div className="inline-flex items-center gap-3 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-5 py-3 rounded-xl cursor-not-allowed">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Google Play</div>
                  <div className="text-sm font-semibold">Скоро</div>
                </div>
              </div>
            </div>
          </div>

          {/* App mockup */}
          <div className="flex-1 relative">
            <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
              {/* Phone frame */}
              <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-gray-800 rounded-[2.5rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-gray-900 h-8 flex items-center justify-center">
                    <div className="w-20 h-5 bg-gray-800 rounded-full" />
                  </div>
                  {/* Screen content */}
                  <div className="bg-gradient-to-br from-emerald-500 to-teal-600 aspect-[9/16] flex flex-col items-center justify-center p-6 text-white">
                    <Image
                      src="/logo.png"
                      alt="Rawdah"
                      width={80}
                      height={80}
                      className="rounded-2xl mb-4"
                    />
                    <div className="text-3xl font-bold mb-2">Rawdah</div>
                    <div className="text-lg opacity-90 text-center">{t('mockup.subtitle')}</div>
                    <div className="mt-6 w-full space-y-3">
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur">
                        <div className="text-sm opacity-80">{t('mockup.progress')}</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-white/30 rounded-full h-2">
                            <div className="bg-white rounded-full h-2 w-2/3" />
                          </div>
                          <span className="text-sm font-medium">66%</span>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur flex items-center justify-between">
                        <span className="text-sm opacity-80">{t('mockup.xpEarned')}</span>
                        <span className="font-bold">1,250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg animate-bounce">
                <span className="text-2xl">🔥</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white ml-1">{t('mockup.streak')}</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white ml-1">{t('mockup.level')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
