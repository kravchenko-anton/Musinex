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
	style,
	className,
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			testID='music-cart-wrapper'
			className={wrapClassNames}
			style={[
				{
					width: props.image.width,
					maxWidth: props.image.width
				},
				animatedStyle
			]}
			{...pressFunctions}
			{...props}>
			<Image
				className={className}
				style={style}
				url={props.image.url}
				borderRadius={props.image.border || 0}
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
					{props.text1}
				</Title>
				{props.text2 && (
					<Title
						className='mt-0.5 w-10/12'
						numberOfLines={1}
						color={Color.charcoal}
						center={textCenter}
						size={16}
						weight='medium'>
						{props.text2}
					</Title>
				)}
			</View>
		</AnimatedPressable>
	)
}

export default memo(MusicCart)
