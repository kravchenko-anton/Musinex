import React, { FC } from 'react'
import { Pressable, PressableProps, View } from 'react-native'
import Heart from '../../icon/heart/heart'
import UImage from '../../image/image'
import Title from '../../title/title'

export interface ICatalogArtistsItem extends Omit<PressableProps, 'id'> {
	id: number | string
	name: string
	image: string
	imageWidth?: number
	textSize?: number
}

const CatalogArtistItem: FC<ICatalogArtistsItem> = ({
	                                                    id,
	                                                    image,
	                                                    name,
	                                                    imageWidth= 80,
																					textSize	= 20,
	                                                    ...rest
                                                    }) => {
	return (
		<Pressable
			className='flex-row items-center mb-3 w-full justify-between'
			{...rest}
		>
			<View className={'flex-row items-center'}>
				<UImage
					source={image}
					className={'rounded-full'}
					width={imageWidth}
					height={imageWidth}
				/>
				<View className='ml-3 w-7/12'>
					<Title  fontFamily={'Montserrat_700Bold'} size={textSize}>{name}</Title>
				</View>
			</View>
			<Heart type={'artists'} id={id} />
		</Pressable>
	)
}

export default CatalogArtistItem
