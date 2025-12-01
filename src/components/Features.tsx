'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Volume2, Brain, TrendingUp, Moon, Globe, WifiOff } from 'lucide-react';

const features = [
  { key: 'audio', icon: Volume2, color: 'from-blue-500 to-cyan-500', shadowColor: 'shadow-blue-500/20' },
  { key: 'quiz', icon: Brain, color: 'from-purple-500 to-pink-500', shadowColor: 'shadow-purple-500/20' },
  { key: 'progress', icon: TrendingUp, color: 'from-emerald-500 to-teal-500', shadowColor: 'shadow-emerald-500/20' },
  { key: 'themes', icon: Moon, color: 'from-indigo-500 to-purple-500', shadowColor: 'shadow-indigo-500/20' },
  { key: 'languages', icon: Globe, color: 'from-orange-500 to-red-500', shadowColor: 'shadow-orange-500/20' },
  { key: 'offline', icon: WifiOff, color: 'from-gray-500 to-gray-600', shadowColor: 'shadow-gray-500/20' },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section id="features" className="py-24 bg-[var(--background)] relative overflow-hidden transition-colors">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4"
          >
            {t('label')}
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ key, icon: Icon, color, shadowColor }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative bg-[var(--card-bg)] rounded-3xl p-8 border border-[var(--card-border)] hover:border-[var(--card-border-hover)] transition-all ${shadowColor} hover:shadow-lg backdrop-blur-sm`}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg ${shadowColor}`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-emerald-500 transition-colors">
                  {t(`${key}.title`)}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {t(`${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
