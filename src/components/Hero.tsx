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
                href="https://rawdah.app"
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
                    <div className="text-lg opacity-90 text-center">99 Names of Allah</div>
                    <div className="mt-6 w-full space-y-3">
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur">
                        <div className="text-sm opacity-80">Progress</div>
                        <div className="flex items-center gap-2">
                          <div className="flex-1 bg-white/30 rounded-full h-2">
                            <div className="bg-white rounded-full h-2 w-2/3" />
                          </div>
                          <span className="text-sm font-medium">66%</span>
                        </div>
                      </div>
                      <div className="bg-white/20 rounded-xl p-3 backdrop-blur flex items-center justify-between">
                        <span className="text-sm opacity-80">XP Earned</span>
                        <span className="font-bold">1,250</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg animate-bounce">
                <span className="text-2xl">🔥</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white ml-1">7 days</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg">
                <span className="text-2xl">⭐</span>
                <span className="text-sm font-bold text-gray-900 dark:text-white ml-1">Level 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
