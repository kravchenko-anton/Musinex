import React, { FC } from 'react'

import { Pressable, View } from 'react-native'
import Icon from '../../../../ui/icon/defaultIcon/Icon'
import UImage from '../../../../ui/image/image'
import Title from '../../../../ui/title/title'

export interface ISongItem {
	title: string
	image: string
	artist: string
	likeFunc: () => void
	playFunc: () => void
}

const SongItem: FC<ISongItem> = props => {
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
					<Title text={props.title} fontFamily={'Montserrat_700Bold'} />
					<Title
						text={props.artist}
						color={'silver'}
						fontFamily={'Montserrat_300Light'}
					/>
				</View>
			</View>
			<Icon name={'heart'} size={25} onPress={props.likeFunc} />
		</Pressable>
	)
}

export default SongItem
