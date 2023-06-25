import { AnimatedView } from '@/animation/global'
import DropdownElement from '@/ui/dropdown/ui/dropdownElement'
import { useDropdownAnimation } from '@/ui/dropdown/useDropdownAnimation'
import Icon from '@/ui/icon/defaultIcon/Icon'
import Title from '@/ui/title/title'
import { color } from '@/utils/getColor'
import { useColorScheme } from 'nativewind'
import React, { FC, useState } from 'react'
import { Pressable, View } from 'react-native'

interface CustomDropdownProps {
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
	value: string
	setValue: React.Dispatch<React.SetStateAction<string>>
	onSelect: (value: string) => void
	options: {
		label: string
		value: string
	}[]
}
const Dropdown: FC<CustomDropdownProps> = ({ isOpen, value, ...props }) => {
	const [dropdownValue, setDropdownValue] = useState(
		props.options.find(option => option.value === value) || props.options[0]
	)
	const {dropdownAnimation, dropdownIconAnimation} = useDropdownAnimation(isOpen)
	const { colorScheme } = useColorScheme()

	return (
		<View className='z-50'
		>
			<Pressable
				className='p-4 border-b-midnight rounded-[10px] h-[60px] relative'
				style={{
					borderBottomLeftRadius: isOpen ? 0 : 10,
					borderBottomRightRadius: isOpen ? 0 : 10,
					borderBottomWidth: isOpen ? 1 : 0,
					backgroundColor:
						colorScheme === 'light'
							? color.charcoal
							: color.twilight,
				}}
				onPress={() => props.setIsOpen(!isOpen)}
			>
				<View className='justify-between items-center flex-row'>
					<Title translate color={'white'} fontFamily={'Montserrat_500Medium'}>
						{dropdownValue.label}
					</Title>
					
					<AnimatedView style={dropdownIconAnimation}>
						<Icon padding={0} name='chevron-down' />
					</AnimatedView>
				</View>
			</Pressable>

			<AnimatedView
				style={[
					{
						overflow: 'hidden',
						borderBottomLeftRadius: 10,
						zIndex: 10000,
						position: 'absolute',
						width: '100%',
						top: 60,
						borderBottomRightRadius: 10,
						backgroundColor:
							colorScheme === 'light'
								? color.charcoal
								: color.twilight
					},
					dropdownAnimation
				]}
			>
				{props.options.map((option, index) => {
					return (
						<DropdownElement
							label={option.label}
							value={option.value}
							isSelected={option.value === dropdownValue.value}
							key={index}
							onPress={() => {
								setDropdownValue(option)
								props.setIsOpen(false)
								props.onSelect(option.value)
							}}
						/>
					)
				})}
			</AnimatedView>
		</View>
	)
}

export default Dropdown
