import { IIconName } from '@/types/IconTypes'
import { PressableProps, ViewProps } from 'react-native'

export interface IblurButton extends ViewProps, Pick<PressableProps, 'onPress'> {
	icon?: IIconName
	iconSize?: number
	color?: string
	isSmall?: boolean
}
