import Skeleton from '@/ui/skeleton/skeleton'
import { FC, memo, useState } from 'react'
import { Image, View } from 'react-native'
import { IImage } from './types/IImage'

const UImage: FC<IImage> = ({ source, width = 200, height = 200, style, wrapperClassName, ...props }) => {
	const [imageLoading, setIsImageLoading] = useState(true);
	return (
	<View className={wrapperClassName}>
		<Image
			onLoadEnd={() => {setIsImageLoading(false)}}
			source={{
				uri: source,
				width,
				height
			}}
			style={[
				{
					width,
					height,
					display: imageLoading ? 'none' : 'flex'
				},
				style
			]}
			{...props}
		/>
		{imageLoading && <Skeleton width={width} height={height} style={[{
			borderRadius: props.borderRadius,
		}, style]}/>}
	</View>
	)
}

export default memo(UImage)
