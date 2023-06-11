import Skeleton from '@/ui/skeleton/skeleton'
import { FC, memo, useState } from 'react'
import { Image, View } from 'react-native'
import { IImage } from './types/IImage'

const UImage: FC<IImage> = ({ height, width,borderRadius,source, style, wrapperClassName, ...props }) => {
	const [imageLoading, setIsImageLoading] = useState(true);
	return (
	<View className={wrapperClassName}>
		<Image
			onLoadEnd={() => {setIsImageLoading(false)}}
			source={{
				uri: source,
				width: width,
				height: height
			}}
			style={[
				{
					width: width,
					height: height,
					display: imageLoading ? 'none' : 'flex',
					borderRadius: borderRadius
				},
				style
			]}
			{...props}
		/>
		{imageLoading && <Skeleton width={width} height={height} style={[{
			borderRadius,
		}, style]}/>}
	</View>
	)
}

export default memo(UImage)
