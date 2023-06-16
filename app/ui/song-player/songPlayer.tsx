import { useTypedNavigation } from '@/hook/useTypedNavigation'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Heart from '@/ui/icon/heart/heart'
import UImage from '@/ui/image/image'
import { usePlayer } from '@/ui/song-player/usePlayer'
import { cutString } from '@/utils/cutString'
import { getHexCode } from '@/utils/getColor'
import { Pressable, View } from 'react-native'
import TrackPlayer, { State, useActiveTrack, usePlaybackState } from 'react-native-track-player'
import Title from '../title/title'

const SongPlayer = () => {
	const { navigate } = useTypedNavigation()
	const trackInfo = useActiveTrack()
	const playBackState = usePlaybackState()
	const { isPlayerReady, selector } = usePlayer()
	if (!isPlayerReady || selector.length <= 0 || !trackInfo) return null
	return (
		<View
			style={{
				backgroundColor: trackInfo.color
			}}
			className='rounded-xl absolute self-center bottom-[70px] h-[65px] w-11/12 bg-dark'
		>
			<Pressable
				onPress={() => navigate('Song')}
				className='flex flex-row justify-between items-center'
			>
				<View className='flex-row items-center ml-3 mr-3'>
					<UImage source={trackInfo.artwork as string} width={45} height={45} />
					<View className='flex flex-col ml-2'>
						<Title color={'white'} className='max-w-[200px]' size={20}>
							{cutString(trackInfo.title as string, 10)}
						</Title>
						<Title color={'white'} className='max-w-full' size={16}>
							{cutString(trackInfo.artist as string, 10)}
						</Title>
					</View>
				</View>
				<View className='flex-row'>
					<Heart id={trackInfo.id} type={'song'} />
					<UIcon
						color={getHexCode('white')}
						className='mr-3 items-center justify-center'
						name={playBackState.state == State.Playing ? 'pause' : 'play'}
						onPress={() =>
							playBackState.state === State.Playing
								? TrackPlayer.pause()
								: TrackPlayer.play()
						}
					/>
				</View>
			</Pressable>
		</View>
	)
}

export default SongPlayer
