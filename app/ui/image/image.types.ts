import { UImageProps } from '@/types/global'

export interface ImageTypes extends Omit<UImageProps, 'source'> {
	source: string
	width: number
	height: number
	transparentSkeleton?: boolean
	wrapperClassName?: string
}
