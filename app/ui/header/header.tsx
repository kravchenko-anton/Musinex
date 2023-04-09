import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import Title from '../title/title'
import { IHeader } from './IHeader'


const Header:FC<PropsWithChildren<IHeader>> = ({children, logoSize, ...rest}) => {
	return (
	<View className='flex-row justify-between items-center' {...rest}>
	<Title text={"Musinex"} fontFamily={'Silkscreen_700Bold'} size={logoSize}/>
		{children}
	</View>
	)
}

export default Header
