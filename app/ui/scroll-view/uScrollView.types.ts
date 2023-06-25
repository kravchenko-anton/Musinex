import { UScrollViewProps } from '@/types/global'

export interface IUScrollView
	extends Omit<
		UScrollViewProps,
		| 'renderToHardwareTextureAndroid'
		| 'showsHorizontalScrollIndicator'
		| 'showsVerticalScrollIndicator'
		| 'decelerationRate'
	> {
	paddingBottom?: number
}