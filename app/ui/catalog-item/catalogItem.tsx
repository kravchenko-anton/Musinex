import { AnimatedPressable, AnimatedView } from '@/animation/global'
import { useOpacityAnimation } from '@/animation/opacity.animation'
import { usePressAnimation } from '@/animation/press.animation'
import { ICatalogItem } from '@/ui/catalog-item/catalogItem.types'
import Heart from '@/ui/icon/heart/heart'
import Lottie from 'lottie-react-native'
import { FC } from 'react'
import { View } from 'react-native'
import { useActiveTrack, usePlaybackState } from 'react-native-track-player'
import UImage from '../image/image'
import Title from '../title/title'

const CatalogItem: FC<ICatalogItem> = ({
	id,
	textSize = 22,
	image,
	noHeart,
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	const activeTrack = useActiveTrack()
	const playBackState = usePlaybackState()
	const {opacityAnimation} = useOpacityAnimation(activeTrack?.title === props.text1 && playBackState.state === 'playing')
	return (
		<AnimatedPressable
			className='flex-row items-center mb-3 justify-between'
			style={animatedStyle}
			{...pressFunctions}
			{...props}
		>
			<View className='flex-row items-center'>
				<UImage
					source={image.uri}
					borderRadius={image.border}
					width={image.width}
					height={image.height}
				/>
				<View
					className='ml-3'
					style={{
						width: !noHeart ? '60%' : '73%'
					}}
				>
					<Title
						fontFamily={'Montserrat_600SemiBold'}
						numberOfLines={1}
						size={textSize}
					>
						{props.text1}
					</Title>
					{props.text2 && (
						<Title
							color={'silver'}
							fontFamily={'Montserrat_300Light'}
							size={textSize * 0.75}
						>
							{props.text2}
						</Title>
					)}
				</View>
			</View>
			<View className='items-center flex-row'>
				<AnimatedView style={opacityAnimation}>
						<Lottie source={require('@/assets/music-play.json')} style={{
						width: 30,
						height: 30,
						marginRight: 10
					}} autoPlay loop />
				</AnimatedView>
			{!noHeart && <Heart id={id}  type={props.type} />}
			</View>
		</AnimatedPressable>
	)
}

export default CatalogItem
