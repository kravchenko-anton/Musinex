import React, { FC } from 'react'
import { Image } from 'react-native'
import { IImage } from './IImage'

const UImage: FC<IImage> = (props, { ...rest }) => {
	return (
			<Image
				source={{
					uri: props.source,
					width: props.width,
					height: props.height
				}}
				style={{
					width: props.width,
					height: props.height,
					resizeMode: 'cover',
				}}
				className={props.classNames} {...rest}
			/>
	)
}

export default UImage
