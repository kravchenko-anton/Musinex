import React, { FC, memo } from 'react'
import FastImage from 'react-native-fast-image'
import { IImage } from './IImage'

const UImage: FC<IImage> = ({ source, width, height, ...rest }) => {
	return (
		<FastImage
			fallback={true}
			defaultSource={require('../../assets/no-image.jpg')}
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

export default memo(UImage)
