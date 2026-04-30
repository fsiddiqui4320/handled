import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        handled: {
          950: '#0e2318',
          900: '#1a2c20',
          800: '#1a3d2e',
          700: '#234d3a',
          600: '#2a5c46',
          400: '#3d8c64',
          300: '#4daf7c',
          200: '#7ecfa0',
          100: '#b8e8cc',
          50:  '#e1f5ee',
        },
        stone: {
          950: '#1a2420',
          800: '#3a4440',
          600: '#5a6660',
          400: '#8a9490',
          200: '#cdd5d0',
          100: '#e8efeb',
          50:  '#f5f7f5',
        },
        mint: '#f0f7f2',
      },
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
