import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

export const useButtonAnimation = () => {
	 const scale = useSharedValue(1)
	 const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ scale: scale.value }],
		};
	})
	 const PressConfig = {
		damping: 10,
		mass: 1,
		stiffness: 100,
		overshootClamping: false,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	}
	return {
	animatedStyle,
	PressConfig,
	scale
	}
}