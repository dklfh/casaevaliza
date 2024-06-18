/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{html.js}'],
  theme: {
    extend: {
      fontFamily: {
        gothic: ['Gothic', 'sans-serif'],
        gothicBold: ['Gothic Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}