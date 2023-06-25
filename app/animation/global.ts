import { Image, Pressable, View } from 'react-native'
import Animated, { WithSpringConfig, WithTimingConfig } from 'react-native-reanimated'

export const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
export const AnimatedView = Animated.createAnimatedComponent(View)

export const AnimatedImage	= Animated.createAnimatedComponent(Image)



export interface IAnimatedProps  {
	userConfig?: WithSpringConfig | WithTimingConfig
}

