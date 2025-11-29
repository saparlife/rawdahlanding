'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';

export default function NamesShowcase() {
  const t = useTranslations('names');

  const exampleNames = [
    { arabic: 'الرَّحْمَنُ', name: t('example1'), meaning: t('meaning1'), number: 1 },
    { arabic: 'الرَّحِيمُ', name: t('example2'), meaning: t('meaning2'), number: 2 },
    { arabic: 'الْمَلِكُ', name: t('example3'), meaning: t('meaning3'), number: 3 },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a0a0a] via-emerald-950/20 to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Learn
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {exampleNames.map((name, index) => (
            <motion.div
              key={name.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-8 border border-white/10 group-hover:border-emerald-500/30 transition-all backdrop-blur-sm">
                {/* Number badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
                    {name.number}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 hover:bg-emerald-500 rounded-full flex items-center justify-center transition-colors group/btn"
                  >
                    <Volume2 className="w-5 h-5 text-white" />
                  </motion.button>
                </div>

                {/* Arabic name */}
                <div className="text-center mb-6">
                  <motion.span
                    className="text-5xl font-bold text-white block mb-4"
                    style={{ fontFamily: 'serif' }}
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {name.arabic}
                  </motion.span>
                </div>

                {/* Translation */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-emerald-400">
                    {name.name}
                  </h3>
                  <p className="text-gray-400">
                    {name.meaning}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Topics visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <p className="text-gray-400">11 Topics × 9 Names = 99 Names</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {Array.from({ length: 11 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 hover:border-emerald-500/30 rounded-xl px-4 py-3 backdrop-blur-sm transition-all"
              >
                <span className="text-xs text-gray-500 block mb-2">Topic {i + 1}</span>
                <div className="flex gap-1">
                  {Array.from({ length: 9 }, (_, j) => (
                    <motion.div
                      key={j}
                      className={`w-2 h-2 rounded-full ${
                        j <= i ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : 'bg-white/20'
                      }`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 + j * 0.02 }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
