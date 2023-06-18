import { UPressableProps } from '@/types/global'
import Icon from '@/ui/icon/defaultIcon/Icon'
import Title from '@/ui/title/title'
import { FC } from 'react'
import { Pressable } from 'react-native'

interface IDropdownElement extends UPressableProps {
	label: string
	value: string
	isSelected: boolean
}
const DropdownElement: FC<IDropdownElement> = ({ ...props }) => {
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
