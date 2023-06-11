import { UImageProps } from '@/types/global'

export interface IImage extends Omit<UImageProps, 'source'> {
	source: string
	width: number
	height: number
	wrapperClassName?: string
}
