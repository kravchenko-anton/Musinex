import { useTypedSelector } from '@/hook/useTypedSelector'
import { setupPlayer } from '@/utils/player/setup.player'
import { fadeInVolume, fadeOutVolume } from '@/utils/player/song.fade'
import { generateRandomBeautifulHexColor } from '@/utils/random.color'
import { useEffect, useState } from 'react'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'

export const trackPlay = async () => await fadeInVolume().then(() => TrackPlayer.play())
	export const trackPause = async () => await fadeOutVolume().then(() => TrackPlayer.pause())
	export const skipToNext = async () => await fadeOutVolume().then(() => TrackPlayer.skipToNext().then(() => trackPlay()))
	export const skipToPrevious = async () => await fadeOutVolume().then(() => TrackPlayer.skipToPrevious().then(() => trackPlay()))
export const usePlayer = () => {
	const selector = useTypedSelector(state => state.player)
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	useEffect(() => {
		async function setup() {
			const isSetup = await setupPlayer()
			setIsPlayerReady(isSetup)
			await TrackPlayer.setRepeatMode(RepeatMode.Queue)
		}
		setup()
	}, [])
	
	useEffect(() => {
		if (selector.length <= 0 || !isPlayerReady) return
		const addTracks = async () => {
			await TrackPlayer.reset()
			const color = generateRandomBeautifulHexColor()
			await trackPause()
			await TrackPlayer.stop()
			await TrackPlayer.add(
				selector[0].data.map((value) => ({
						id: value.id,
						url: value.url,
						title: value.title,
						artist: value.artist,
						coverBig: value.coverBig,
						coverSmall: value.coverSmall,
						artwork: value.coverBig,
						color,
					}))
			)
			await TrackPlayer.skip(selector[0].songIndex, 0)
			await trackPlay()
			setIsPlayerReady(true)
		}
		addTracks()
	}, [selector])

	return {
		isPlayerReady,
		selector
	}
}
