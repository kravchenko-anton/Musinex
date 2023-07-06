import { ICatalogRenderType } from '@/pages/catalog/catalog.types'
import { UPressableProps } from '@/types/component.types'

export interface HeartProps extends UPressableProps {
	id: number
	type: ICatalogRenderType
	size?: number
}
