import { LinearGradient } from 'expo-linear-gradient'
import React, { FC } from 'react'

import { Pressable, StyleSheet } from 'react-native'
import { useTypedNavigation } from '../../../hook/useTypedNavigation'
import UImage from '../../../ui/image/image'
import Title from '../../../ui/title/title'

export interface IGenreItem {
	name: string
	picture_big: string
	id: number
}

const GenreItem: FC<IGenreItem> = ({ picture_big, id, name }) => {
	const { navigate } = useTypedNavigation()
	return (
		<Pressable
			onPress={() =>
				navigate('genreCatalog', {
					genreId: id,
					genreName: name
				})
			}
			className='bg-VeryLightBlack overflow-hidden z-50 h-[130px] rounded-lg max-w-[48%] w-full'
		>
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, zIndex: 50 }}
				start={[0.3, 0.1]}
				end={[0, 0.8]}
				colors={['transparent', 'rgba(0, 0, 0, 1)']}
			/>
			<UImage
				source={picture_big}
				width={250}
				height={130}
				className='absolute  rounded-md z-10'
			/>
			<Title
				color={'#fff'}
				size={18}
				className='absolute bottom-5 left-2 z-50 max-w-[80%]'
				fontFamily={'Montserrat_500Medium'}
				text={name}
			/>
		</Pressable>
	)
}

export default GenreItem
