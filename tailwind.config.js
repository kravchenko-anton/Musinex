/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			lightGray: '#D9D7D5',
			dark: '#000',
			primaryBlack: '#101010',
			lightBlack: '#151515',
			VeryLightBlack: '#202020',
			white: '#fff',
			transparent: colors.transparent
		}
	},
	plugins: []
}
