/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Dark blue — brand "Dark Blue" #1e3667 anchored at navy-900 (most-used token).
        navy: {
          50: '#eef2f9',
          100: '#dde4f2',
          200: '#bccbe6',
          300: '#93acd4',
          400: '#6c8cc0',
          500: '#4f72ab',
          600: '#3a5d97',
          700: '#2c4d83',
          800: '#24406f',
          900: '#1e3667',
          950: '#14243f',
        },
        // Accent scale is driven by CSS variables (see :root / [data-theme] in index.css)
        // so the whole palette can be swapped at runtime by the PaletteToggle.
        teal: {
          50: 'rgb(var(--accent-50) / <alpha-value>)',
          100: 'rgb(var(--accent-100) / <alpha-value>)',
          200: 'rgb(var(--accent-200) / <alpha-value>)',
          300: 'rgb(var(--accent-300) / <alpha-value>)',
          400: 'rgb(var(--accent-400) / <alpha-value>)',
          500: 'rgb(var(--accent-500) / <alpha-value>)',
          600: 'rgb(var(--accent-600) / <alpha-value>)',
          700: 'rgb(var(--accent-700) / <alpha-value>)',
          800: 'rgb(var(--accent-800) / <alpha-value>)',
          900: 'rgb(var(--accent-900) / <alpha-value>)',
        },
        ink: '#0a0f1c',
        // Brand warm accents — use sparingly.
        gold: '#ffdb49',
        flame: '#cf531a',
      },
      fontFamily: {
        display: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['"Montserrat Variable"', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 31, 58, 0.18)',
        glow: '0 16px 40px -14px rgb(var(--accent-500) / 0.18)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
