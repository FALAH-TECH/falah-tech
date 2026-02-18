import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgPrimary: 'var(--bg-primary)',
        bgCard: 'var(--bg-card)',
        accentBlue: 'var(--accent-blue)',
        textPrimary: 'var(--text-primary)',
        textMuted: 'var(--text-muted)',
        borderSubtle: 'var(--border-subtle)'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(59,130,246,0.4), 0 0 32px rgba(59,130,246,0.2)',
        card: '0 8px 30px rgba(0,0,0,0.25)'
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: []
};

export default config;
