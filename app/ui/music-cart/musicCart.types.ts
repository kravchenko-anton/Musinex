import { UImageProps, UPressableProps } from '@/types/component.types'
import { imageType } from '@/types/global'

export interface MusicCartProps
	extends Omit<UPressableProps, 'style'>,
		Pick<UImageProps, 'style'> {
	text1: string
	text2?: string
	image: imageType
	wrapClassNames?: string
	textCenter?: boolean
}
