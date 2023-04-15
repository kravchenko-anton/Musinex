import React, { FC, memo } from 'react'
import { View } from 'react-native'
import { IFlatListAlbumItem } from '../../../types/FlatListTypes'
import UImage from '../../image/Image'
import Title from '../../title/title'

const AlbumItem: FC<IFlatListAlbumItem> = (props, { ...rest }) => {
	return (
		<View className={props.WrapClassNames}  style={{
			width: props.image.width,
			maxWidth: props.image.width,
		}}  {...rest}>
			<UImage
				classNames={props.ImageClassNames}
				source={props.image.url}
				height={props.image.height}
				width={props.image.width}
			/>
			<View style={{
				marginTop: 5,
				alignItems: "center"
			}}>
			<Title
				text={props.name}
				numberOfLines={1}
			/>
			<Title
				text={"by " + props.artists}
				classNames={"mt-1"}
				numberOfLines={1}
				color={'silver'}
			/>
			</View>
		</View>
	)
}

export default memo(AlbumItem)
