import { UPressableProps } from '@/types/component.types'
import { IconType } from '@/types/global'
import { ColorProps } from '@/utils/color'

export interface IconProps extends UPressableProps, ColorProps {
	name: IconType
	size?: number
	border?: boolean
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}
