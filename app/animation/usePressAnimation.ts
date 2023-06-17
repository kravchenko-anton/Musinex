import { useMemo } from 'react'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export const usePressAnimation = () => {
	 const scale = useSharedValue(1)
	 const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scale.value }],
		};
	})
	const config = {
		duration: 100,
	}
	const onPressIn = () => {
		scale.value = withTiming(0.97, config)
	}
	const onPressOut = () => {
		scale.value = withTiming(1, config)
	}
	const pressFunctions	= {
		onPressIn,
		onPressOut,
	}
	return useMemo(() => ({ animatedStyle, pressFunctions }), [animatedStyle, pressFunctions])
}
