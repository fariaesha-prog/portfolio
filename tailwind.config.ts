// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F172A',
        navbar: '#0F172A',
        navborder: '#1A2336',
        activepill: '#1D2349',
        activepillborder: '#2E3471',
        muted: '#8B8FA3',
        resumebg: '#1C2348',
        resumeborder: '#2E3471',
      },
      borderRadius: {
        navbar: '9999px',
        pill: '10px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@heroui/theme')],
};

export default config;