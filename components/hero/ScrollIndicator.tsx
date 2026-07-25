// components/hero/ScrollIndicator.tsx
'use client';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/scrollToSection';

export default function ScrollIndicator() {
  return (
    <motion.button
      onClick={() => scrollToSection('about')}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
      aria-label="Scroll to next section"
    >
      <span className="text-[11px] tracking-widest uppercase">Scroll</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-5 h-8 rounded-full border border-slate-600 flex justify-center pt-1.5"
      >
        <div className="w-1 h-1.5 rounded-full bg-slate-500" />
      </motion.div>
    </motion.button>
  );
}