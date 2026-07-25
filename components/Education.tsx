// components/Education.tsx
'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

type EducationEntry = {
  status: 'In Progress' | 'Completed';
  degree: string;
  institution: string;
  period: string;
  gpaLabel?: string;
  gpaValue?: string;
  coursework?: string[];
};

const education: EducationEntry[] = [
  {
    status: 'In Progress',
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Stamford University Bangladesh',
    period: '2023 — 2027 (Expected)',
    gpaLabel: 'CGPA',
    gpaValue: '2.94 / 4.0',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web Application Development',
      'Software Engineering',
      'Object-Oriented Programming',
      'Computer Networks',
      'Operating Systems',
    ],
  },
  // Optional — add these two if you decide to include pre-university
  // {
  //   status: 'Completed',
  //   degree: 'Higher Secondary Certificate (HSC)',
  //   institution: 'Your College Name',
  //   period: '2019 — 2021',
  // },
  // {
  //   status: 'Completed',
  //   degree: 'Secondary School Certificate (SSC)',
  //   institution: 'Your School Name',
  //   period: '2017 — 2019',
  // },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mt-4 mb-16">
            Academic{' '}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              background
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-slate-700" />

          <div className="space-y-10">
            {education.map((entry, i) => (
              <motion.div
                key={entry.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
                className="relative pl-14"
              >
                {/* dot */}
                <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
                </div>

                <div className="rounded-2xl bg-slate-800/40 border border-slate-700 p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                        <GraduationCap size={18} className="text-indigo-400" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          entry.status === 'In Progress'
                            ? 'bg-indigo-500/10 border-indigo-500/40 text-indigo-300'
                            : 'bg-slate-700/40 border-slate-600 text-slate-400'
                        }`}
                      >
                        ● {entry.status}
                      </span>
                    </div>

                    <span className="text-slate-500 text-sm">{entry.period}</span>
                  </div>

                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                        {entry.degree}
                      </h3>
                      <p className="text-slate-400">{entry.institution}</p>
                    </div>

                    {entry.gpaValue && (
                      <div className="px-5 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-center">
                        <div className="text-xs text-slate-500 mb-0.5">
                          {entry.gpaLabel}
                        </div>
                        <div className="text-lg font-bold text-indigo-300">
                          {entry.gpaValue}
                        </div>
                      </div>
                    )}
                  </div>

                  {entry.coursework && entry.coursework.length > 0 && (
                    <>
                      <div className="mt-6 pt-4 border-t border-slate-800">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500">
                          Relevant Coursework
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-3">
                        {entry.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700 text-sm text-slate-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}