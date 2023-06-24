const flattenColorPalette =
	require('tailwindcss/lib/util/flattenColorPalette').default
import { theme } from '../../tailwind.config'

const flattenedColors = flattenColorPalette(theme.colors)



export const color = theme.colors
