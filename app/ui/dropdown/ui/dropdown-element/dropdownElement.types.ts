import { UPressableProps } from '@/types/global'

export interface DropdownElementProps extends UPressableProps {
	label: string
	value: string
	isSelected: boolean
}