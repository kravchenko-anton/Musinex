import { YPositionType } from '@/pages/catalog/catalog.types'

export interface CatalogContentProps extends YPositionType {
	headerTitle: string
	description: string
	paddingTop?: number
	gradientEnd?: number
}