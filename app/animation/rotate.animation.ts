import { AnimationConfigType, IsOpenType } from '@/animation/global'
import { useMemo } from 'react'
import { useAnimatedStyle, withSpring } from 'react-native-reanimated'

interface RotateAnimationProps extends AnimationConfigType, IsOpenType {
	direction?: 'up' | 'down'
}
export const useRotateAnimation = ({isOpen, direction, userConfig = {
	damping: 40,
	mass: 0.5,
	stiffness: 100,
} }: RotateAnimationProps) => {
const isOpenType = typeof isOpen === 'boolean'
	const RotateAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotate: withSpring((isOpenType ? isOpen : isOpen.value) ?
							direction === 'up' ? '0deg' : "180deg" :
							direction === 'down' ? '0deg' : "180deg",
							userConfig
					)
				}
			]
		}
	})
	return useMemo(
		() => ({ RotateAnimation }),
		[isOpen]
	)
}
