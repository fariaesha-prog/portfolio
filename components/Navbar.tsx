// components/Navbar.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { scrollToSection } from '@/lib/scrollToSection';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id));

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className="w-full max-w-5xl flex items-center justify-between px-6 py-3
                   rounded-full shadow-lg shadow-black/30"
        style={{
          backgroundColor: '#0F172A',
          border: '1px solid #1A2336',
        }}
      >
        {/* Logo */}
        <div className="font-bold text-white text-lg tracking-tight">
          faria.dev
        </div>

        {/* Centered links - desktop only */}
        <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.id} className="relative">
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative z-10 px-4 py-2 text-sm font-medium rounded-[10px] transition-colors ${
                    isActive ? 'text-white' : 'text-[#8B8FA3] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-[10px] z-0"
                    style={{
                      backgroundColor: '#1D2349',
                      border: '1px solid #2E3471',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Resume button - desktop */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-[10px] text-sm font-medium text-white"
          style={{
            backgroundColor: '#1C2348',
            border: '1px solid #2E3471',
          }}
        >
          <FileText size={16} />
          Resume
        </motion.button>

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 w-[calc(100%-2rem)] max-w-5xl
                       rounded-2xl p-4 flex flex-col gap-2 shadow-lg shadow-black/30"
            style={{ backgroundColor: '#0F172A', border: '1px solid #1A2336' }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-3 rounded-[10px] text-sm font-medium text-left transition-colors ${
                    isActive ? 'text-white' : 'text-[#8B8FA3] hover:text-white'
                  }`}
                  style={isActive ? { backgroundColor: '#1D2349', border: '1px solid #2E3471' } : undefined}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="flex items-center gap-2 px-4 py-3 rounded-[10px] text-sm font-medium text-white mt-2"
              style={{ backgroundColor: '#1C2348', border: '1px solid #2E3471' }}
            >
              <FileText size={16} />
              Resume
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}