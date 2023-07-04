import { AnimatedPressable, AnimatedView } from '@/animation/global'
import { useRotateAnimation } from '@/animation/rotate.animation'
import { useColorTheme } from '@/hook/useColorTheme'
import { useDropdownAnimation } from '@/ui/dropdown/dropdown.animation'
import { DropdownProps } from '@/ui/dropdown/dropdown.types'
import DropdownElement from '@/ui/dropdown/ui/dropdown-element/dropdownElement'
import Icon from '@/ui/icon/default-icon/icon'
import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import { useColorScheme } from 'nativewind'
import React, { FC, useState } from 'react'
import { Pressable, View } from 'react-native'
const Dropdown: FC<DropdownProps> = ({ isOpen, value, ...props }) => {
	const [dropdownValue, setDropdownValue] = useState(
		props.options.find(option => option.value === value) || props.options[0]
	)
	const {dropdownAnimation} = useDropdownAnimation({ isOpen })
	const {rotateAnimation} = useRotateAnimation({isOpen, direction: 'down'})
	const { colorScheme, charcoalToTwilight} = useColorTheme()
	return (
		<View className='z-50'
		>
			<Pressable
				className='p-4 border-b-midnight rounded-[10px] h-[60px] relative'
				style={{
					borderBottomLeftRadius: isOpen ? 0 : 10,
					borderBottomRightRadius: isOpen ? 0 : 10,
					borderBottomWidth: isOpen ? 1 : 0,
					backgroundColor: charcoalToTwilight
				}}
				onPress={() => props.setIsOpen(!isOpen)}
			>
				<View className='justify-between items-center flex-row'>
					<Title translate color={Color.white} weight={'medium'}>
						{dropdownValue.label}
					</Title>
					
					<AnimatedPressable style={rotateAnimation}>
						<Icon padding={0} name='chevron-down' color={Color.white} {...props} />
					</AnimatedPressable>
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
							charcoalToTwilight
					},
					dropdownAnimation
				]}
			>
				{props.options.map((option, index) => (
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
					))}
			</AnimatedView>
		</View>
	)
}

export default Dropdown
