/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6E56CF',
        secondary: '#10B981',
        black: '#0A0A0A',
        'gray-950': '#121212',
        'gray-900': '#1A1A1A',
        'gray-800': '#2A2A2A',
        'gray-700': '#3A3A3A',
        'gray-400': '#888888',
        'gray-300': '#B0B0B0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};