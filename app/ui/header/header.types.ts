import { IconType, UViewProps } from '@/types/global'

export type IHeaderIcon = {
	name: IconType
	onPress: () => void
}

export interface IHeaderTypes extends UViewProps {
	firstIcon?: IHeaderIcon
	secondIcon?: IHeaderIcon
}
