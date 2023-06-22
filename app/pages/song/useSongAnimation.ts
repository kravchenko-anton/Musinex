import { WindowHeight, WindowWidth } from '@/utils/screen'
import { useMemo } from 'react'
import { Gesture } from 'react-native-gesture-handler'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

export const useSongAnimation = (isOpen: {value: boolean}) => {
	const panGesture = Gesture.Pan().onEnd(() => {
		isOpen.value = !isOpen.value
	})
	const topBarAnimation = useAnimatedStyle(() => {
		return {
			height: withSpring(isOpen.value	? WindowHeight * 0.75 : 130, {
				damping: 20,
				velocity: 0.5,
				stiffness:90,
				mass: 0.5
			}),
		}
	})
	const ImageAnimation = useAnimatedStyle(() => {
		return {
			height: withSpring(isOpen.value ? 0 : WindowWidth * 0.8, {
				damping: 20,
				velocity: 0.5,
				stiffness:90,
				mass: 0.5
			}),
			width: withSpring(isOpen.value ? 0 : WindowWidth * 0.8, {
				damping: 20,
				velocity: 0.5,
				stiffness:90,
				mass: 0.5
			}),
			opacity: withTiming(isOpen.value ? 0 : 1, {
				duration: 300
			}),
		}
	})
	const TitleAnimation = useAnimatedStyle(() => {
		return {
			width: withSpring(isOpen.value	? '50%' : '80%', {
				damping: 20,
				velocity: 0.5,
				stiffness: 90
			}),
		}
	})
	const useDropDownContentAnimation = useAnimatedStyle(() => {
		return {
			opacity: withSpring(isOpen.value ? 1 : 0, {
				damping: 20,
				velocity: 0.5,
				stiffness:200,
				mass: 0.5,
			}),
			translateY: withTiming(isOpen.value ? 0 : -400, {
				duration: 400,
			}),
		}
	})
	const opacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isOpen.value ? 1 : 0, {
				duration: 700
			}),
			display: isOpen.value ? "flex" : "none",
		}
	})
	const MinusOpacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isOpen.value ? 0 : 1, {
				duration: 700
			}),
			display: isOpen.value ? "none" : "flex",
		}
	})
	const BottomMenuAnimation = useAnimatedStyle(() => {
		return {
			height: withSpring(isOpen.value ? 220 : 280, {
				damping: 20,
				velocity: 0.5,
				stiffness: 90
				
			})
		}
	})
	const IconAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotate: withSpring(isOpen.value ? '180deg' : '0deg', {
						damping: 20,
						stiffness: 90
					})
				}
			]
		}
	})
	return useMemo(() => {
		return {
			panGesture,
			topBarAnimation,
			ImageAnimation,
			TitleAnimation,
			useDropDownContentAnimation,
			opacityAnimation,
			MinusOpacityAnimation,
			BottomMenuAnimation,
			IconAnimation
		}
	}, [isOpen.value]);
}