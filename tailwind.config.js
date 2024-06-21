/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Didact Gothic', 'sans-serif'],
      },
      letterSpacing: {
        custom: '0.09em',
      },
      colors: {
        'bold': '#646464',
        'regular': '#999999',
      },
    },
  },
  plugins: [],
}