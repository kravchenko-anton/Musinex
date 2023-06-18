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
	 const dropdownIconAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotate: withSpring(isOpen ? '180deg' : '0deg', {
						damping: 20,
						stiffness: 90
					})
				}
			]
		}
	})
	 return { dropdownAnimation, dropdownIconAnimation }
}