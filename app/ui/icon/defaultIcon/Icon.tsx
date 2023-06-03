import { getHexCode } from '@/utils/getColor'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import React, { FC, memo } from 'react'
import { Pressable, PressableProps } from 'react-native'
import { theme } from '../../../../tailwind.config'

interface IconProps extends PressableProps {
	name:  keyof typeof Ionicons.glyphMap
	color?: keyof typeof theme.colors
	size?: number
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}

const UIcon: FC<IconProps> =
	({
		 name,
		 color,
		 size = 24,
		 backgroundColor = 'transparent',
		 borderRadius = 12,
		 padding = 10,
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
					backgroundColor: backgroundColor,
					borderRadius: borderRadius
				}}
				{...rest}
			>
				<Ionicons
					name={name}
					color={color ? color : colorScheme === 'light' ? getHexCode('dark') : getHexCode('white')}
					size={size}
				/>
			</Pressable>
		)
	}

export default memo(UIcon)
