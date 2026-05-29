/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef3fb',
          100: '#d6e1f4',
          200: '#adc2e8',
          300: '#7e9bd6',
          400: '#4f72bf',
          500: '#33539e',
          600: '#264080',
          700: '#1d3266',
          800: '#142547',
          900: '#0b1f3a',
          950: '#071426',
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
      },
      fontFamily: {
        display: ['"Sora Variable"', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(11, 31, 58, 0.18)',
        glow: '0 0 0 1px rgb(var(--accent-500) / 0.25), 0 18px 50px -12px rgb(var(--accent-500) / 0.35)',
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
