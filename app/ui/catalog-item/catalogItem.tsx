import { AnimatedPressable, AnimatedView } from '@/animation/global'
import { useOpacityAnimation } from '@/animation/opacity.animation'
import { usePressAnimation } from '@/animation/press.animation'
import { CatalogItemProps } from '@/ui/catalog-item/catalogItem.types'
import Heart from '@/ui/icon/heart/heart'
import Image from '@/ui/image/image'
import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import { PlayerTypes } from '@/utils/player/player.types'
import Lottie from 'lottie-react-native'
import { FC, memo } from 'react'
import { View } from 'react-native'
import { useActiveTrack, usePlaybackState } from 'react-native-track-player'

const CatalogItem: FC<CatalogItemProps> = ({
	id,
	textSize = 22,
	image,
	noHeart,
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	const activeTrack = useActiveTrack() as PlayerTypes
	const playBackState = usePlaybackState()
	const { opacityAnimation } = useOpacityAnimation({
		isOpen:
			activeTrack?.title === props.text1 && playBackState.state === 'playing'
	})
	return (
		<AnimatedPressable
			className='mb-3 flex-row items-center justify-between'
			style={animatedStyle}
			{...pressFunctions}
			{...props}>
			<View className='flex-row items-center'>
				<Image
					url={image.url}
					borderRadius={image.border}
					width={image.width}
					height={image.height}
				/>
				<View
					className='ml-3'
					style={{
						width: !noHeart ? '60%' : '73%'
					}}>
					<Title weight='semiBold' numberOfLines={1} size={textSize}>
						{props.text1}
					</Title>
					{props.text2 && (
						<Title color={Color.silver} weight='light' size={textSize * 0.75}>
							{props.text2}
						</Title>
					)}
				</View>
			</View>
			<View className='flex-row items-center'>
				<AnimatedView style={opacityAnimation}>
					<Lottie
						source={require('@/assets/music-play.json')}
						style={{
							width: 30,
							height: 30,
							marginRight: 10
						}}
						autoPlay
						loop
					/>
				</AnimatedView>
				{!noHeart && <Heart id={id} type={props.type} />}
			</View>
		</AnimatedPressable>
	)
}

export default memo(CatalogItem)
