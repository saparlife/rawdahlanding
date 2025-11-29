'use client';

import { useTranslations } from 'next-intl';

export default function NamesShowcase() {
  const t = useTranslations('names');

  const exampleNames = [
    { arabic: 'الرَّحْمَنُ', name: t('example1'), meaning: t('meaning1'), number: 1 },
    { arabic: 'الرَّحِيمُ', name: t('example2'), meaning: t('meaning2'), number: 2 },
    { arabic: 'الْمَلِكُ', name: t('example3'), meaning: t('meaning3'), number: 3 },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {exampleNames.map((name) => (
            <div
              key={name.number}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/50 rounded-full flex items-center justify-center text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {name.number}
                </span>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="text-right mb-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'serif' }}>
                  {name.arabic}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {name.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {name.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Topics visualization */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {Array.from({ length: 11 }, (_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl px-4 py-2 shadow-md"
            >
              <span className="text-sm text-gray-500 dark:text-gray-400">Topic {i + 1}</span>
              <div className="flex gap-1 mt-1">
                {Array.from({ length: 9 }, (_, j) => (
                  <div
                    key={j}
                    className={`w-2 h-2 rounded-full ${
                      j < (i + 1) * 2 % 9 + 1 ? 'bg-emerald-500' : 'bg-gray-200 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
