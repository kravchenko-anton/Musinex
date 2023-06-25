import { UPressableProps } from '@/types/global'

export interface IMusicCartTypes extends UPressableProps {
	name: string
	image: {
		url: string
		width: number
		height: number
		border?: number
	}
	wrapperWidth?: number | string
	imageClassNames?: string
	wrapClassNames?: string
	textCenter?: boolean
	artists?: string
}
