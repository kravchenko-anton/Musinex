import { ICatalogTypes } from '@/pages/catalog/catalog.types'

export interface ICatalogContent extends ICatalogTypes {
	headerTitle: string
	description: string
	paddingTop?: number
	gradientEnd?: number
}