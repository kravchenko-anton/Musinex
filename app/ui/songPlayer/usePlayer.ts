import TrackPlayer, { Capability } from 'react-native-track-player'
import { useDownloadTrackMp3Query, useGetTrackByIdQuery, useGetTrackMp3ByNameQuery } from '../../redux/api/song/song'


export async function setupPlayer() {
	let isSetup = false
	try {
		await TrackPlayer.getActiveTrack()
		isSetup = true
	} catch {
		await TrackPlayer.setupPlayer({
			autoHandleInterruptions: false,
			maxCacheSize: 10
		})
		await TrackPlayer.updateOptions({
			// android: {
			// 	appKilledPlaybackBehavior:
			// 	AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
			// },
			capabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
				Capability.SeekTo,
				Capability.Stop
			
			],
			compactCapabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
				Capability.SeekTo
			]
		})
		
		isSetup = true
	} finally {
		return isSetup
	}
}


export const getSong = (songId: number) => {
	const { data: trackData } = useGetTrackByIdQuery(songId as any, {
		skip: !songId
	})
	const { data: trackMp3Name } = useGetTrackMp3ByNameQuery(trackData?.title as string, {
		skip: !trackData
	})
	const trackName = trackMp3Name?.result.find((track) => track.title === trackData?.title)
	const { data: trackMp3 } = useDownloadTrackMp3Query(trackName?.url as string, {
		skip: !trackName
	})
	if (!trackData || !trackMp3Name || !trackMp3) return
	return {
		id: trackData.id,
		url: trackMp3.music.download_url,
		title: trackData.title,
		artist: trackData.artist.name,
		artwork: trackData.album.cover_big
	}
}
