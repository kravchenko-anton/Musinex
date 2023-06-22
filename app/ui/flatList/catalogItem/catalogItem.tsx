import { AnimatedPressable, AnimatedView } from '@/animation/global'
import { useOpacityAnimation } from '@/animation/useOpacityAnimation'
import { usePressAnimation } from '@/animation/usePressAnimation'
import { ICatalogRenderType } from '@/types/catalogTypes'
import { UPressableProps } from '@/types/global'
import Heart from '@/ui/icon/heart/heart'
import Lottie from 'lottie-react-native'
import { FC } from 'react'
import { View } from 'react-native'
import { useActiveTrack, usePlaybackState } from 'react-native-track-player'
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

const CatalogItem: FC<ISongItem> = ({
	id,
	textSize = 22,
	image,
	noHeart,
	...props
}) => {
	const { animatedStyle, pressFunctions } = usePressAnimation()
	const activeTrack = useActiveTrack()
	const playBackState = usePlaybackState()
	const {opacityAnimation} = useOpacityAnimation(activeTrack?.title === props.text1 && activeTrack?.artist === props.text2 && playBackState.state === 'playing')
	return (
		<AnimatedPressable
			className='flex-row items-center mb-3 justify-between'
			style={animatedStyle}
			{...pressFunctions}
			{...props}
		>
			<View className={'flex-row items-center'}>
				<UImage
					source={image.uri}
					borderRadius={image.border}
					width={image.width}
					height={image.height}
				/>
				<View
					className='ml-3'
					style={{
						width: !noHeart ? '55%' : '73%'
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
							color={'lightGray'}
							fontFamily={'Montserrat_300Light'}
							size={textSize * 0.75}
						>
							{props.text2}
						</Title>
					)}
				</View>
			</View>
			<View className='flex-row items-center'>
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
