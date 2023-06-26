import { UImageProps, Width_Height } from '@/types/global'

export interface ImageTypes extends Omit<UImageProps, 'source'>, Width_Height {
	url: string
	transparentSkeleton?: boolean
	wrapperClassName?: string
}
