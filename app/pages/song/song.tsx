import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import TrackPlayer, {
	AppKilledPlaybackBehavior,
	Capability,
	RepeatMode,
	State,
	usePlaybackState
} from 'react-native-track-player'
import { skipToPrevious } from 'react-native-track-player/lib/trackPlayer'
import { useTypedRoute } from '../../hook/useTypedRoute'
import { useDownloadTrackMp3Query, useGetTrackByIdQuery, useGetTrackMp3ByNameQuery } from '../../redux/api/song/song'
import NavigateHeader from '../../ui/header/navigateHeader'
import Icon from '../../ui/icon/defaultIcon/Icon'
import UImage from '../../ui/image/Image'
import Layout from '../../ui/Layout/Layout'
import FullScreenLoader from '../../ui/Loader/FullScreenLoader'
import Title from '../../ui/title/title'

const Song = () => {
	const { params } = useTypedRoute<'Song'>()
	const { data: songData } = useGetTrackByIdQuery(params.id)
	const { data: songLyrics } = useGetTrackMp3ByNameQuery(songData?.title as string)
	const { data: mp3 } = useDownloadTrackMp3Query(songLyrics?.result.find((item) => item.user.username === songData?.artist.name || item.title === songData?.title)?.url as string)
	const playBackState = usePlaybackState()
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	
	async function setupPlayer() {
		let isSetup = false
		try {
			await TrackPlayer.getActiveTrack()
			isSetup = true
		} catch {
			await TrackPlayer.setupPlayer()
			await TrackPlayer.updateOptions({
				android: {
					appKilledPlaybackBehavior:
					AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
				},
				capabilities: [
					Capability.Play,
					Capability.Pause,
					Capability.SkipToNext,
					Capability.SkipToPrevious,
					Capability.SeekTo
				],
				compactCapabilities: [
					Capability.Play,
					Capability.Pause,
					Capability.SkipToNext
				],
				progressUpdateEventInterval: 2
			})
			
			isSetup = true
		} finally {
			return isSetup
		}
	}
	
	async function addTracks() {
		if (!songData || !mp3) return
		if (playBackState.state === State.Playing) {
			await TrackPlayer.clearNowPlayingMetadata()
		}
		await TrackPlayer.add(
			{
				id: songData.id,
				url: mp3.music.download_url,
				title: songData?.title,
				artist: songData.artist.name,
				artwork: songData.album.cover_big
			}
		).then(() => {
			console.log({
				id: songData.id,
				url: mp3.music.download_url,
				title: songData?.title,
				artist: songData.artist.name,
				artwork: songData.album.cover_big
				
			})
		})
		await TrackPlayer.setRepeatMode(RepeatMode.Queue)
	}
	
	useEffect(() => {
		async function setup() {
			let isSetup = await setupPlayer()
			
			const queue = await TrackPlayer.getQueue()
			if (isSetup && queue.length >= 0) {
				await addTracks()
			}
			
			setIsPlayerReady(isSetup)
		}
		
		setup()
	}, [])
	
	
	if (!songData || !mp3 || !isPlayerReady) return <FullScreenLoader />
	return <Layout>
		<NavigateHeader logoSize={30} className='mb-4' />
		<Title text={songData.title} size={30} className={'mx-auto mb-4'} />
		<UImage source={songData.album.cover_big} className={'rounded-full mx-auto'} width={300} height={300} />
		<View className='justify-between flex-row'>
			<Icon onPress={() => skipToPrevious()} name='caret-back' />
			<Icon onPress={() => {
				if (playBackState.state === State.Playing) {
					TrackPlayer.pause()
				} else {
					TrackPlayer.play()
				}
			}}
			      name={(playBackState.state === State.Playing) ? 'pause' : 'play'} />
			<Icon onPress={() => TrackPlayer.skipToNext()} name='caret-forward' />
		</View>
	</Layout>
}

export default Song
