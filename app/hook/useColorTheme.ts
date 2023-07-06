import { Color } from '@/utils/color'
import { useColorScheme } from 'nativewind'
import { useMemo } from 'react'

export const useColorTheme = () => {
	const { colorScheme } = useColorScheme()
	const charcoalToTwilight =
		colorScheme === 'light' ? Color.charcoal : Color.twilight
	const darkToWhite = colorScheme === 'light' ? Color.dark : Color.white
	const darkToTwilight = colorScheme === 'light' ? Color.dark : Color.twilight
	const silverToMidnight =
		colorScheme === 'light' ? Color.silver : Color.midnight
	const darkToSilver = colorScheme === 'light' ? Color.dark : Color.silver
	const whiteToMidnight = colorScheme === 'light' ? Color.white : Color.midnight
	const duskToWhite = colorScheme === 'light' ? Color.dusk : Color.white
	const midnightToSilver =
		colorScheme === 'light' ? Color.midnight : Color.silver

	return useMemo(
		() => ({
			colorScheme,
			charcoalToTwilight,
			darkToWhite,
			darkToTwilight,
			silverToMidnight,
			darkToSilver,
			whiteToMidnight,
			duskToWhite,
			midnightToSilver
		}),
		[colorScheme]
	)
}
