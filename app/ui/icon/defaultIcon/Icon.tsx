import { Ionicons } from '@expo/vector-icons/'
import { useColorScheme } from 'nativewind'
import React, { FC, memo } from 'react'

import { Pressable, PressableProps } from 'react-native'


export interface IconProps extends PressableProps {
	name: keyof typeof Ionicons.glyphMap
	color?: string
	size?: number
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}

const Icon: FC<IconProps> =
	({
		 name,
		 color,
		 size = 24,
		 backgroundColor = 'transparent',
		 borderRadius = 10,
		 padding = 10,
		 ...rest
	 }) => {
		const { colorScheme } = useColorScheme()
		return (
			<Pressable style={{
				justifyContent: 'center',
				alignItems: 'center',
				padding: padding,
				backgroundColor: backgroundColor,
				borderRadius: borderRadius
			}}  {...rest}>
				<Ionicons name={name} color={color ? color :
					colorScheme === 'light' ? '#000' : '#fff'
				} size={size} />
			</Pressable>
		)
	}

export default memo(Icon)
