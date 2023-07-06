import { ICatalogRenderType } from '@/pages/catalog/catalog.types'
import { UPressableProps } from '@/types/component.types'
import { imageType } from '@/types/global'

export interface CatalogItemProps extends UPressableProps {
	image: imageType
	text1: string
	text2?: string
	id: number
	noHeart?: boolean
	textSize?: number
	type: ICatalogRenderType
}
