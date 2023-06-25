import { IAnimatedProps } from '@/animation/global'
import { SongState } from '@/pages/song/animation.types'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface IUseOpacityAnimation extends  IAnimatedProps,SongState {}
export const useOpacityAnimation = (props: IUseOpacityAnimation) => {
	
	const opacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(props.isOpen ? 1 : 0, {
	...props.userConfig
			}),
		}
	})
	return { opacityAnimation }
}