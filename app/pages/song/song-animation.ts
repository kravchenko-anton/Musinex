import { WindowHeight, WindowWidth } from '@/utils/screen'
import { useMemo } from 'react'
import { Gesture } from 'react-native-gesture-handler'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

export const useSongAnimation = ({isOpen}: any) => {
	const PanGesture = useMemo(() => Gesture.Pan().onEnd(() => {
		isOpen.value = !isOpen.value
	}).activeOffsetY([-20, 20]), [isOpen.value])
	
		const TopBarAnimation = useAnimatedStyle(() => {
			return {
				height: withSpring(isOpen.value	? WindowHeight * 0.75 : 130, {
					damping: 20,
					velocity: 0.5,
					stiffness:90,
					mass: 0.5,
				}),
			}
		}, [isOpen.value])
	

	const WidthAnimation = useAnimatedStyle(() => {
		return {
			width: withSpring(isOpen.value	? '50%' : '80%', {
				damping: 20,
				velocity: 0.5,
				stiffness: 90
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
	const useDropDownContentAnimation = useAnimatedStyle(() => {
		return {
			opacity: withSpring(isOpen.value ? 1 : 0, {
				damping: 20,
				velocity: 0.5,
				stiffness:90,
				mass: 0.5,
			}),
			translateY: withTiming(isOpen.value ? 0 : -400, {
				duration: 400,
			}),
			pointerEvents: isOpen.value ? 'auto' : 'none',
		}
	}, [isOpen.value])
	
	const BottomMenuAnimation = useAnimatedStyle(() => {
		return {
			height: withSpring(isOpen.value ? 220 : 280, {
				damping: 20,
				velocity: 0.5,
				stiffness: 90
			})
		}
	})
	return useMemo(() => {
		return {
			PanGesture,
			TopBarAnimation,
			ImageAnimation,
			WidthAnimation,
			useDropDownContentAnimation,
			BottomMenuAnimation,
		}
	}, [isOpen.value]);
}