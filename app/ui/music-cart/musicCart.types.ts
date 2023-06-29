import { imageType, UPressableProps } from '@/types/global'

export interface MusicCartProps extends UPressableProps {
	name: string
	image: imageType
	wrapperWidth?: number | string
	imageClassNames?: string
	wrapClassNames?: string
	textCenter?: boolean
	artists?: string
}
