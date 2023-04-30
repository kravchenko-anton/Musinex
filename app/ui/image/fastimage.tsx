import React, { FC, memo } from 'react'
import FastImage from 'react-native-fast-image'
import { IFastImage } from './types/IImage'

const UFastImage: FC<IFastImage> = ({ source, width, height, ...rest }) => {
	return (
		<FastImage
			onLoadStart={() => console.log('onLoadStart')}
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

export default memo(UFastImage)
