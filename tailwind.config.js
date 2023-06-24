/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			silver: '#E5E5E5', // lightGray
			charcoal: '#888888', //	primaryGray
			dark: '#000', // dark
			primary: '#32B47D', // primary
			midnight: '#101010', // primaryBlack
			twilight: '#1B2021', // lightBlack
			dusk: '#202020', // veryLightBlack
			white: '#fff',  // white
			crimson: '#DC3F41', // primaryRed
			sunshine: '#FFBE0B', // yellow
			transparent: colors.transparent
		}
	},
	plugins: []
}
