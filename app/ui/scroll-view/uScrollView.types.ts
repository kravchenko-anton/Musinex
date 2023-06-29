import { UScrollViewType } from '@/types/global'

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