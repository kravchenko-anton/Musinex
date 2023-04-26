import { useEffect, useState } from 'react'
import { View } from 'react-native'
import TrackPlayer, { RepeatMode, State, useActiveTrack, usePlaybackState } from 'react-native-track-player'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hook/useTypedSelector'
import { actions } from '../../redux/player/playerSlice'
import Icon from '../icon/defaultIcon/Icon'
import UImage from '../image/Image'
import Title from '../title/title'
import { getSong, setupPlayer } from './usePlayer'

const SongPlayer = () => {
	const selector = useTypedSelector((state) => state.player)
	const playBackState = usePlaybackState()
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	const trackInfo = useActiveTrack()
	const dispatch = useDispatch()
	const [activeTrackId, setActiveTrackId] = useState<number>()
	const track = getSong(activeTrackId as number)
	
	
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
		setActiveTrackId(selector[0].data.find((value, index) => index === selector[0].PressedSongIndex)?.id as number)
		
		
		if (!track) return
		const Track = {
			id: track.id,
			url: track.url,
			title: track.title,
			artist: track.artist,
			artwork: track.artwork
		}
		
		TrackPlayer.reset().then(() => {
			TrackPlayer.load(Track).then(() => {
				TrackPlayer.seekTo(0)
				TrackPlayer.play()
				setIsPlayerReady(true)
			})
		})
	}, [selector, activeTrackId, isPlayerReady])
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
				<Icon name='arrow-back-circle' onPress={() => {
					dispatch(actions.skipToPrevious())
				}} />
				<Icon name={'arrow-forward-circle'} onPress={() => {
					dispatch(actions.skipToNext())
				}} />
				<Icon name={playBackState.state == State.Playing ? 'pause' : 'play'}
				      onPress={() => playBackState.state === State.Playing ? TrackPlayer.pause() : TrackPlayer.play()
					     
					     
				      } />
			</View>
		
		</View>
	</View>
}

export default SongPlayer