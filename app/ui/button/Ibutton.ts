import { Ionicons } from '@expo/vector-icons/'

export interface Ibutton {
	size: 'small' | 'medium' | 'large'
	width?: number | string
	text: string
	textSize?: number
	iconSize?: number
	center?: boolean
	icon?: keyof typeof Ionicons.glyphMap
	borderRadius?: number
	variant?: 'dark' | 'light'
}
