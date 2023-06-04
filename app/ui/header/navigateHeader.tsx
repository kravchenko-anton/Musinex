import { useTypedNavigation } from '@/hook/useTypedNavigation'
import React, { FC, PropsWithChildren } from 'react'
import { View } from 'react-native'
import UIcon from '../icon/defaultIcon/Icon'
import Title from '../title/title'
import { IHeader } from './types/IHeader'

const NavigateHeader: FC<PropsWithChildren<IHeader>> =
	({
		 children,
		 logoSize,
		 ...rest
	 }) => {
		const { goBack, navigate } = useTypedNavigation()
		return (
			<View className='flex-row justify-between items-center' {...rest}>
				<UIcon name={'arrow-back'} onPress={() => goBack()} size={logoSize} />
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

export default NavigateHeader
