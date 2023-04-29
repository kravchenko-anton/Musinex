import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import Icon from '../icon/defaultIcon/Icon'
import Title from '../title/title'
import { IHeader } from './IHeader'

const NavigateHeader: FC<PropsWithChildren<IHeader>> = ({ children, logoSize, ...rest }) => {
	const { goBack, navigate } = useTypedNavigation()
	return (
		<View className='flex-row justify-between items-center' {...rest}>
			<Icon name={'arrow-back'} onPress={() => goBack()} size={logoSize} />
			<Title
				translate
				onPress={() => navigate('Home')}
				text={'Musinex'}
				fontFamily={'Montserrat_900Black_Italic'}
				size={logoSize}
			/>
			{children}
		</View>
	)
}

export default NavigateHeader
