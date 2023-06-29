import { ICatalogRenderType, YPositionType } from '@/pages/catalog/catalog.types'
import { IconType } from '@/types/global'

export interface CatalogHeaderProps extends YPositionType {
	title: string
	rightIcon?: IconType
	rightIconFunction?: () => void
	type?: ICatalogRenderType
	id?: number
}