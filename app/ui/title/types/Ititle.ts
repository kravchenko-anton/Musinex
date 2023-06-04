import { ITranslateTypes } from '@/types/global'
import { TextProps } from 'react-native'

export interface ITitle extends TextProps {
	// if translate is true, then children must be a key of i18n.t
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
	color?: string
}
