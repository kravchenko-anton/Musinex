import { UViewProps } from '@/types/global'
import { Ionicons } from '@expo/vector-icons'

export type IHeaderIcon = {
	name: keyof typeof Ionicons.glyphMap
	onPress: () => void
}

export interface IHeader extends UViewProps {
	firstIcon?: IHeaderIcon
	secondIcon?: IHeaderIcon
}
