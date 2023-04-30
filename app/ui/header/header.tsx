import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import Title from '../title/title'
import { IHeader } from './IHeader'

const Header: FC<PropsWithChildren<IHeader>> = ({
	children,
	logoSize = 30,
	...rest
}) => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='flex-row justify-between items-center' {...rest}>
			<Title
				translate
				text={'Musinex'}
				onPress={() => navigate('Home')}
				fontFamily={'Montserrat_900Black_Italic'}
				size={logoSize}
			/>
			{children}
		</View>
	)
}

export default Header
