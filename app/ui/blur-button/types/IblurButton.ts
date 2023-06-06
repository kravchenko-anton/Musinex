import { UPressableProps, UViewProps } from '@/types/global'
import { Ionicons } from '@expo/vector-icons'

export interface IblurButton
	extends UViewProps,
		Pick<UPressableProps, 'onPress'> {
	icon?: keyof typeof Ionicons.glyphMap
	iconSize?: number
	color?: string
	isSmall?: boolean
}
