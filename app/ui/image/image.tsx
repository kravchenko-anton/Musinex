import React, { FC, memo } from 'react'
import { Image, View } from 'react-native'
import { randomBeautifulColor } from '../../utils/getRandomColor'
import { IImage } from './types/IImage'
import { useImageLoading } from './useImageLoading'

const UImage: FC<IImage> = ({ source, width, height, ...rest }) => {
	const imageLoad = useImageLoading(source)
	if (!imageLoad)
		return (
			<View
				style={[
					{ width, height, backgroundColor: randomBeautifulColor(80, 25) },
					rest.style
				]}
			/>
		)
	return (
		<Image
			source={{
				uri: source,
				width,
				height
			}}
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
