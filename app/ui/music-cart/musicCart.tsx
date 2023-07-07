import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import Image from '@/ui/image/image'
import { MusicCartProps } from '@/ui/music-cart/musicCart.types'
import { Color } from '@/utils/color'
import { FC, memo } from 'react'
import { View } from 'react-native'
import Title from '../title/title'

const MusicCart: FC<MusicCartProps> = ({
	textCenter = false,
	wrapClassNames = 'mr-3',
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			testID='music-cart-wrapper'
			className={wrapClassNames}
			style={[
				{
					width: props.wrapperWidth ? props.wrapperWidth : props.image.width,
					maxWidth: props.image.width
				},
				animatedStyle
			]}
			{...pressFunctions}
			{...props}>
			<Image
				className={props.imageClassNames}
				url={props.image.url}
				borderRadius={props.image.border ? props.image.border : 0}
				height={props.image.height}
				width={props.image.width}
			/>
			<View className='mt-2'>
				<Title
					numberOfLines={1}
					size={16}
					center={textCenter}
					className='w-full'
					weight='medium'>
					{props.name}
				</Title>
				{props.artists && (
					<Title
						className='mt-0.5 w-10/12'
						numberOfLines={1}
						color={Color.charcoal}
						center={textCenter}
						size={16}
						weight='medium'>
						{props.artists}
					</Title>
				)}
			</View>
		</AnimatedPressable>
	)
}

export default memo(MusicCart)
