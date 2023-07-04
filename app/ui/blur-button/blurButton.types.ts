import { ColorProps } from '@/types/color'
import { IconType, UPressableProps, UViewProps } from '@/types/global'

export interface BlurButtonProps
	extends UViewProps,
		Pick<UPressableProps, 'onPress'>, ColorProps {
	icon?: IconType
	iconSize?: number
	isSmall?: boolean
}
