import React, { FC, memo } from 'react'

import { Pressable, View } from 'react-native'
import { useTypedNavigation } from '../../../hook/useTypedNavigation'
import { IFlatListSongItem } from '../../../types/FlatListTypes'
import UImage from '../../image/Image'
import Title from '../../title/title'


const TrackItem: FC<IFlatListSongItem> = (props, { ...rest }) => {
	const {navigate} = useTypedNavigation()
	return (
		<Pressable className={props.WrapClassNames} style={{
			width: props.image.width,
			maxWidth: props.image.width,
		}} {...rest} onPress={() => navigate('Song', {
			id: props.songId,
		})}>
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
		</Pressable>
	)
}

export default memo(TrackItem)
