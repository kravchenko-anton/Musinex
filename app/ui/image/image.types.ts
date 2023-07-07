import { UImageProps } from '@/types/component.types'
import { Width_Height, WrapperProps } from '@/types/global'

export interface ImageTypes
	extends Omit<UImageProps, 'source'>,
		Width_Height,
		WrapperProps<UImageProps['style']> {
	url: string
	transparentSkeleton?: boolean
}
