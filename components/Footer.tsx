// components/Footer.tsx
'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { scrollToSection } from '@/lib/scrollToSection';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const socials = [
  { icon: FaGithub, href: 'https://github.com/fariaesha-prog', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/fariahalimesha', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:fariaesha2003@gmail.com', label: 'Email' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="font-bold text-white text-lg tracking-tight">
            faria.dev
          </div>

          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="h-px bg-slate-800 my-8" />

        <p className="text-center text-sm text-slate-600">
          © {year} Faria Halim Esha. Designed and built with care.
        </p>
      </div>
    </footer>
  );
}