import { UViewProps } from '@/types/component.types'
import { Ionicons } from '@expo/vector-icons'
import en from '../utils/translate/en.json'

export type ITranslateTypes = keyof typeof en | string

export type IconType = keyof typeof Ionicons.glyphMap
export type CatalogProps = {
	id: number
}
export type Style = UViewProps['style']
export type Width_Height = { width: number; height: number }
export type imageType = {
	url: string
	border?: number
} & Width_Height
