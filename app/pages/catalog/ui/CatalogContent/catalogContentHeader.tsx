import React, { FC } from 'react'
import { Animated, Text, View } from 'react-native'
import Title from '../../../../ui/title/title'
import { HEADER_HEIGHT } from '../../catalogConstant'

export interface ICatalogContentHeader {
	title: string
	y: Animated.Value
}

const CatalogContentHeader:FC<ICatalogContentHeader> = ({ title, y }) => {
	const opacity = y.interpolate({
		inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2],
		outputRange: [1, 1, 0]
	})
	
	return (
		<Animated.View className='px-6 mb-3 z-10' style={{ opacity }}>
			<Text
				className='text-5xl font-semibold text-[#F9FCFC] mb-2 pr-2'
				numberOfLines={2}
			>
				{title}
			</Text>
			<View className='mb-4 flex-row items-center opacity-70'>
				<Title  text={'5 min.'} />
				<Title text={'More item'} />
			</View>
		</Animated.View>
	)
}

export default CatalogContentHeader
