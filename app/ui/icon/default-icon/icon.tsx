import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import { IconProps } from '@/ui/icon/default-icon/icon.types'
import { color as Color } from '@/utils/color'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
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
	const { colorScheme } = useColorScheme()
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			style={[{
				justifyContent: 'center',
				alignItems: 'center',
				padding: padding,
				borderWidth: border ? 2 : 0,
				borderColor:
					colorScheme === 'light'
						? Color.dark
						: Color.twilight,
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
							? Color[color]
							: colorScheme === 'light'
							? Color.dark
							: Color.white
					}
					size={size}
				/>
		</AnimatedPressable>
	)
}

export default memo(UIcon)
