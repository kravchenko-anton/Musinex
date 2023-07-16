import { useTypedSelector } from '@/hook/useTypedSelector'
import { getServerFileUrl } from '@/services/api.config'
import { trackPause, trackPlay } from '@/utils/player/player.function'
import { setupPlayer } from '@/utils/player/setup.player'
import { generateRandomBeautifulHexColor } from '@/utils/random.color'
import { useEffect, useState } from 'react'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'

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
			await trackPause()
			await TrackPlayer.stop()
			await TrackPlayer.add(
				selector[0].data.map(value => {
					const color = generateRandomBeautifulHexColor()
					return {
						id: value.id,
						url: getServerFileUrl(value.url),
						title: value.title,
						artist: value.artist,
						coverBig: value.coverBig,
						coverSmall: value.coverSmall,
						artwork: value.coverBig,
						color
					}
				})
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
