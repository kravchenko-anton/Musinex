import Skeleton from '@/ui/skeleton/skeleton'
import { FC, memo, useState } from 'react'
import { Image, View } from 'react-native'
import { ImageTypes } from './image.types'

const UImage: FC<ImageTypes> = ({
	height = 100,
	width = 100,
	borderRadius = 5,
	transparentSkeleton = false,
	url,
	style,
	className,
	wrapperClassName,
	...props
}) => {
	const [imageLoading, setIsImageLoading] = useState(true)
	return (
		<View className={wrapperClassName}>
			<Image
				className={className}
				onLoadEnd={() => {
					setIsImageLoading(false)
				}}
				source={{
					uri: url,
					width,
					height
				}}
				style={[
					{
						width,
						height,
						display: imageLoading ? 'none' : 'flex',
						borderRadius
					},
					style
				]}
				{...props}
			/>
			{imageLoading && (
				<Skeleton
					width={width}
					transparent={transparentSkeleton}
					height={height}
					style={[
						{
							borderRadius
						},
						style
					]}
				/>
			)}
		</View>
	)
}

export default memo(UImage)
