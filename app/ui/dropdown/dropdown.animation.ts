import { AnimationConfigType, IsOpenType } from '@/animation/global'
import { useMemo } from 'react'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

interface DropdownAnimationProps extends AnimationConfigType, IsOpenType {
}
export const useDropdownAnimation = (props: DropdownAnimationProps) => {
		const dropdownAnimation = useAnimatedStyle(() => ({
			height: withSpring(props.isOpen ? '100%' : 0, {
				damping: 20,
				stiffness: 90
			}),
			opacity: withTiming(props.isOpen ? 1 : 0)
		}))


	return useMemo(() => ({ dropdownAnimation }), [
		dropdownAnimation
		])
}