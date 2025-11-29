'use client';

import { useTranslations } from 'next-intl';
import { Volume2, Brain, TrendingUp, Moon, Globe, WifiOff } from 'lucide-react';

const features = [
  { key: 'audio', icon: Volume2 },
  { key: 'quiz', icon: Brain },
  { key: 'progress', icon: TrendingUp },
  { key: 'themes', icon: Moon },
  { key: 'languages', icon: Globe },
  { key: 'offline', icon: WifiOff },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ key, icon: Icon }) => (
            <div
              key={key}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(`${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
