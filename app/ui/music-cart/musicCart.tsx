import { AnimatedPressable } from '@/animation/global'
import { usePressAnimation } from '@/animation/press.animation'
import { IMusicCartTypes } from '@/ui/music-cart/musicCart.types'
import { FC } from 'react'
import { View } from 'react-native'
import UImage from '../image/image'
import Title from '../title/title'

const MusicCart: FC<IMusicCartTypes> = ({
	textCenter = false,
	wrapClassNames = 'mr-3',
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	return (
		<AnimatedPressable
			className={wrapClassNames}
			style={[{
				width: props.wrapperWidth ? props.wrapperWidth : props.image.width,
				maxWidth: props.image.width
			},
			animatedStyle]}
			{...pressFunctions}
			{...props}>
		
				<UImage
					className={props.imageClassNames}
					source={props.image.url}
					borderRadius={props.image.border ? props.image.border : 0}
					height={props.image.height}
					width={props.image.width}
				/>
				<View className='mt-2'
				>
					<Title
						numberOfLines={1}
						size={16}
						center={textCenter}
						className='w-full'
						fontFamily={'Montserrat_500Medium'}
					>
						{props.name}
					</Title>
					{props.artists && (
						<Title
							className='mt-0.5 w-10/12'
							numberOfLines={1}
							color={'charcoal'}
							center={textCenter}
							size={16}
							fontFamily={'Montserrat_500Medium'}
						>
							{props.artists}
						</Title>
					)}
				</View>
		</AnimatedPressable>
	)
}

export default MusicCart
