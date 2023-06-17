import { ICatalogRenderType } from '@/types/catalogTypes'
import { UPressableProps } from '@/types/global'
import Heart from '@/ui/icon/heart/heart'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
import UImage from '../../image/image'
import Title from '../../title/title'

export interface ISongItem extends UPressableProps {
	image: {
		uri: string
		width: number
		height: number
		border?: number
	}
	text1: string
	text2?: string
	id: number
	noHeart?: boolean
	textSize?: number
	type: ICatalogRenderType
}

const CatalogItem: FC<ISongItem> = ({ id, textSize = 22, image, noHeart, ...props }) => {
	return (
		<Pressable
			key={id}
			className='flex-row items-center mb-3 w-full justify-between'
			{...props}
		>
			<View className={'flex-row items-center'}>
				<UImage
					source={image.uri}
					borderRadius={image.border}
					width={image.width}
					height={image.height}
				/>
				<View className='ml-3 max-w-[250px]'>
					<Title fontFamily={'Montserrat_600SemiBold'} size={textSize}>
						{props.text1}
					</Title>
					{props.text2 && (
						<Title
							color={'lightGray'}
							fontFamily={'Montserrat_300Light'}
							size={textSize * 0.75}
						>
							{props.text2}
						</Title>
					)}
				</View>
			</View>
			{noHeart ? null : <Heart id={id} type={props.type} />}
		</Pressable>
	)
}

export default CatalogItem
