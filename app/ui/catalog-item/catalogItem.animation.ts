import { IAnimatedProps, isOpen } from '@/animation/global'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

interface IUseOpacityAnimation extends IAnimatedProps, isOpen {
}
export const useCatalogItemAnimation = (props: IUseOpacityAnimation) => {
	
	const opacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(props.isOpen ? 1 : 0, {
	...props.userConfig
			}),
		}
	})
	return { opacityAnimation }
}