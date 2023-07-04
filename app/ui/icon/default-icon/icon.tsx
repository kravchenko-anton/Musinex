import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import { useColorTheme } from '@/hook/useColorTheme'
import { IconProps } from '@/ui/icon/default-icon/icon.types'
import { Ionicons } from '@expo/vector-icons'
import { FC, memo } from 'react'

const UIcon: FC<IconProps> = ({
	name,
	color,
	size = 24,
	border = false,
	backgroundColor = 'transparent',
	borderRadius = 16,
	padding = 8,
	...props
}) => {
	const { darkToWhite,darkToTwilight } = useColorTheme()
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			style={[{
				justifyContent: 'center',
				alignItems: 'center',
				padding: padding,
				borderWidth: border ? 2 : 0,
				borderColor: darkToTwilight,
				backgroundColor: backgroundColor,
				borderRadius: borderRadius
			},
			animatedStyle
		]}
			pointerEvents={'auto'}
			{...pressFunctions} {...props}>
				<Ionicons
					name={name}
					color={
						color
							? color
							: darkToWhite
					}
					size={size}
				/>
		</AnimatedPressable>
	)
}

export default memo(UIcon)
