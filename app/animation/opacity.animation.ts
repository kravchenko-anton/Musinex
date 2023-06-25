import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

export const useOpacityAnimation = (state: boolean) => {
	
	const opacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(state ? 1 : 0, {
				duration: 700
			}),
		}
	})
	return { opacityAnimation }
}