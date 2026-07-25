// components/Skills.tsx
'use client';

import { motion, type Variants } from 'framer-motion';

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', color: 'bg-cyan-400' },
      { name: 'Next.js', color: 'bg-slate-300' },
      { name: 'TypeScript', color: 'bg-blue-400' },
      { name: 'JavaScript', color: 'bg-yellow-400' },
      { name: 'Tailwind CSS', color: 'bg-teal-400' },
      { name: 'HTML5', color: 'bg-orange-500' },
      { name: 'CSS3', color: 'bg-blue-500' },
      { name: 'Redux', color: 'bg-violet-400' },
      { name: 'Framer Motion', color: 'bg-pink-500' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', color: 'bg-green-500' },
      { name: 'Express', color: 'bg-slate-300' },
      { name: 'REST API', color: 'bg-violet-400' },
      { name: 'JWT Auth', color: 'bg-indigo-400' },
      { name: 'WebSocket', color: 'bg-orange-400' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', color: 'bg-green-500' },
      { name: 'Mongoose', color: 'bg-red-500' },
      { name: 'Firebase', color: 'bg-yellow-400' },
      { name: 'PostgreSQL', color: 'bg-blue-400' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', color: 'bg-orange-500' },
      { name: 'GitHub', color: 'bg-slate-300' },
      { name: 'VS Code', color: 'bg-blue-400' },
      { name: 'Figma', color: 'bg-purple-500' },
      { name: 'Vercel', color: 'bg-slate-300' },
      { name: 'Postman', color: 'bg-orange-500' },
      { name: 'npm', color: 'bg-red-500' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-16 md:gap-20">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mt-4 mb-4">
            My
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              toolkit
            </span>
          </h2>

          <p className="text-slate-400 leading-relaxed max-w-xs">
            Technologies I reach for when building products.
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4 pb-3 border-b border-slate-800">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={item}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-sm font-medium text-slate-200"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${skill.color}`} />
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}