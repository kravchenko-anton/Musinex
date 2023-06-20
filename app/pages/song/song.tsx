import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import RepeatIcon from '@/pages/song/ui/repeatIcon'
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
				}} className='bg-lightBlack  rounded-b-3xl p-3'>
						<View className='flex-row justify-between mb-5 items-center'>
					<UIcon
							onPress={() => goBack()}
						name='arrow-down'
						size={24}
						color='white'
					/>
			<View className='items-center'>
				<Title translate fontFamily={'Montserrat_700Bold'}>
					Now	Playing
				</Title>
				<Title	translate color={'lightGray'} size={16}>
					{String(trackInfo?.title)}
				</Title>
			</View>
					<UIcon name='ellipsis-vertical' size={24} color='white' />
						</View>
					<View className='bg-primaryGray h-1.5 w-10 self-center rounded-full'/>
				</View>
				<View
					style={{
						alignSelf: 'center',
						position: 'relative',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: WindowHeight * 0.04,
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
				<View className='items-center mt-7 mb-2'>
					<Title size={30} fontFamily={'Montserrat_600SemiBold'}>
						{String(trackInfo?.title)}
					</Title>
					<Title color={'lightGray'}   size={20}>
						{String(trackInfo?.artist)}
					</Title>
				</View>
				<View className=' w-full justify-center items-center flex-row'>
					<UIcon border padding={10}
						name='play-skip-back'
						onPress={() => TrackPlayer.skipToPrevious()}
						size={30}
						color='white'
					/>
					<UIcon
						name={
							playBackState.state === 'playing'
								? 'md-pause-circle'
								: 'play-circle'
						}
						size={70}
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
						name='play-skip-forward' padding={10}
						onPress={() => TrackPlayer.skipToNext()}
						size={30}
						color='white'
					/>
				</View>
				<Sliders />
				<View className='flex-row self-center items-center  justify-between w-full px-3 mt-4'>
						<UIcon
						name='play-back'
						onPress={() => handleShuffle()}
						size={30}
						color='lightGray'
					/>
					<UIcon
						name='shuffle'
						onPress={() => handleShuffle()}
						size={30}
						color='lightGray'
					/>
					
					<Heart size={35}
						id={trackInfo?.id}
						type={'song'}
					/>
					<RepeatIcon/>
					<UIcon
						name='ios-play-forward'
						onPress={() => handleShuffle()}
						size={30}
						color='lightGray'
					/>
				</View>
			</View>
		</View>
	)
}

export default Song
