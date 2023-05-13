import { IIconName } from '@/types/IconTypes'
import { PressableProps } from 'react-native'

export interface IButton extends PressableProps {
	size: 'small' | 'medium' | 'large'
	width?: number | string
	text: string
	textSize?: number
	iconSize?: number
	center?: boolean
	icon?: IIconName
	borderRadius?: number
	variant?: 'primary' | 'light'
}
