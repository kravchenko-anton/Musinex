import { IconType, ITranslateTypes, UPressableProps } from '@/types/global'

export interface ButtonTypes extends UPressableProps {
	size: 'small' | 'medium' | 'large'
	text: ITranslateTypes
	width?: number | string
	textSize?: number
	iconSize?: number
	center?: boolean
	icon?: IconType
	borderRadius?: number
	variant?: 'primary' | 'default'
	translate?: boolean
	uppercase?: boolean
}
