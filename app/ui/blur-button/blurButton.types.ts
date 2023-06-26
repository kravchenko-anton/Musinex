import { IconType, UPressableProps, UViewProps } from '@/types/global'
import { theme } from '../../../tailwind.config'

export interface IBlurButtonTypes
	extends UViewProps,
		Pick<UPressableProps, 'onPress'> {
	icon?: IconType
	iconSize?: number
	color?: keyof typeof theme.colors
	isSmall?: boolean
}