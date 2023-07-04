import { ColorProps } from '@/types/color'
import { IconType, UPressableProps } from '@/types/global'

export interface IconProps extends UPressableProps, ColorProps {
	name: IconType
	size?: number
	border?: boolean
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}