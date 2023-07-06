import { UPressableProps } from '@/types/component.types'
import { IconType, ITranslateTypes } from '@/types/global'

export type IButtonTypes = UPressableProps & {
	size: 'small' | 'medium' | 'large'
	width?: number | string
	textSize?: number
	icon?: IconType
	iconSize?: number
	center?: boolean
	borderRadius?: number
	variant?: 'primary' | 'default'
	uppercase?: boolean
	translate?: boolean
	text: ITranslateTypes
}
