import { ICatalogRenderType } from '@/pages/catalog/catalog.types'
import { UPressableProps } from '@/types/global'

export interface ISongItem extends UPressableProps {
	image: {
		uri: string
		width: number
		height: number
		border?: number
	}
	text1: string
	text2?: string
	id: number
	noHeart?: boolean
	textSize?: number
	type: ICatalogRenderType
}