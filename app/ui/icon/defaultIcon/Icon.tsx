import { getHexCode } from '@/utils/getColor'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import React, { FC, memo } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { theme } from '../../../../tailwind.config'

interface IconProps extends PressableProps {
	name: keyof typeof Ionicons.glyphMap
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
	...rest
}) => {
	const { colorScheme } = useColorScheme()
	return (
		<Pressable
			pointerEvents={'auto'}
			style={{
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
			}}
			{...rest}
		>
			<Ionicons
				name={name}
				color={
					color
						? color
						: colorScheme === 'light'
						? getHexCode('dark')
						: getHexCode('white')
				}
				size={size}
			/>
		</Pressable>
	)
}

export default memo(UIcon)
