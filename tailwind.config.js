/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			lightGray: '#D9D7D5',
			primaryGray: '#e7e7e7',
			dark: '#000',
			primary: '#5b0eeb',
			primaryBlack: '#101010',
			lightBlack: '#151515',
			veryLightBlack: '#202020',
			white: '#fff',
			transparent: colors.transparent
		}
	},
	plugins: []
}
