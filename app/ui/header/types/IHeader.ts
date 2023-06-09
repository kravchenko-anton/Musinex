import { IconType, UViewProps } from '@/types/global'

export type IHeaderIcon = {
	name: IconType
	onPress: () => void
}

export interface IHeader extends UViewProps {
	firstIcon?: IHeaderIcon
	secondIcon?: IHeaderIcon
}
