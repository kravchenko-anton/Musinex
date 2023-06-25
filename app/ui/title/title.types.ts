import { UTextProps } from '@/types/global'
import en from '@/utils/translate/en.json'
import { theme } from '../../../tailwind.config'

export interface TitleTypes extends UTextProps {
	center?: boolean
	translate?: boolean
	children: keyof typeof en | string
	size?: number
	fontFamily?:
		| 'Montserrat_300Light'
		| 'Montserrat_500Medium'
		| 'Montserrat_600SemiBold'
		| 'Montserrat_700Bold'
		| 'Montserrat_900Black'
	color?: keyof typeof theme.colors
}
