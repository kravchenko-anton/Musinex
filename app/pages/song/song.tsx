import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import RepeatIcon from '@/pages/song/ui/repeatIcon'
import Sliders from '@/pages/song/ui/slider'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Heart from '@/ui/icon/heart/heart'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { cutString } from '@/utils/cutString'
import { getHexCode } from '@/utils/getColor'
import { ScreenHeight, WindowHeight, WindowWidth } from '@/utils/screen'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import TrackPlayer, {
	useActiveTrack,
	usePlaybackState
} from 'react-native-track-player'

const Song = () => {
	const selector = useTypedSelector(state => state.player)
	const playBackState = usePlaybackState()
	const trackInfo = useActiveTrack()
	const { goBack } = useTypedNavigation()

	async function handleShuffle() {
		let queue = await TrackPlayer.getQueue()
		await TrackPlayer.reset()
		queue.sort(() => Math.random() - 0.5)
		await TrackPlayer.add(queue)
	}

	return (
		<View
			style={{
				paddingTop: WindowHeight * 0.05,
				justifyContent: 'space-between',
				height: ScreenHeight,
				paddingBottom: WindowHeight * 0.05,
				backgroundColor: getHexCode('veryLightBlack')
			}}
		>
			<StatusBar backgroundColor={getHexCode('transparent')} style={'light'} />
			<View
				style={{
					...StyleSheet.absoluteFillObject,
					backgroundColor: getHexCode('dark'),
					width: WindowWidth,
					height: ScreenHeight,
					opacity: 0.5
				}}
			></View>
			<View>
				<View className='items-center flex-row justify-between mx-1'>
					<UIcon
						onPress={() => goBack()}
						name='arrow-down'
						size={24}
						color='white'
					/>
					<UIcon name='ellipsis-vertical' size={24} color='white' />
				</View>
				<View
					style={{
						alignSelf: 'center'
					}}
				>
					<UImage
						height={WindowHeight * 0.45}
						width={WindowWidth * 0.85}
						source={trackInfo?.artwork as string}
						style={{
							marginTop: WindowHeight * 0.05,
							borderRadius: 20
						}}
						resizeMode={'cover'}
						className=' relative items-center  justify-center'
					/>
				</View>
			</View>
			<View
				style={{
					width: WindowWidth * 0.85,
					alignSelf: 'center'
				}}
			>
				<View className='flex-row justify-between items-center w-full'>
					<View className='mt-5'>
						<Title
							fontFamily={'Montserrat_600SemiBold'}
							numberOfLines={1}
							size={30}
						>
							{cutString(trackInfo?.title ? trackInfo.title : 'title', 15)}
						</Title>
						<Title color={'lightGray'} size={18}>
							{cutString(trackInfo?.artist ? trackInfo.artist : 'artist', 20)}
						</Title>
					</View>
					<Heart
						id={trackInfo?.id}
						type={'song'}
						style={{
							marginRight: -20
						}}
					/>
				</View>
				<Sliders />
				<View className='flex-row justify-between items-center'>
					<UIcon
						name='shuffle'
						onPress={() => handleShuffle()}
						size={24}
						color='white'
					/>
					<View className='flex-row items-center'>
						<UIcon
							name='play-skip-back'
							onPress={() => TrackPlayer.skipToPrevious()}
							size={24}
							color='white'
						/>
						<UIcon
							name={
								playBackState.state === 'playing'
									? 'md-pause-circle'
									: 'play-circle'
							}
							size={60}
							color='white'
							onPress={() => {
								if (playBackState.state === 'playing') {
									TrackPlayer.pause()
								} else {
									TrackPlayer.play()
								}
							}}
						/>
						<UIcon
							name='play-skip-forward'
							onPress={() => TrackPlayer.skipToNext()}
							size={24}
							color='white'
						/>
					</View>
					<RepeatIcon />
				</View>
			</View>
		</View>
	)
}

export default Song
