import { ICatalogTypes } from '@/types/catalogTypes'
import React, { FC } from 'react'
import { Animated, View } from 'react-native'
import Title from '../../../../ui/title/title'
import { HEADER_HEIGHT } from '../../catalogConstant'

interface ICatalogContentHeader extends ICatalogTypes {
	title: string
	description: string
}

const CatalogContentHeader: FC<ICatalogContentHeader> = ({
	                                                         title,
	                                                         description,
	                                                         y
                                                         }) => {
	const opacity = y.interpolate({
		inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2],
		outputRange: [1, 1, 0]
	})
	
	return (
		<Animated.View className='px-3 z-10' style={{ opacity }}>
			<Title
				text={title}
				fontFamily={'Montserrat_600SemiBold'}
				size={45}
				className='font-semibold  mb-2 pr-2'
				numberOfLines={2}
			/>
			<View className='mb-4 flex-row items-center opacity-40'>
				<Title text={description} />
			</View>
		</Animated.View>
	)
}

export default CatalogContentHeader
