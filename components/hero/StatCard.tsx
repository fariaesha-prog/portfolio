// components/hero/StatCard.tsx
'use client';
import { motion } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  delay?: number;
}

export default function StatCard({ value, label, className, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.6 },
      }}
      className={`absolute bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-xl px-4 py-3 shadow-lg ${className}`}
    >
      <p className="text-violet-400 font-bold text-lg leading-tight">{value}</p>
      <p className="text-slate-400 text-xs">{label}</p>
    </motion.div>
  );
}