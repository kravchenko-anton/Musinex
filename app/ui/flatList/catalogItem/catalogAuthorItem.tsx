import React, { FC } from 'react'
import { Pressable, PressableProps, View } from 'react-native'
import Icon from '../../icon/defaultIcon/Icon'
import UImage from '../../image/image'
import Title from '../../title/title'

export interface ICatalogAuthorItem extends PressableProps {
	name: string
	image: string
	likeFunc: () => void
}

const CatalogAuthorItem: FC<ICatalogAuthorItem> = ({ image, name, likeFunc, ...rest }) => {
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
			<Icon name={'heart'} size={25} onPress={likeFunc} />
		</Pressable>
	)
}

export default CatalogAuthorItem
