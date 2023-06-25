import { ICatalogRenderType, ICatalogTypes } from '@/pages/catalog/catalog.types'
import { IconType } from '@/types/global'

export interface ICatalogHeaderProps extends ICatalogTypes {
	title: string
	rightIcon?: IconType
	rightIconFunction?: () => void
	type?: ICatalogRenderType
	id?: number
}