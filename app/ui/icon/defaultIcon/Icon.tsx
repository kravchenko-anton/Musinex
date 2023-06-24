import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/usePressAnimation'
import { IconType, UPressableProps } from '@/types/global'
import { color as Color } from '@/utils/getColor'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import { FC, memo } from 'react'
import { theme } from '../../../../tailwind.config'

interface IconProps extends UPressableProps {
	name: IconType
	color?: keyof typeof theme.colors
	size?: number
	border?: boolean
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}

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
