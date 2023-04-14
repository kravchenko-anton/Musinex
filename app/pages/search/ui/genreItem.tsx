import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'

import { StyleSheet, View } from 'react-native'
import UImage from '../../../ui/image/Image'
import Title from '../../../ui/title/title'


export interface IGenreItem {
	name: string
	picture_big: string
}
const GenreItem:FC<IGenreItem> =  ({ picture_big, name }) => {
	return (
		<View className=' bg-VeryLightBlack overflow-hidden z-50 h-[130px] rounded-lg max-w-[48%] w-full'>
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, zIndex: 50 }}
				start={[0.3, 0.1]}
				end={[0, 0.8]}
				colors={['transparent', 'rgba(0, 0, 0, 1)']}
			/>
			<UImage source={picture_big} width={250} height={130}
			       classNames='absolute  rounded-md z-10' />
			<Title size={18} classNames={'absolute bottom-5 left-2 z-50 max-w-[80%]'} text={name} />
		</View>
	)
}

export default GenreItem
