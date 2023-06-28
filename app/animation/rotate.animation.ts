import { IAnimatedProps, IsOpenType } from '@/animation/global'
import { useMemo } from 'react'
import { useAnimatedStyle, withSpring } from 'react-native-reanimated'

interface IRotateAnimation extends IAnimatedProps, IsOpenType {
	direction?: 'up' | 'down'
}
export const useRotateAnimation = ({isOpen, direction, userConfig = {
	damping: 40,
	mass: 0.5,
	stiffness: 100,
} }: IRotateAnimation) => {
const IsOpenType = typeof isOpen === 'boolean'
	const RotateAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotate: withSpring((IsOpenType ? isOpen : isOpen.value) ?
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
