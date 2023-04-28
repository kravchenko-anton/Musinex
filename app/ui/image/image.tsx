import React, { FC } from 'react'
import { Image } from 'react-native'
import { IImage } from './IImage'

const UImage: FC<IImage> =
	({
		 source,
		 width,
		 height,
		 ...rest
	 }) => {
		return (
			<Image
				source={{
					uri: source,
					width: width,
					height: height
				}}
				style={{
					width: width,
					height: height,
					resizeMode: 'cover'
				}}
				{...rest}
			/>
		)
	}

export default UImage
