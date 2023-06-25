import { useAnimatedStyle, withSpring } from 'react-native-reanimated'

interface IIconAnimation {
	state: boolean
	direction: 'up' | 'down'
}
export const useIconAnimation = ({direction,state}: IIconAnimation) => {
	// Rotate the icon
	const IconAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotate: withSpring(state ?
						(direction === 'down' ? '180deg' : '0deg')
							:
					(direction === 'up' ? '180deg' : '0deg'),
						{
						damping: 20,
						stiffness: 90
					})
				}
			]
		}
	})
	return { IconAnimation }
}