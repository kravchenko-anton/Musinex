import { YPositionType } from '@/pages/catalog/catalog.types'
import { ColorProps } from '@/types/color'

export interface CatalogBackgroundProps extends YPositionType, ColorProps {
	poster?: string
}
