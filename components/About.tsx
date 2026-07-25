// components/About.tsx
'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Sparkles, GraduationCap } from 'lucide-react';
import GridBackground from './hero/GridBackground';
import AboutStats from './about/AboutStats';
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const highlights = [
  { icon: Code2, label: 'Full Stack Dev' },
  { icon: Palette, label: 'UI/UX Design' },
  { icon: Sparkles, label: 'Systems Thinking' },
  { icon: GraduationCap, label: 'CS Undergrad' },
];

const paragraphs = [
  "I'm a Computer Science and Engineering student with a passion for creating modern, user-focused web applications. What started as learning the fundamentals of programming gradually turned into a love for building interactive, real-world projects that solve problems and deliver great user experiences.",
  "I enjoy working across the full stack, with a particular interest in frontend development where I can combine clean code with thoughtful design. I like transforming ideas and Figma designs into responsive, polished interfaces while also building the backend logic that powers them. Recently, I've been working with technologies like React, Next.js, TypeScript, Node.js, Express, MongoDB, and Tailwind CSS to develop full-stack applications with authentication, APIs, and modern development practices.",
  "Outside of coding, I enjoy exploring UI/UX design, keeping up with the latest web technologies, and continuously improving my skills through personal projects.",
  "When I'm not in front of my editor, you'll usually find me watching rom-coms, listening to music, journaling, or finding inspiration for my next creative project.",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-900 py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <GridBackground />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start"
      >
        
        {/* LEFT */}
        <div>
          <motion.span
            variants={item}
            className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase"
          >
            About
          </motion.span>

          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mt-4 mb-10"
          >
            Building at the edge of{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              craft
            </span>{' '}
            and{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-500 bg-clip-text text-transparent">
              code
            </span>
          </motion.h2>

          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-3 max-w-sm"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700"
              >
                <Icon size={18} className="text-indigo-400 shrink-0" />
                <span className="text-sm text-slate-300">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              variants={item}
              className="text-slate-400 leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </motion.div>

      <section id="about" className="relative bg-slate-900 py-24 md:py-32 px-6 md:px-16 overflow-hidden">
  <GridBackground />

  <div className="relative z-10 max-w-7xl mx-auto">
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start"
    >
      {/* LEFT and RIGHT columns stay exactly as they are */}
    </motion.div>

    <AboutStats />
  </div>
</section>
    </section>

    
  );
  
}