import React, { FC, memo } from 'react'
import { View } from 'react-native'
import FastImage from 'react-native-fast-image'
import { randomBeautifulColor } from '../../utils/getRandomColor'
import { IFastImage } from './types/IImage'
import { useImageLoading } from './useImageLoading'

const UFastImage: FC<IFastImage> = ({ source, width, height, ...rest }) => {
	const imageLoad = useImageLoading(source)
	if (!imageLoad) return <View
		style={[{ width, height, backgroundColor: randomBeautifulColor(80, 20) }, rest.style]} />
	return (
		<FastImage
			source={{
				uri: source,
				priority: FastImage.priority.normal
			}}
			{...!rest.style && rest}
			style={[{
				width,
				height
			}, rest.style]}
		/>
	)
}

export default memo(UFastImage)
