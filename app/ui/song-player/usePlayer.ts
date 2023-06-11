import { useTypedSelector } from '@/hook/useTypedSelector'
import { randomBeautifulColor } from '@/utils/getRandomColor'
import { useEffect, useState } from 'react'
import TrackPlayer, {
	Capability,
	RepeatMode,
	usePlaybackState
} from 'react-native-track-player'

export async function setupPlayer() {
	let isSetup = false
	try {
		await TrackPlayer.getActiveTrack()
		isSetup = true
	} catch {
		await TrackPlayer.setupPlayer({
			autoHandleInterruptions: true,
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

export const usePlayer = () => {
	const selector = useTypedSelector(state => state.player)
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	const playBackState = usePlaybackState()
	useEffect(() => {
		async function setup() {
			let isSetup = await setupPlayer()
			setIsPlayerReady(isSetup)
			await TrackPlayer.setRepeatMode(RepeatMode.Off)
		}

		setup()
	}, [])

	useEffect(() => {
		if (selector.length <= 0 || !isPlayerReady) return
		const addTracks = async () => {
			await TrackPlayer.stop()
			await TrackPlayer.reset()
			await TrackPlayer.add(
				selector[0].data.map(item => {
					return {
						id: item.id,
						url: item.url,
						title: item.title,
						artist: item.artist,
						artwork: item.artwork,
						color: randomBeautifulColor(100, 15)
					}
				})
			)
			await TrackPlayer.skip(selector[0].songIndex)
			await TrackPlayer.play()
			setIsPlayerReady(true)
		}
		addTracks()
	}, [selector])

	return {
		isPlayerReady,
		selector
	}
}
