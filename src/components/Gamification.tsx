'use client';

import { useTranslations } from 'next-intl';
import { Zap, Flame, Trophy } from 'lucide-react';

export default function Gamification() {
  const t = useTranslations('gamification');

  const stats = [
    { icon: Zap, label: t('xp'), value: '2,450', color: 'text-yellow-500', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { icon: Flame, label: t('streak'), value: '14', suffix: ' days', color: 'text-orange-500', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { icon: Trophy, label: t('achievements'), value: '8/15', color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map(({ icon: Icon, label, value, suffix, color, bg }) => (
            <div
              key={label}
              className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center group hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-8 h-8 ${color}`} />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {value}
                {suffix && <span className="text-lg">{suffix}</span>}
              </div>
              <div className="text-gray-600 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Achievement badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['🌟', '📚', '🎯', '💪', '🏆', '✨', '🔥', '💎'].map((emoji, i) => (
            <div
              key={i}
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg ${
                i < 5 ? 'bg-white dark:bg-gray-800' : 'bg-gray-200 dark:bg-gray-700 opacity-50'
              }`}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
