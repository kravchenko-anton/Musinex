import { AnimationConfigType, IsOpenType } from '@/animation/global'
import { useMemo } from 'react'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'


interface OpacityAnimationProps extends AnimationConfigType, IsOpenType {}
export const useOpacityAnimation = ({isOpen,  userConfig = {
	duration: 400
} }: OpacityAnimationProps) => {
const IsOpenType = typeof isOpen === 'boolean'
		const OpacityAnimation = useAnimatedStyle(() => {
		return {
		opacity: withTiming((IsOpenType ? isOpen : isOpen.value) ? 1 : 0, userConfig),
		display: (IsOpenType ? isOpen : isOpen.value) ? 'flex' : 'none',
		}
	})
	const MinusOpacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming((IsOpenType ? isOpen : isOpen.value) ? 0 : 1, userConfig),
			display: (IsOpenType ? isOpen : isOpen.value) ? 'none' : 'flex'
		}
	})
	return useMemo(
		() => ({ OpacityAnimation, MinusOpacityAnimation }),
		[isOpen]
	)
}
