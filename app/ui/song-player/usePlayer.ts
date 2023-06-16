import { useTypedSelector } from '@/hook/useTypedSelector'
import { randomBeautifulColor } from '@/utils/getRandomColor'
import { useEffect, useState } from 'react'
import TrackPlayer, { Capability, Event, RepeatMode, usePlaybackState } from 'react-native-track-player'

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
			android: {
				alwaysPauseOnInterruption: true,
			},
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
			console.log(selector[0].songIndex + 1)
			TrackPlayer.addEventListener(Event.RemoteNext, async () => {
					const selectedSong = selector[0].data.find((value, index) => index ===
					selector[0].songIndex + 1
					);
					const color = randomBeautifulColor(100, 15)
					if (!selectedSong) return
					await TrackPlayer.load(
						{
							id: selectedSong.id,
							url: selectedSong.url,
							title: selectedSong.title,
							artist: selectedSong.artist,
							artwork: selectedSong.artwork,
							color: color
						}
					)
				}
			)
			TrackPlayer.addEventListener(Event.RemotePrevious, () =>
				async () => {
					console.log(selector[0].songIndex - 1)
				
					const selectedSong = selector[0].data.find((value, index) => index === selector[0].songIndex - 1)
					const color = randomBeautifulColor(100, 15)
					if (!selectedSong) return
					await TrackPlayer.load(
						{
							id: selectedSong.id,
							url: selectedSong.url,
							title: selectedSong.title,
							artist: selectedSong.artist,
							artwork: selectedSong.artwork,
							color: color
						}
					)
				}
			)
			await TrackPlayer.setRepeatMode(RepeatMode.Off)
		}

		setup()
	}, [])

	useEffect(() => {
		if (selector.length <= 0 || !isPlayerReady) return
		const addTracks = async () => {
			const selectedSong = selector[0].data.find((value, index) => index === selector[0].songIndex);
			const color = randomBeautifulColor(100, 15)
			if (!selectedSong) return
			await TrackPlayer.load(
				{
					id: selectedSong.id,
					url: selectedSong.url,
					title: selectedSong.title,
					artist: selectedSong.artist,
					artwork: selectedSong.artwork,
					color: color
				}
			)
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
