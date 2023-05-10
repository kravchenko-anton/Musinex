import { useEffect, useState } from 'react'
import { View } from 'react-native'
import TrackPlayer, { RepeatMode, State, useActiveTrack, usePlaybackState } from 'react-native-track-player'
import { useTypedSelector } from '../../hook/useTypedSelector'
import { cutString } from '../../utils/cutString'
import { getHexCode } from '../../utils/getColor'
import { randomBeautifulColor } from '../../utils/getRandomColor'
import Icon from '../icon/defaultIcon/Icon'
import UFastImage from '../image/fastimage'
import Title from '../title/title'
import { setupPlayer } from './usePlayer'

const SongPlayer = () => {
	const selector = useTypedSelector(state => state.player)
	const playBackState = usePlaybackState()
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	const trackInfo = useActiveTrack()
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
		const addTracks = async () => {
			await TrackPlayer.reset().then(() => {
				TrackPlayer.add(
					selector[0].data.map(item => {
						return {
							id: item.id,
							url: item.url,
							title: item.title,
							artist: item.artist,
							artwork: item.artwork,
							color: randomBeautifulColor(80, 21)
						}
					})
				).then(() => {
					TrackPlayer.skip(selector[0].songIndex)
					TrackPlayer.play()
					setIsPlayerReady(true)
				})
			})
		}
		addTracks()
	}, [selector])
	
	if (!isPlayerReady || selector.length <= 0 || !trackInfo) return null
	
	return (
		<View
			style={{ backgroundColor: trackInfo.color }}
			className='rounded-xl absolute self-center bottom-[70px] h-[65px] w-10/12'
		>
			<View className='flex flex-row justify-between items-center h-full'>
				<View className='flex flex-row items-center ml-3 mr-3'>
					<UFastImage
						source={trackInfo.artwork as string}
						width={50}
						height={50}
						borderRadius={5}
					/>
					<View className='flex flex-col ml-2'>
						<Title
							color={getHexCode('white')}
							className='max-w-[200px]'
							size={20}
							text={cutString(trackInfo.title as string, 10)}
						/>
						<Title
							color={getHexCode('white')}
							className='max-w-full'
							size={16}
							text={cutString(trackInfo.artist as string, 13)}
						/>
					</View>
				</View>
				<View className='flex-row'>
					<Icon
						color={getHexCode('white')}
						name='arrow-back-circle'
						onPress={() => TrackPlayer.skipToPrevious()}
					/>
					<Icon
						color={getHexCode('white')}
						name={'arrow-forward-circle'}
						onPress={() => TrackPlayer.skipToNext()}
					/>
					<Icon
						color={getHexCode('white')}
						name={playBackState.state == State.Playing ? 'pause' : 'play'}
						onPress={() =>
							playBackState.state === State.Playing
								? TrackPlayer.pause()
								: TrackPlayer.play()
						}
					/>
				</View>
			</View>
		</View>
	)
}

export default SongPlayer
