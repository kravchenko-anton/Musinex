import { useEffect, useState } from 'react'
import { View } from 'react-native'
import TrackPlayer, { RepeatMode, State, useActiveTrack, usePlaybackState } from 'react-native-track-player'
import { useTypedSelector } from '../../hook/useTypedSelector'
import Icon from '../icon/defaultIcon/Icon'
import UImage from '../image/Image'
import Title from '../title/title'
import { setupPlayer } from './usePlayer'

const SongPlayer = () => {
	const selector = useTypedSelector((state) => state.player)
	const playBackState = usePlaybackState()
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	const trackInfo = useActiveTrack()
	const addTracks = async () => {
		await TrackPlayer.reset().then(() => {
			TrackPlayer.add(selector[0].data).then(() => {
				TrackPlayer.skip(selector[0].PressedSongIndex)
				TrackPlayer.play()
				setIsPlayerReady(true)
			})
		})
	}
	
	
	useEffect(() => {
		async function setup() {
			let isSetup = await setupPlayer()
			setIsPlayerReady(isSetup)
			await TrackPlayer.setRepeatMode(RepeatMode.Queue)
		}
		
		setup()
	}, [])
	
	useEffect(() => {
		if (selector.length <= 0 || !isPlayerReady) return
		addTracks()
	}, [selector])
	if (!isPlayerReady || selector.length <= 0 || !trackInfo) return null
	return <View
		className='bg-[#115143] rounded-t-xl absolute self-center  bottom-[65px] h-[65px] w-full'>
		<View className='flex flex-row justify-between items-center h-full'>
			<View className='flex flex-row items-center ml-3 mr-3'>
				<UImage
					source={
						trackInfo.artwork as string
					} width={50} height={50} borderRadius={5}
				/>
				<View className='flex flex-col ml-2'>
					<Title className='max-w-[200px]' size={20} text={trackInfo.title as string} />
					<Title className='max-w-full' size={16} text={trackInfo.artist as string} />
				</View>
			</View>
			<View className='flex-row'>
				<Icon name='arrow-back-circle' onPress={() => TrackPlayer.skipToPrevious()} />
				<Icon name={'arrow-forward-circle'} onPress={() => TrackPlayer.skipToNext()} />
				<Icon name={playBackState.state == State.Playing ? 'pause' : 'play'}
				      onPress={() => playBackState.state === State.Playing ? TrackPlayer.pause() : TrackPlayer.play()
					     
					     
				      } />
			</View>
		
		</View>
	</View>
}

export default SongPlayer