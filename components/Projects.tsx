// components/Projects.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '@/lib/projects';

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const MAX_VISIBLE_TAGS = 4;

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-end justify-between gap-4 mb-16"
        >
          <div>
            <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
              Featured Work
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mt-4">
              Selected{' '}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                projects
              </span>
            </h2>
          </div>
          <p className="text-slate-500">A few things I&apos;ve built with care.</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const visibleTags = project.tags.slice(0, MAX_VISIBLE_TAGS);
            const extraCount = project.tags.length - MAX_VISIBLE_TAGS;

            return (
              <motion.article
                key={project.slug}
                variants={item}
                className="group relative rounded-2xl bg-slate-800/40 border border-slate-700 overflow-hidden hover:border-indigo-500/40 transition-colors"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    
                     <a href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900/80 backdrop-blur text-slate-200 hover:text-white"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <FaGithub size={15} />
                    </a>
                  )}
                  {project.liveUrl && (
                    
                      < a href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-900/80 backdrop-blur text-slate-200 hover:text-white"
                      aria-label={`${project.title} live site`}
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>

                <Link href={`/projects/${project.slug}`} className="block p-6">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-indigo-400 text-sm mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {visibleTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                    {extraCount > 0 && (
                      <span className="px-3 py-1 text-xs text-slate-500">
                        +{extraCount}
                      </span>
                    )}
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}