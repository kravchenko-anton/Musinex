import { Ionicons } from '@expo/vector-icons'
import { ViewProps } from 'react-native'

export type IHeaderIcon = {
	name: keyof typeof Ionicons.glyphMap
	onPress: () => void
}

export interface IHeader extends ViewProps {
	firstIcon?: IHeaderIcon
	secondIcon?: IHeaderIcon
}
