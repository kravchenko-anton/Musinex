/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      lightGray: '#D9D7D5',
      darkGray: '#6C6A6A',
      gray: "#AFADAB",
      black: '#000',
      white: '#fff',
      transparent: colors.transparent
    }
  },
  plugins: []
}
