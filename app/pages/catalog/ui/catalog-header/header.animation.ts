import { inputRange } from '@/pages/catalog/catalog.constant'
import { Animated } from 'react-native'

export const useHeaderAnimation = (y: Animated.Value) => {
	const opacity = y.interpolate({
		inputRange,
		outputRange: [0, 0, 1.6]
	})

	return {
		opacity
	}
}
