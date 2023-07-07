import { useAction } from '@/hook/useAction'
import { useTypedSelector } from '@/hook/useTypedSelector'
import { trackPause, trackPlay } from '@/utils/player/player.function'
import { PlayerTypes } from '@/utils/player/player.types'
import { setupPlayer } from '@/utils/player/setup.player'
import { generateRandomBeautifulHexColor } from '@/utils/random.color'
import { useEffect, useState } from 'react'
import TrackPlayer, {
	Event,
	RepeatMode,
	useActiveTrack
} from 'react-native-track-player'

export const usePlayer = () => {
	const selector = useTypedSelector(state => state.player)
	const { addToHistory } = useAction()
	const ActiveTrack = useActiveTrack() as PlayerTypes
	const [isPlayerReady, setIsPlayerReady] = useState(false)
	useEffect(() => {
		async function setup() {
			const isSetup = await setupPlayer()
			setIsPlayerReady(isSetup)
			await TrackPlayer.setRepeatMode(RepeatMode.Queue)
			// If track progress finish and user listen full song
			await TrackPlayer.addEventListener(
				Event.PlaybackActiveTrackChanged,
				async () => {
					if (ActiveTrack.duration === ActiveTrack.position) {
						addToHistory({
							data: [ActiveTrack]
						})
					}
				}
			)
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
				selector[0].data.map(value => ({
					id: value.id,
					url: value.url,
					title: value.title,
					artist: value.artist,
					coverBig: value.coverBig,
					coverSmall: value.coverSmall,
					artwork: value.coverBig,
					color
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
