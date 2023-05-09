import React, { FC } from 'react'
import { Pressable, PressableProps, View } from 'react-native'
import Heart from '../../icon/heart/heart'
import UImage from '../../image/image'
import Title from '../../title/title'

export interface ICatalogArtistsItem extends Omit<PressableProps, 'id'> {
	id: number | string
	name: string
	image: string
}

const CatalogArtistItem: FC<ICatalogArtistsItem> = ({
	                                                    id,
	                                                    image,
	                                                    name,
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
					width={90}
					height={90}
				/>
				<View className='ml-3 max-w-[200px]'>
					<Title text={name} fontFamily={'Montserrat_700Bold'} size={24} />
				</View>
			</View>
			<Heart type={'artists'} id={id} />
		</Pressable>
	)
}

export default CatalogArtistItem
