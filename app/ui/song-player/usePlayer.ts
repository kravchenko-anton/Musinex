import { useTypedSelector } from '@/hook/useTypedSelector'
import { generateRandomBeautifulHexColor } from '@/utils/getRandomColor'
import { useEffect, useState } from 'react'
import TrackPlayer, { Capability, Event, RepeatMode, useActiveTrack } from 'react-native-track-player'

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
				alwaysPauseOnInterruption: true
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
	const trackInfo = useActiveTrack()
	TrackPlayer.addEventListener(Event.RemoteNext, async () => {
		const nextSong = selector[0].data.find(
			(value, index) => index === selector[0].songIndex +
			   1
		)
		const color = generateRandomBeautifulHexColor()
		if (!nextSong) return
		await TrackPlayer.stop()
		await TrackPlayer.load({
			id: nextSong.id,
			url: nextSong.url,
			title: nextSong.title,
			artist: nextSong.artist,
			artwork: nextSong.artwork,
			color: color
		})
		await TrackPlayer.play()
	})
	TrackPlayer.addEventListener(Event.RemotePrevious, async () => {
		const nextSong = selector[0].data.find(
			(value, index) => index === selector[0].songIndex - 1)
		const color = generateRandomBeautifulHexColor()
		if (!nextSong) return
		await TrackPlayer.stop()
		await TrackPlayer.load({
			id: nextSong.id,
			url: nextSong.url,
			title: nextSong.title,
			artist: nextSong.artist,
			artwork: nextSong.artwork,
			color: color
		})
		await TrackPlayer.play()
	})
	
	
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
			const selectedSong = selector[0].data.find(
				(value, index) => index === selector[0].songIndex)
			const color = generateRandomBeautifulHexColor()
			if (!selectedSong) return
			if (trackInfo && trackInfo.title	=== selectedSong.title) return
			await TrackPlayer.stop()
			await TrackPlayer.load({
				id: selectedSong.id,
				url: selectedSong.url,
				title: selectedSong.title,
				artist: selectedSong.artist,
				artwork: selectedSong.artwork,
				color: color
			})
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
