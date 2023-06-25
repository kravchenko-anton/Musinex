import { IAnimatedProps } from '@/animation/global'
import { SongAnimationState } from '@/pages/song/animation.types'
import { useAnimatedStyle, withSpring } from 'react-native-reanimated'

interface IIconAnimation extends IAnimatedProps, SongAnimationState{
	direction: 'up' | 'down'
}
export const useRotateAnimation = (props: IIconAnimation) => {
	// Rotate the icon
	const IconAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotate: withSpring(props.isOpen.value ?
						(props.direction === 'down' ? '180deg' : '0deg')
							:
					(props.direction === 'up' ? '180deg' : '0deg'),
						{...props.userConfig}
						)
				}
			]
		}
	})
	return { IconAnimation }
}