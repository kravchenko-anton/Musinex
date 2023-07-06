import { UPressableProps } from '@/types/component.types'

export interface DropdownElementProps extends UPressableProps {
	label: string
	value: string
	isSelected: boolean
}
