'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, BookOpen, Trophy, Star } from 'lucide-react';

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCurrent(Math.min(Math.round(increment * step), value));
        if (step >= steps) clearInterval(timer);
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {current.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const t = useTranslations('stats');

  const stats = [
    { icon: Users, value: 10000, suffix: '+', label: t('users'), color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, value: 99, suffix: '', label: t('names'), color: 'from-emerald-500 to-teal-500' },
    { icon: Trophy, value: 50000, suffix: '+', label: t('completed'), color: 'from-yellow-500 to-orange-500' },
    { icon: Star, value: 4.9, suffix: '', label: t('rating'), color: 'from-purple-500 to-pink-500', isDecimal: true },
  ];

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, suffix, label, color, isDecimal }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} p-[1px]`}>
                <div className="w-full h-full bg-[#0a0a0a] rounded-2xl flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {isDecimal ? (
                  <span>{value}</span>
                ) : (
                  <AnimatedNumber value={value} suffix={suffix} />
                )}
              </div>
              <div className="text-gray-400">{label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
