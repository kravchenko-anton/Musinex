import { ITranslateTypes, UPressableProps } from '@/types/global'
import { Ionicons } from '@expo/vector-icons'

export interface IButton extends UPressableProps {
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
