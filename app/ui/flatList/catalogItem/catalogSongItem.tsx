import React, { FC } from 'react'
import { Pressable, View } from 'react-native'
import Heart from '../../icon/heart/heart'
import UImage from '../../image/image'
import Title from '../../title/title'

export interface ISongItem {
	id: number | string
	title: string
	image: string
	artist: string
	playFunc: () => void
}

const CatalogSongItem: FC<ISongItem> = props => {
	return (
		<Pressable
			className='flex-row items-center mb-3 w-full justify-between'
			onPress={props.playFunc}
		>
			<View className={'flex-row items-center'}>
				<UImage
					source={props.image}
					className={'rounded-md'}
					width={80}
					height={80}
				/>
				<View className='ml-3 max-w-[200px]'>
					<Title  fontFamily={'Montserrat_700Bold'} >{props.title}</Title>
					<Title
						color={'silver'}
						fontFamily={'Montserrat_300Light'}
					>{props.artist}</Title>
				</View>
			</View>
			<Heart id={props.id} type={'songs'} />
		</Pressable>
	)
}

export default CatalogSongItem
