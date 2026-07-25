'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fariaesha2003@gmail.com',
    href: 'mailto:fariaesha2003@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1812-748269',
    href: 'tel:+8801812748269',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: '/in/fariahalimesha',
    href: 'https://linkedin.com/in/fariahalimesha',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/fariaesha-prog',
    href: 'https://github.com/fariaesha-prog',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: null,
  },
];

type FormState = {
  name: string;
  email: string;
  message: string;
};

type ContactRowProps = {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string | null;
};

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-indigo-400" />
      </div>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="text-slate-200 text-sm font-medium">{value}</div>
      </div>
    </div>
  );

  if (!href) {
    return <div>{inner}</div>;
  }

  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="block w-fit hover:opacity-80 transition-opacity"
    >
      {inner}
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 md:px-16 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-indigo-400 text-xs font-semibold tracking-[0.2em] uppercase">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.15] mt-4 mb-6">
            Let's build
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              something
            </span>
            <br />
            together
          </h2>

          <p className="text-slate-400 leading-relaxed max-w-md mb-10">
            Whether you have a project in mind, an opportunity to share, or
            just want to connect — my inbox is always open.
          </p>

          <div className="space-y-5">
            {contactInfo.map((info) => (
              <ContactRow key={info.label} {...info} />
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="rounded-2xl bg-slate-800/40 border border-slate-700 p-6 md:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
              className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            isDisabled={status === 'sending'}
            className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold h-12 rounded-xl gap-2"
            startContent={<Send size={16} />}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </Button>

          {status === 'sent' && (
            <p className="text-sm text-emerald-400 text-center">
              Message sent — I'll get back to you soon!
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400 text-center">
              Something went wrong. Try emailing me directly instead.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}