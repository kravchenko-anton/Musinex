import I18n from 'i18n-js'
import React, { FC, memo } from 'react'
import { Pressable, View } from 'react-native'
import { IFlatListAlbumItem } from '../../../types/flatListTypes'
import UImage from '../../image/image'
import Title from '../../title/title'

const AlbumItem: FC<IFlatListAlbumItem> =
	({
		 image,
		 name,
		 artists,
		 WrapClassNames,
		 ImageClassNames,
		 ...rest
	 }) => {
		return (
			<Pressable className={WrapClassNames} style={{
				width: image.width,
				maxWidth: image.width
			}} {...rest}>
				<UImage
					className={ImageClassNames}
					source={image.url}
					height={image.height}
					width={image.width}
				/>
				<View style={{
					marginTop: 5,
					alignItems: 'center'
				}}>
					<Title
						text={name}
						numberOfLines={1}
						size={20}
						fontFamily={'Montserrat_600SemiBold'}
					/>
					<Title
						text={I18n.t('by') + artists}
						className={'mt-1'}
						numberOfLines={1}
						color={'silver'}
						size={14}
						fontFamily={'Montserrat_500Medium'}
					/>
				</View>
			</Pressable>
		)
	}

export default memo(AlbumItem)
