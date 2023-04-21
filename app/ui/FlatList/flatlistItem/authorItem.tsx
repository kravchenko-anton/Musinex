import React, { FC, memo } from 'react'

import { Pressable, View } from 'react-native'
import { IFlatListArtistItem } from '../../../types/FlatListTypes'
import UImage from '../../image/Image'
import Title from '../../title/title'

const AuthorItem: FC<IFlatListArtistItem> = (props, { ...rest }) => {
	return (
		<Pressable className={props.WrapClassNames} style={{
			width: props.image.width,
			maxWidth: props.image.width
		}} onPress={props.onPress}  {...rest}>
			<UImage
				classNames={props.ImageClassNames}
				source={props.image.url}
				height={props.image.height}
				width={props.image.width}
			/>
			<View style={{
				marginTop: 5,
				alignItems: 'center'
			}}>
				<Title
					text={props.name}
					numberOfLines={1}
				/>
			
			</View>
		</Pressable>
	)
}

export default memo(AuthorItem)
