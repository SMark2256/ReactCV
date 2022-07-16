/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultConfig')

// tailwind.config.js
module.exports = {
  purge: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}