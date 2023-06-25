/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		colors: {
			silver: '#E5E5E5',
			charcoal: '#888888',
			dark: '#000',
			primary: '#32B47D',
			midnight: '#101010',
			twilight: '#1B2021',
			dusk: '#202020',
			white: '#fff',
			crimson: '#DC3F41',
			sunshine: '#FFBE0B',
			transparent: colors.transparent
		}
	},
	plugins: []
}
