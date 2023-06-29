import { ICatalogRenderType } from '@/pages/catalog/catalog.types'
import { UPressableProps } from '@/types/global'

export interface HeartProps extends UPressableProps {
	id: number
	type: ICatalogRenderType
	size?: number
}