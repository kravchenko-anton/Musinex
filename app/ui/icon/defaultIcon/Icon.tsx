import { usePressAnimation } from '@/animation/usePressAnimation'
import { IconType, UPressableProps } from '@/types/global'
import { getHexCode } from '@/utils/getColor'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import { FC, memo } from 'react'
import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'
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
		<Pressable pointerEvents={'auto'} {...pressFunctions} {...props}>
			<Animated.View
				style={[
					{
						justifyContent: 'center',
						alignItems: 'center',
						padding: padding,
						borderWidth: border ? 2 : 0,
						borderColor:
							colorScheme === 'light'
								? getHexCode('dark')
								: getHexCode('lightBlack'),
						backgroundColor: backgroundColor,
						borderRadius: borderRadius
					},
					animatedStyle
				]}
			>
				<Ionicons
					name={name}
					color={
						color
							? getHexCode(color)
							: colorScheme === 'light'
							? getHexCode('dark')
							: getHexCode('white')
					}
					size={size}
				/>
			</Animated.View>
		</Pressable>
	)
}

export default memo(UIcon)
