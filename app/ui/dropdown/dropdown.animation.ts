import { IAnimatedProps } from '@/animation/global'
import { SongState } from '@/pages/song/animation.types'
import { useMemo } from 'react'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

interface IDropdownAnimation extends IAnimatedProps, SongState {}
export const useDropdownAnimation = (props: IDropdownAnimation) => {
	 const dropdownAnimation = useAnimatedStyle(() => {
		return {
			height: withSpring(props.isOpen ? '100%' : 0, {
				damping: 20,
				stiffness: 90
			}),
			opacity: withTiming(props.isOpen ? 1 : 0)
		}
	})

	 return useMemo(() => ({ dropdownAnimation }), [
		dropdownAnimation,
		])
}