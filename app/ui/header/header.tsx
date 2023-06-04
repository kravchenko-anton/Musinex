import { useTypedNavigation } from '@/hook/useTypedNavigation'
import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import Title from '../title/title'
import { IHeader } from './types/IHeader'

const Header: FC<PropsWithChildren<IHeader>> =
	({
	                                                children,
	                                                logoSize = 30,
	                                                ...rest
                                                }) => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='flex-row justify-between items-center' {...rest}>
			<Title
				translate
				onPress={() => navigate('Home')}
				fontFamily={'Montserrat_900Black_Italic'}
				size={logoSize}
			>
				Musinex
			</Title>
			{children}
		</View>
	)
}

export default Header
