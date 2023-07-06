import { UTextProps } from '@/types/component.types'
import { ITranslateTypes } from '@/types/global'
import { ColorProps } from '@/utils/color'

export type TitleProps = UTextProps &
	ColorProps & {
		center?: boolean
		size?: number
		translate?: boolean
		children: ITranslateTypes
		weight?: 'light' | 'medium' | 'semiBold' | 'bold' | 'extraBold'
	}
