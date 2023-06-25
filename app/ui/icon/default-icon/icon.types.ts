import { IconType, UPressableProps } from '@/types/global'
import { theme } from '../../../../tailwind.config'

export interface IconProps extends UPressableProps {
	name: IconType
	color?: keyof typeof theme.colors
	size?: number
	border?: boolean
	backgroundColor?: string
	borderRadius?: number
	padding?: number
}