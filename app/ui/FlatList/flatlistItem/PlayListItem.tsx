import React, { FC } from 'react'
import { View } from 'react-native'
import { IFlatListPlayListItem } from '../../../types/FlatListTypes'
import GrayScaleImage from '../../image/grayScaleImage'
import Title from '../../title/title'

const PlayListItem: FC<IFlatListPlayListItem> = (props, { ...rest }) => {
	return (
		<View className={props.WrapClassNames}  style={{
			width: props.image.width,
			maxWidth: props.image.width,
		}}  {...rest}>
			<GrayScaleImage
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
			/>
			</View>
		</View>
	)
}

export default PlayListItem
