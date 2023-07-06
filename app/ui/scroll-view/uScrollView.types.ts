import { UScrollViewType } from '@/types/component.types'

export interface UScrollViewProps
	extends Omit<
		UScrollViewType,
		| 'renderToHardwareTextureAndroid'
		| 'showsHorizontalScrollIndicator'
		| 'showsVerticalScrollIndicator'
		| 'decelerationRate'
	> {
	paddingBottom?: number
}
