import { IFlatListItem } from '@/types/flatListTypes'
import I18n from 'i18n-js'
import React, { FC, memo } from 'react'
import { Pressable, View } from 'react-native'
import UFastImage from '../../image/fastimage'
import UImage from '../../image/image'
import Title from '../../title/title'

const MusicCart: FC<IFlatListItem> =
	({
		 image,
		 name,
		 artists,
		 defaultImage = false,
		 WrapClassNames,
		 ImageClassNames,
		 textCenter = true,
		 ...rest
	 }) => {
		return (
			<Pressable
				className={WrapClassNames}
				
				style={{
					width: image.width,
					maxWidth: image.width
				}}
				{...rest}
			>
				<View>
					{defaultImage ? (
						<UImage
							className={ImageClassNames}
							source={image.url}
							height={image.height}
							width={image.width}
						/>
					) : (
						<UFastImage
							className={ImageClassNames}
							source={image.url}
							height={image.height}
							width={image.width}
						/>
					)}
				</View>
				<View
					style={{
						marginTop: 5,
						alignItems: textCenter ? 'center' : 'flex-start'
					}}
				>
					<Title
						text={name}
						numberOfLines={1}
						size={20}
						fontFamily={'Montserrat_600SemiBold'}
					/>
					{artists && (
						<Title
							text={I18n.t('by') + artists}
							className={'mt-1'}
							numberOfLines={1}
							color={'silver'}
							size={14}
							fontFamily={'Montserrat_500Medium'}
						/>
					)}
				</View>
			</Pressable>
		)
	}

export default memo(MusicCart)
