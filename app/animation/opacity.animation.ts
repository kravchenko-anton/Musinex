import { AnimationConfigType, IsOpenType } from '@/animation/global'
import { useMemo } from 'react'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'


interface OpacityAnimationProps extends AnimationConfigType, IsOpenType {}
export const useOpacityAnimation = ({isOpen,  userConfig = {
	duration: 400
} }: OpacityAnimationProps) => {
const isOpenType = typeof isOpen === 'boolean'
		const opacityAnimation = useAnimatedStyle(() => ({
		opacity: withTiming((isOpenType ? isOpen : isOpen.value) ? 1 : 0, userConfig),
		display: (isOpenType ? isOpen : isOpen.value) ? 'flex' : 'none',
		}))
	const minusOpacityAnimation = useAnimatedStyle(() => ({
			opacity: withTiming((isOpenType ? isOpen : isOpen.value) ? 0 : 1, userConfig),
			display: (isOpenType ? isOpen : isOpen.value) ? 'none' : 'flex'
		}))
	return useMemo(
		() => ({ opacityAnimation, minusOpacityAnimation }),
		[isOpen]
	)
}
