import { useColorScheme } from 'nativewind'
import { useEffect, useMemo } from 'react'
import {
	Extrapolate,
	interpolate,
	useAnimatedStyle,
	useSharedValue,
	withSpring
} from 'react-native-reanimated'

export const useThemeSwitcherAnimation = () => {
	const { colorScheme } = useColorScheme()
	const scheme = useSharedValue(0)

	useEffect(() => {
		scheme.value = withSpring(colorScheme === 'dark' ? 1 : 0)
	}, [colorScheme])

	const darkStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(scheme.value, [0, 1], [1, 0.1], Extrapolate.CLAMP)
			}
		]
	}))

	const lightStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: scheme.value
			}
		],
		opacity: scheme.value
	}))

	return useMemo(
		() => ({ scheme, darkStyle, lightStyle }),
		[scheme, darkStyle, lightStyle]
	)
}
