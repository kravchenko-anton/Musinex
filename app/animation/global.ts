import { Image, Pressable, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

export const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
export const AnimatedView = Animated.createAnimatedComponent(View)

export const AnimatedImage	= Animated.createAnimatedComponent(Image)

export const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)