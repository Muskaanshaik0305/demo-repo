import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A192F',
        electric: '#3B82F6'
      },
      boxShadow: {
        glow: '0 0 30px rgba(59, 130, 246, 0.3)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.15) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
