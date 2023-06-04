import { ITranslateTypes } from '@/types/global'
import { Ionicons } from '@expo/vector-icons'
import { PressableProps } from 'react-native'

export interface IButton extends PressableProps {
	size: 'small' | 'medium' | 'large'
	width?: number | string
	text: ITranslateTypes
	textSize?: number
	iconSize?: number
	center?: boolean
	icon?: keyof typeof Ionicons.glyphMap
	borderRadius?: number
	variant?: 'primary' | 'light'
	translate?: boolean
}
