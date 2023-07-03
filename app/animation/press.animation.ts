import { AnimationConfigType } from '@/animation/global'
import { useMemo } from 'react'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export const usePressAnimation =
	({ userConfig = { duration: 100, }
		}: AnimationConfigType = {}
	) => {
	const scale = useSharedValue(1)
	const animatedStyle = useAnimatedStyle(() => ({
			transform: [{ scale: scale.value}]
		}))

	const onPressIn = () => {
		scale.value = withTiming(0.97, userConfig)
	}
	const onPressOut = () => {
		scale.value = withTiming(1, userConfig)
	}
	const pressFunctions = {
		onPressIn,
		onPressOut
	}
	return useMemo(
		() => ({ animatedStyle, pressFunctions }),
		[animatedStyle, pressFunctions]
	)
}
