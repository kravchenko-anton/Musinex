import { IconType, UPressableProps, UViewProps } from '@/types/global'

export interface IblurButton
	extends UViewProps,
		Pick<UPressableProps, 'onPress'> {
	icon?: IconType
	iconSize?: number
	color?: string
	isSmall?: boolean
}
