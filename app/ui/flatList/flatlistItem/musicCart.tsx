import { IFlatListItem } from '@/types/flatListTypes'
import { FC, memo } from 'react'
import { Pressable, View } from 'react-native'
import UImage from '../../image/image'
import Title from '../../title/title'

const MusicCart: FC<IFlatListItem> = ({
	textCenter = false,
	wrapClassNames = 'mr-3',
	...props
}) => {
	return (
		<Pressable
			className={wrapClassNames}
			style={{
				width: props.wrapperWidth ? props.wrapperWidth : props.image.width,
				maxWidth: props.image.width
			}}
			{...props}
		>
			<UImage
				className={props.imageClassNames}
				source={props.image.url}
				borderRadius={props.image.border ? props.image.border : 0}
				height={props.image.height}
				width={props.image.width}
			/>
			<View
				style={{
					margin: 5,
				}}
			>
				<Title
					numberOfLines={1}
					size={16}
					center={textCenter}
					className={'w-full'}
					color={'lightGray'}
					fontFamily={'Montserrat_500Medium'}
				>
					{props.name}
				</Title>
				{props.artists && (
					<Title
						className={'mt-0.5 w-10/12'}
						numberOfLines={1}
						color={'primaryGray'}
						center={textCenter}
						size={16}
						fontFamily={'Montserrat_500Medium'}
					>
						{props.artists}
					</Title>
				)}
			</View>
		</Pressable>
	)
}

export default memo(MusicCart)
