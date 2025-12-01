'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Zap, Flame, Trophy, Target, Award, Crown } from 'lucide-react';

export default function Gamification() {
  const t = useTranslations('gamification');

  const stats = [
    { icon: Zap, label: t('xp'), value: '2,450', color: 'from-yellow-400 to-orange-500', bg: 'bg-yellow-500/10' },
    { icon: Flame, label: t('streak'), value: '14', suffix: ` ${t('streakDays')}`, color: 'from-orange-500 to-red-500', bg: 'bg-orange-500/10' },
    { icon: Trophy, label: t('achievements'), value: '8/15', color: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' },
  ];

  const achievements = [
    { emoji: '🌟', name: t('achievement1'), unlocked: true },
    { emoji: '📚', name: t('achievement2'), unlocked: true },
    { emoji: '🎯', name: t('achievement3'), unlocked: true },
    { emoji: '💪', name: t('achievement4'), unlocked: true },
    { emoji: '🏆', name: t('achievement5'), unlocked: true },
    { emoji: '✨', name: t('achievement6'), unlocked: false },
    { emoji: '🔥', name: t('achievement7'), unlocked: false },
    { emoji: '💎', name: t('achievement8'), unlocked: false },
  ];

  return (
    <section className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            {t('label')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map(({ icon: Icon, label, value, suffix, color, bg }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
              <div className={`relative ${bg} border border-[var(--card-border)] group-hover:border-[var(--card-border-hover)] rounded-3xl p-8 text-center backdrop-blur-sm transition-all`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-[var(--text-primary)] mb-2">
                  {value}
                  {suffix && <span className="text-lg text-[var(--text-secondary)]">{suffix}</span>}
                </div>
                <div className="text-[var(--text-secondary)]">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-8">{t('unlockAchievements')}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {achievements.map(({ emoji, name, unlocked }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: 'spring' }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`relative group cursor-pointer`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg transition-all ${
                  unlocked
                    ? 'bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-emerald-500/50'
                    : 'bg-[var(--card-bg)] border border-[var(--card-border)] grayscale opacity-50'
                }`}>
                  {emoji}
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <span className="text-xs text-[var(--text-secondary)]">{name}</span>
                </div>
                {/* Glow effect for unlocked */}
                {unlocked && (
                  <div className="absolute inset-0 rounded-2xl bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
