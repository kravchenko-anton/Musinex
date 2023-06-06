import { useTypedNavigation } from '@/hook/useTypedNavigation'
import Icon from '@/ui/icon/defaultIcon/Icon'
import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import Title from '../title/title'
import { IHeader } from './types/IHeader'

const Header: FC<PropsWithChildren<IHeader>> = ({
	children,
	firstIcon,
	secondIcon,
	...rest
}) => {
	const { navigate, goBack } = useTypedNavigation()
	return (
		<View className='flex-row justify-between items-center' {...rest}>
			{firstIcon && !children ? (
				<Icon border name={firstIcon.name} onPress={firstIcon.onPress} />
			) : (
				<Icon name={'arrow-back'} border onPress={() => goBack()} />
			)}

			<Title
				translate
				onPress={() => navigate('Home')}
				fontFamily={'Montserrat_900Black'}
				size={28}
			>
				Musinex
			</Title>
			{!children && secondIcon ? (
				<Icon border name={secondIcon.name} onPress={secondIcon.onPress} />
			) : (
				children
			)}
		</View>
	)
}

export default Header
