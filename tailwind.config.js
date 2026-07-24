/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C8A96A',
          light: '#E3CFA4',
          dark: '#9C7F45',
        },
      },
    },
  },
  plugins: [],
}
