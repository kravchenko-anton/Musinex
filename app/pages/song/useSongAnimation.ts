import { WindowHeight, WindowWidth } from '@/utils/screen'
import { useMemo } from 'react'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

export const useSongAnimation = (isOpen: boolean) => {
	const topBarAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen	? WindowHeight * 0.78 : 130, {
duration: 800			}),
		}
	})
	const ImageAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen ? 0 : WindowWidth * 0.8, {
				duration: 800			}),
			width: withTiming(isOpen ? 0 : WindowWidth * 0.8, {
				duration: 800,
			}),
			opacity: withSpring(isOpen ? 0 : 1, {
				duration: 800
			}),
			display: isOpen ? "none" : "flex",
		}
	})
	const useDropDownContentAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen ?
				WindowHeight * 0.6
				: 0, {
				duration: 800	}),
			opacity: withTiming(isOpen ? 1 : 0, {
				duration: 800
			}),
			display: isOpen ? "flex" : "none",
		}
	})
	const opacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isOpen ? 1 : 0, {
				duration: 700
			}),
			display: isOpen ? "flex" : "none",
		}
	})
	const MinusOpacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isOpen ? 0 : 1, {
				duration: 700
			}),
		}
	})
	const BottomMenuAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen ? 200 : 280, {
				duration: 1000
			})
		}
	})

	return useMemo(() => ({ topBarAnimation,BottomMenuAnimation,  useDropDownContentAnimation, ImageAnimation, opacityAnimation, MinusOpacityAnimation }), [
		isOpen
		])
}