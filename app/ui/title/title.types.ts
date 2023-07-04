import { UTextProps } from '@/types/global'
import { ColorProps } from '@/utils/color'
import en from '@/utils/translate/en.json'

export interface TitleProps extends UTextProps, ColorProps {
	center?: boolean
	translate?: boolean
	children: keyof typeof en | string
	size?: number
	weight?:
		| 'light'
		| 'medium'
		| 'semiBold'
		| 'bold'
		| 'extraBold'
}
