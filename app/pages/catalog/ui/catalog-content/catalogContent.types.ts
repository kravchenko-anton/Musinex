import { YPositionType } from '@/pages/catalog/catalog.types'
import { UViewProps } from '@/types/component.types'
import { WrapperProps } from '@/types/global'

export interface CatalogContentProps
	extends YPositionType,
		Pick<WrapperProps<UViewProps['style']>, 'wrapperStyle'> {
	headerTitle: string
	description: string
	paddingTop?: number
	gradientEnd?: number
}
