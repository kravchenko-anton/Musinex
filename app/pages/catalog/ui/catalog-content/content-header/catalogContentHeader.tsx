import { ICatalogContentHeader } from '@/pages/catalog/ui/catalog-content/content-header/catalogContentHeader.types'
import Title from '@/ui/title/title'
import { FC } from 'react'
import { Animated, View } from 'react-native'
import { HEADER_HEIGHT } from '../../../catalog.constant'

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
				fontFamily={'Montserrat_600SemiBold'}
				size={40}
				className='font-semibold mb-2 pr-8'
				numberOfLines={2}
			>
				{title}
			</Title>
			<View className='mb-4 flex-row items-center opacity-40'>
				<Title>{description}</Title>
			</View>
		</Animated.View>
	)
}

export default CatalogContentHeader
