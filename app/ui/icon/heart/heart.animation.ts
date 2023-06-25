import { useEffect, useMemo } from 'react'
import { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

export const useHeartAnimation = (isSmashed: boolean) => {
	const liked = useSharedValue(0)

	useEffect(() => {
		liked.value = withSpring(isSmashed ? 1 : 0)
	}, [isSmashed])

	const outlineStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: interpolate(liked.value, [0, 1], [1, 0.8], Extrapolate.CLAMP)
			}
		]
	}))

	const fillStyle = useAnimatedStyle(() => ({
		transform: [
			{
				scale: liked.value
			}
		],
		opacity: liked.value
	}))

	return useMemo(() => ({ liked, outlineStyle, fillStyle }), [liked, outlineStyle, fillStyle])
}
