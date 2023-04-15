import { TextProps } from 'react-native'

export interface ITitle extends Omit<TextProps, 'className'> {
	text: string
	center?: boolean
	size?: number
	classNames?: string
	fontFamily?: 		"Montserrat_100Thin" |
	"Montserrat_200ExtraLight" |
	"Montserrat_300Light" |
	"Montserrat_400Regular" |
	"Montserrat_500Medium" |
	"Montserrat_600SemiBold" |
	"Montserrat_700Bold" |
	"Montserrat_800ExtraBold" |
	"Montserrat_900Black" |
	"Montserrat_100Thin_Italic" |
	"Montserrat_200ExtraLight_Italic" |
	"Montserrat_300Light_Italic" |
	"Montserrat_400Regular_Italic" |
	"Montserrat_500Medium_Italic" |
	"Montserrat_600SemiBold_Italic" |
	"Montserrat_700Bold_Italic" |
	"Montserrat_800ExtraBold_Italic" |
	"Montserrat_900Black_Italic"
	color?: string
	onPress?: () => void
}
