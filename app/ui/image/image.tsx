import Skeleton from '@/ui/skeleton/skeleton'
import { FC, memo, useState } from 'react'
import { Image, View } from 'react-native'
import { IImage } from './types/IImage'

const UImage: FC<IImage> = ({ source, width, height, style, ...rest }) => {
	const [imageLoading, setIsImageLoading] = useState(true);
	return (
	<View className={rest.wrapperClassName}>
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
			{...rest}
		/>
		{imageLoading && <Skeleton width={width} height={height} style={style}/>}
	</View>
	)
}

export default memo(UImage)
