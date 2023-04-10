import React, { FC } from 'react'

import { View } from 'react-native'
import { IFlatListItem } from '../../../types/FlatListTypes'
import GrayScaleImage from '../../image/grayScaleImage'
import Title from '../../title/title'


const TrackItem: FC<IFlatListItem> = (props, { ...rest }) => {
	return (
		<View className={props.WrapClassNames} {...rest}>
			<GrayScaleImage
				classNames={props.ImageClassNames}
				source={props.image.url}
				height={props.image.height}
				width={props.image.width}
			/>
			<View style={{
				marginTop: 5,
				width:	props.image.width - 10
			}}>
			<Title
				text={props.name}
				center
				numberOfLines={1}
			/>
			<Title
				text={"by " + props.artists}
				classNames={"mt-1"}
				center
				numberOfLines={1}
			/>
			</View>
		</View>
	)
}

export default TrackItem
