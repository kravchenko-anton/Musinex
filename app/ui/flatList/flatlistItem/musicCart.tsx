import { IFlatListItem } from '@/types/flatListTypes'
import React, { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, View } from 'react-native'
import UImage from '../../image/image'
import Title from '../../title/title'

const MusicCart: FC<IFlatListItem> = ({
	textCenter = false,
	...props
}) => {
	const { t } = useTranslation()
	return (
		<Pressable
			className={props.WrapClassNames}
			style={{
				width: props.image.width,
				maxWidth: props.image.width
			}}
			{...props}
		>
			<UImage
				className={props.ImageClassNames}
				source={props.image.url}
				height={props.image.height}
				width={props.image.width}
			/>
			<View
				style={{
					margin: 5,
					alignItems: textCenter ? 'center' : 'flex-start'
				}}
			>
				<Title
					numberOfLines={1}
					size={16}
					className={'w-full'}
					color={'lightGray'}
					fontFamily={'Montserrat_500Medium'}
				>
					{props.name}
				</Title>
				{props.artists && (
					<Title
						className={'mt-0.5'}
						numberOfLines={1}
						color={'primaryGray'}
						size={14}
						fontFamily={'Montserrat_500Medium'}
					>
						{t('by') + props.artists}
					</Title>
				)}
			</View>
		</Pressable>
	)
}

export default memo(MusicCart)
