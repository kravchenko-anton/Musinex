import { ITranslateTypes, UTextProps } from '@/types/global'
import { theme } from '../../../../tailwind.config'


export interface ITitle extends UTextProps {
	center?: boolean
	translate?: boolean
	children: ITranslateTypes
	size?: number
	fontFamily?:
		| 'Montserrat_100Thin'
		| 'Montserrat_300Light'
		| 'Montserrat_400Regular'
		| 'Montserrat_500Medium'
		| 'Montserrat_600SemiBold'
		| 'Montserrat_700Bold'
		| 'Montserrat_800ExtraBold'
		| 'Montserrat_900Black'
		| 'Montserrat_900Black_Italic'
	color?: keyof typeof theme.colors
}
