import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { IImage } from './IImage'

const GrayScaleImage:FC<IImage> = ({classNames, source,width,height,  ...rest}) => {
	
	return (
<View>
<Image
source={{
	uri: source,
		width: width,
		height: height,
}}
style={{
	width: width,
		height: height,
		resizeMode: "cover",
		tintColor: "#333",
}} className={classNames}
/>
<Image
	source={{
		uri: source,
		width: width,
		height: height,
	}}
	style={{
		position: "absolute",
		opacity:0.4,
		width: width,
		height: height,
		resizeMode: "cover",
	}}
	{...rest}
	className={classNames}
/>
</View>
	)
}

export default GrayScaleImage
