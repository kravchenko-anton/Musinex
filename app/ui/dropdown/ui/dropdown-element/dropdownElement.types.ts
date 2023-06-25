import { UPressableProps } from '@/types/global'

export interface IDropdownElement extends UPressableProps {
	label: string
	value: string
	isSelected: boolean
}