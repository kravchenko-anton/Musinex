import { Animated } from 'react-native'
import { HEADER_HEIGHT, inputRange } from '../../catalogConstant'

export const useBackgroundAnimation = (y: Animated.Value) => {
	const scale = y.interpolate({
		inputRange,
		outputRange: [3, 1, 2],
		extrapolate: 'clamp'
	})
	const opacity = y.interpolate({
		inputRange,
		outputRange: [0, 1, 0],
		extrapolate: 'clamp'
	})

	const translateY = y.interpolate({
		inputRange,
		outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.01]
	})

	return {
		scale,
		opacity,
		translateY
	}
}
