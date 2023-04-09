import { TextProps } from 'react-native'

export interface ITitle extends TextProps{
	text: string,
	center?: boolean
	size?: number,
	classNames?: string,
	fontFamily?: "Silkscreen_400Regular" | "Silkscreen_700Bold",
}
