import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import Heart from '@/ui/icon/heart/heart'
import { cutString } from '@/utils/cutString'
import { getHexCode } from '@/utils/getColor'
import { randomBeautifulColor } from '@/utils/getRandomColor'
import { useEffect, useState } from 'react'
import { Pressable, View } from 'react-native'
import TrackPlayer, { RepeatMode, State, useActiveTrack, usePlaybackState } from 'react-native-track-player'
import Icon from '../icon/defaultIcon/Icon'
import UFastImage from '../image/fastimage'
import Title from '../title/title'
import { setupPlayer } from './usePlayer'

const SongPlayer = () => {
	const selector = useTypedSelector(state => state.player)
	const playBackState = usePlaybackState()
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	const trackInfo = useActiveTrack()
	const { navigate } = useTypedNavigation()
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
		<Pressable onPress={() => navigate('Song')}
		           style={{ backgroundColor: trackInfo.color }}
		           className='rounded-xl absolute self-center bottom-[70px] h-[65px] w-10/12'
		>
			<View className='flex flex-row justify-between items-center h-full'>
				<View className=' flex-row items-center ml-3 mr-3'>
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
					<Heart id={trackInfo.id} type={'songs'} resizeMode={'cover'} />
					<Icon
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
			</View>
		</Pressable>
	)
}

export default SongPlayer
