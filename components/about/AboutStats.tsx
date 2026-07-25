// components/about/AboutStats.tsx
'use client';

import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stats = [
  { value: '10+', label: 'Full Stack Projects' },
  { value: '2+', label: 'Years Learning' },
  { value: '2.94', label: 'CGPA' },
  { value: '300+', label: 'Git Commits' },
];

export default function AboutStats() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
    >
      {stats.map(({ value, label }) => (
        <motion.div
          key={label}
          variants={item}
          className="px-6 py-5 rounded-xl bg-slate-800/60 border border-slate-700"
        >
          <div className="text-3xl font-extrabold text-white mb-1">
            {value}
          </div>
          <div className="text-sm text-slate-400">{label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}