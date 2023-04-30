import { Ionicons } from '@expo/vector-icons'
import { PressableProps } from 'react-native'

export interface IblurButton extends PressableProps {
	icon?: keyof typeof Ionicons.glyphMap
	iconSize?: number
	color?: string
	isSmall?: boolean
}
