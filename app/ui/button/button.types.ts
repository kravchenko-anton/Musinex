import { IconType, UPressableProps } from '@/types/global'
import en from '@/utils/translate/en.json'

type TranslateTypeTrue = {
	translate: true
	text: keyof typeof en
}

type TranslateTypeFalse = {
	translate: false
	text: string
}

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
} & (TranslateTypeTrue | TranslateTypeFalse)

