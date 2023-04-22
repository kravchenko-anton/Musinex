import React, { useEffect } from 'react'
import { View } from 'react-native'
import TrackPlayer, { State, usePlaybackState } from 'react-native-track-player'
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
	const playerState = usePlaybackState()
	useEffect(() => {
		const play = async () => {
			await TrackPlayer.getActiveTrack().then((track) => {
				console.log(track)
			})
			if (!songData || !mp3) return <FullScreenLoader />
			await TrackPlayer.reset()
			await TrackPlayer.getActiveTrack().then((track) => {
				if (track === null) {
					TrackPlayer.add({
						id: songData.id.toString(),
						url: mp3.music.download_url,
						title: songData.title,
						artist: songData.artist.name,
						artwork: songData.album.cover_big
					})
				}
			})
			await TrackPlayer.play()
			
			
			await TrackPlayer.add({
				id: songData.id,
				url: mp3.music.download_url,
				title: songData.title,
				artist: songData.artist.name,
				artwork: songData.album.cover_big
			})
			await TrackPlayer.getPlaybackState().then((state) => {
				console.log(state)
			})
			await TrackPlayer.getVolume().then((volume) => {
				console.log(volume)
			})
			await TrackPlayer.play()
		}
		play()
	}, [])
	console.log(playerState, State.Playing)
	
	async function handlePlayPress() {
		if (playerState.state === State.Playing) {
			await TrackPlayer.pause()
		} else {
			await TrackPlayer.play()
		}
	}
	
	if (!songData || !mp3) return <FullScreenLoader />
	return <Layout>
		<NavigateHeader logoSize={30} className='mb-4' />
		<Title text={songData.title} size={30} className={'mx-auto mb-4'} />
		<UImage source={songData.album.cover_big} className={'rounded-full mx-auto'} width={300} height={300} />
		<View className='justify-between flex-row'>
			<Icon onPress={() => TrackPlayer.skipToPrevious()} name='caret-back' />
			<Icon onPress={handlePlayPress}
			      name={(playerState.state === State.Playing) ? 'pause' : 'play'} />
			<Icon onPress={() => TrackPlayer.skipToNext()} name='caret-forward' />
		</View>
	</Layout>
}

export default Song
