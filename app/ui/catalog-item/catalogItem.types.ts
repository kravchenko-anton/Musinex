import { ICatalogRenderType } from '@/pages/catalog/catalog.types'
import { imageType, UPressableProps } from '@/types/global'

export interface ICatalogItem extends UPressableProps {
	image: imageType
	text1: string
	text2?: string
	id: number
	noHeart?: boolean
	textSize?: number
	type: ICatalogRenderType
}