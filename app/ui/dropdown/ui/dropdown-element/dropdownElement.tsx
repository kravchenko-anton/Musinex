import { DropdownElementProps } from '@/ui/dropdown/ui/dropdown-element/dropdownElement.types'
import Icon from '@/ui/icon/default-icon/icon'
import Title from '@/ui/title/title'
import { FC } from 'react'
import { Pressable } from 'react-native'

const DropdownElement: FC<DropdownElementProps> = ({ ...props }) => {
	return (
		<Pressable
			style={[
				props.isSelected && {
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center'
				},
				{
					padding: 8,
					paddingHorizontal: 15
				}
			]}
			{...props}
		>
			<Title color={'white'}>{props.label}</Title>
			{props.isSelected && <Icon name='checkmark' padding={0} />}
		</Pressable>
	)
}

export default DropdownElement
