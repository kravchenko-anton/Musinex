import { YPositionType } from '@/pages/catalog/catalog.types'
import { ColorProps } from '@/utils/color'


export interface CatalogBackgroundProps extends YPositionType, ColorProps {
	poster?: string
}
