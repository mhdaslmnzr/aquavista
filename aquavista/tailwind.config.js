/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        lato: ['var(--font-lato)', 'sans-serif'],
      },
      colors: {
        'primary-turquoise': 'var(--color-primary-turquoise)',
        'primary-deep-blue': 'var(--color-primary-deep-blue)',
        'background-soft-white': 'var(--color-background-soft-white)',
        'accent-coral': 'var(--color-accent-coral)',
        'accent-sandy-beige': 'var(--color-accent-sandy-beige)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'pulse-gentle': 'pulse-gentle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};