import { Ionicons } from '@expo/vector-icons/'
import React, { FC, memo } from 'react'

import { Pressable } from 'react-native'


export interface IconProps {
	name: keyof typeof Ionicons.glyphMap
	color?: string
	onPress?: () => void
	size?: number
	сlassNames?: string
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}

const Icon:FC<IconProps> = (props, {...rest}) => {
	const color = props.color ? props.color : 'white'
	return (
		<Pressable onPress={props.onPress} style={{
			justifyContent: 'center',
			alignItems: 'center',
			padding: props.padding ? props.padding : 10,
			backgroundColor: props.backgroundColor ? props.backgroundColor : 'transparent',
			borderRadius: props.borderRadius ? props.borderRadius : 10,
		}} className={props.сlassNames} {...rest}>
	<Ionicons name={props.name} color={color} size={props.size ? props.size : 24}  />
		</Pressable>
		)
}

export default memo(Icon)
