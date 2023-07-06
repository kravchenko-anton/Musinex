import { UPressableProps, UViewProps } from '@/types/component.types'
import { IconType } from '@/types/global'
import { ColorProps } from '@/utils/color'

export interface BlurButtonProps
	extends UViewProps,
		Pick<UPressableProps, 'onPress'>,
		ColorProps {
	icon?: IconType
	iconSize?: number
	isSmall?: boolean
}
