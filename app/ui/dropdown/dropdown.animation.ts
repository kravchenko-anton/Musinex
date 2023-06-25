import { useMemo } from 'react'
import { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated'

export const useDropdownAnimation = (isOpen: boolean) => {
	 const dropdownAnimation = useAnimatedStyle(() => {
		return {
			height: withSpring(isOpen ? '100%' : 0, {
				damping: 20,
				stiffness: 90
			}),
			opacity: withTiming(isOpen ? 1 : 0)
		}
	})

	 return useMemo(() => ({ dropdownAnimation }), [
		dropdownAnimation,
		])
}