const flattenColorPalette =
	require('tailwindcss/lib/util/flattenColorPalette').default
import { theme } from '../../tailwind.config'

const flattenedColors = flattenColorPalette(theme.colors)

export function getHexCode(colorName: keyof typeof theme.colors) {
	return flattenedColors[colorName]
}
