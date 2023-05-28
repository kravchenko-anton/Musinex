import { Ionicons } from '@expo/vector-icons'
import { PressableProps, ViewProps } from 'react-native'

export interface IblurButton extends ViewProps, Pick<PressableProps, 'onPress'> {
	icon?: keyof typeof Ionicons.glyphMap
	iconSize?: number
	color?: string
	isSmall?: boolean
}
