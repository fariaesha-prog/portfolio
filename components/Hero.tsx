// components/Hero.tsx
'use client';

import Image from 'next/image';
import { Button } from '@heroui/react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import GridBackground from './hero/GridBackground';
import StatCard from './hero/StatCard';
import ScrollIndicator from './hero/ScrollIndicator';

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const socials = [
  {
    icon: FaGithub,
    href: 'https://github.com/fariaesha-prog',
    label: 'GitHub',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com/in/fariahalimesha',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:fariaesha2003@gmail.com',
    label: 'Email',
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden px-6 md:px-16 pt-24 md:pt-28"
    >
      <GridBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-24"
      >
        {/* LEFT */}
        <div>
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-extrabold text-white leading-[1.1] mb-6"
          >
            Hi, I&apos;m
            <br />
            Faria{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Halim
            </span>
            <br />
            Esha
          </motion.h1>

          <motion.p
            variants={item}
            className="text-indigo-400 font-semibold text-lg mb-3"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            variants={item}
            className="text-slate-400 text-lg mb-2"
          >
            Building AI-powered products with clean engineering and thoughtful
            design.
          </motion.p>

          <motion.p
            variants={item}
            className="text-slate-500 text-sm mb-6"
          >
            React · Next.js · TypeScript · Node.js · Express · MongoDB
          </motion.p>

          <motion.p
            variants={item}
            className="text-slate-400 leading-relaxed mb-8 max-w-lg"
          >
            I craft clean, thoughtful digital products that sit at the
            intersection of engineering precision and visual clarity. Currently
            pursuing my degree while building real-world applications that
            matter.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Button
              onPress={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold px-6 h-11 rounded-xl gap-2"
            >
              View Projects
              <motion.span whileHover={{ x: 3 }} className="inline-flex">
                <ArrowRight size={16} />
              </motion.span>
            </Button>

            <Button
              onPress={() => window.open('/resume.pdf', '_blank')}
              className="bg-slate-800 border border-slate-700 text-slate-200 font-medium px-6 h-11 rounded-xl gap-2"
            >
              <Download size={16} />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="flex items-center gap-4"
          >
            <span className="text-slate-500 text-xs tracking-widest uppercase">
              Find me on
            </span>

            <div className="h-px w-8 bg-slate-700" />

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 flex items-center justify-center bg-slate-800 border border-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[340px] md:h-[340px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -inset-5 md:-inset-6 rounded-full border border-dashed border-indigo-500/30"
            />

            <div className="absolute inset-0 m-auto w-[85%] h-[85%] bg-violet-600/20 rounded-full blur-[80px]" />

            <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-slate-700">
              <Image
                src="/profile.jpg"
                alt="Faria Halim Esha"
                fill
                priority
                sizes="340px"
                className="object-cover"
              />
            </div>

            <StatCard
              value="10+"
              label="Projects Built"
              className="-top-6 -right-10 md:-right-14"
              delay={0.6}
            />

            <StatCard
              value="2.94 / 4.0"
              label="CGPA"
              className="bottom-2 -left-10 md:-left-14"
              delay={0.8}
            />
          </div>

          <div className="flex items-center gap-1.5 mt-8">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
            <span className="w-4 h-1.5 rounded-full bg-violet-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          </div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}