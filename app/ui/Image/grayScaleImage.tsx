import React, { FC } from 'react'
import { Image, View } from 'react-native'
import { IImage } from './IImage'

const GrayScaleImage:FC<IImage> = (props,{...rest}) => {
	
	return (
				<View>
						<Image
							source={{
					uri: props.source,
						width: props.width,
						height: props.height,
				}}
				style={{
					width: props.width,
						height: props.height,
						resizeMode: "cover",
						tintColor: "#333",
				}} className={props.classNames}
				/>
				<Image
					source={{
						uri: props.source,
						width: props.width,
						height: props.height,
					}}
					style={{
						position: "absolute",
						opacity:0.4,
						width: props.width,
						height: props.height,
						resizeMode: "cover",
					}}
					{...rest}
					className={props.classNames}
				/>
				</View>
	)
}

export default GrayScaleImage
