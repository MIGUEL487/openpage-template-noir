import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        noir: {
          950: '#080808',
          900: '#111111',
          850: '#161616',
          800: '#1E1E1E',
          700: '#2A2A2A',
          600: '#3D3D3D',
          500: '#666666',
          400: '#9E9A94',
          300: '#BFBAB2',
          200: '#D8D4CC',
          100: '#F0EDE8',
          carmine: {
            DEFAULT: '#9B2428',
            hover: '#BA2D32',
            dark: '#5C1518',
            subtle: 'rgba(155, 36, 40, 0.15)',
          },
        },
      },
      fontFamily: {
        display: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-space)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        'bezel-outer': '2rem',
        'bezel-inner': 'calc(2rem - 0.375rem)',
        'bezel-sm-outer': '1.25rem',
        'bezel-sm-inner': 'calc(1.25rem - 0.25rem)',
      },
      letterSpacing: {
        'widest-avant': '0.35em',
        'tight-editorial': '-0.035em',
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at 50% 50%, rgba(155, 36, 40, 0.08) 0%, rgba(8, 8, 8, 0.8) 60%, #080808 100%)',
        'carmine-glow': 'radial-gradient(ellipse at top, rgba(155, 36, 40, 0.22), transparent 70%)',
      },
      animation: {
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
