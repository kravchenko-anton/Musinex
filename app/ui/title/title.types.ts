import { ITranslateTypes, UTextProps } from '@/types/global'
import { ColorProps } from '@/utils/color'

export type TitleProps = UTextProps &
	ColorProps & {
		center?: boolean
		size?: number
		translate?: boolean
		children: ITranslateTypes
		weight?: 'light' | 'medium' | 'semiBold' | 'bold' | 'extraBold'
	}
