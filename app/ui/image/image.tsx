import { FC, memo } from 'react'
import { Image } from 'react-native'
import { IImage } from './types/IImage'

const UImage: FC<IImage> = ({ source, width, height, style, ...rest }) => {
	//TODO: Fix this add a default image
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
		style
			]}
			{...rest}
		/>
	)
}

export default memo(UImage)
