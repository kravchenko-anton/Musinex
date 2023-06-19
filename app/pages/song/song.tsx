import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import Sliders from '@/pages/song/ui/slider'
import { handleShuffle } from '@/pages/song/utils/handleShaffle'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Heart from '@/ui/icon/heart/heart'
import UImage from '@/ui/image/image'
import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { ScreenHeight, WindowHeight, WindowWidth } from '@/utils/screen'
import { View } from 'react-native'
import TrackPlayer, { useActiveTrack, usePlaybackState } from 'react-native-track-player'

const Song = () => {
	const selector = useTypedSelector(state => state.player)
	const playBackState = usePlaybackState()
	const trackInfo = useActiveTrack()
	const { goBack } = useTypedNavigation()
	if (!trackInfo) return
	return (
		<View
			style={{
				justifyContent: 'space-between',
				height: ScreenHeight,
				backgroundColor: getHexCode('primaryBlack'),
			}}
		>
			<View>
				<View
				style={{
					paddingTop: WindowHeight * 0.05,
				}} className='bg-lightBlack items-center rounded-b-3xl p-3  flex-row justify-between'>
					<UIcon
							onPress={() => goBack()}
						name='arrow-down'
						size={24}
						color='white'
					/>
					<Title translate fontFamily={'Montserrat_700Bold'}>
						Now	Playing
					</Title>
					<UIcon name='ellipsis-vertical' size={24} color='white' />
				</View>
				<View
					style={{
						alignSelf: 'center',
						position: 'relative',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: WindowHeight * 0.08,
					}}
				>
					<UImage
						height={WindowWidth * 0.8}
						width={WindowWidth * 0.8}
						source={String(trackInfo?.artwork)}
						style={{
							borderRadius: 15,
						}}
						resizeMode={'cover'}
						className=' relative items-center  justify-center'
					/>
				</View>

			</View>
			<View className='bg-lightBlack pt-4 rounded-t-3xl' style={{
				paddingBottom: WindowHeight * 0.05,
				paddingHorizontal:  10
			}}>
				<View className='w-full items-center justify-center self-center'>
					<View className='bg-primaryGray h-1.5 w-10  rounded-full'/>
				</View>
				<View className='items-center mt-4'>
					<Title size={30} fontFamily={'Montserrat_600SemiBold'}>
						{String(trackInfo?.title)}
					</Title>
					<Title color={'lightGray'}   size={20}>
						{String(trackInfo?.artist)}
					</Title>
				</View>
				<Sliders />
				<View className='flex-row self-center items-center'>
					<UIcon
						name='shuffle'
						onPress={() => handleShuffle()}
						size={24}
						color='white'
					/>
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
					<Heart
						id={trackInfo?.id}
						type={'song'}
					/>
				</View>
			</View>
		</View>
	)
}

export default Song
