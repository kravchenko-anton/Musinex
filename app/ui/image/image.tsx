import { randomBeautifulColor } from '@/utils/getRandomColor'
import { Image } from '@rneui/themed'
import React, { FC, memo } from 'react'
import { View } from 'react-native'
import { IImage } from './types/IImage'

const UImage: FC<IImage> = ({ source, width, height, ...rest }) => {
	return (
		<Image
			source={{
				uri: source,
				width,
				height
			}}
			PlaceholderContent={<View
				style={[
					{ width, height, backgroundColor: randomBeautifulColor(80, 25) },
					rest.style
				]}
			/>}
			style={[
				{
					width,
					height
				},
				rest.style
			]}
			{...rest}
		/>
	)
}

export default memo(UImage)
