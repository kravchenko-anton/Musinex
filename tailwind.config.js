/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			lightGray: '#E5E5E5',
			primaryGray: '#4C4D51',
			dark: '#000',
			primary: '#32B47D',
			primaryBlack: '#101010',
			lightBlack: '#1B2021',
			veryLightBlack: '#202020',
			white: '#fff',
			red: '#FF0000',
			transparent: colors.transparent
		}
	},
	plugins: []
}
