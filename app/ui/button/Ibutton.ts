import { PressableProps } from 'react-native'

export interface Ibutton extends PressableProps{
	size?: 'small' | 'medium' | 'large',
	variant?: 'primary' | 'secondary' | 'tertiary',
	fontFamily?: "Silkscreen_400Regular" | "Silkscreen_700Bold",
}
