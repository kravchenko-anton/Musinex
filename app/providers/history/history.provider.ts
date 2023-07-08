import { useAction } from '@/hook/useAction'
import { useTypedSelector } from '@/hook/useTypedSelector'
import { PlayerTypes } from '@/utils/player/player.types'
import { useEffect } from 'react'
import TrackPlayer, { Event, useActiveTrack } from 'react-native-track-player'

export const historyProvider = () => {
	const player = useTypedSelector(state => state.player)
	const history = useTypedSelector(state => state.history)
	const { addToHistory, clearHistory } = useAction()
	const ActiveTrack = useActiveTrack() as PlayerTypes
	TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, e => {
		if (e.position.toFixed(0.1) === (e.duration - 5).toFixed(0.1)) {
			if (!ActiveTrack) return
			addToHistory(ActiveTrack)
		}
	})
	useEffect(() => {
		const historyToServer = async () => {
			console.log(history, 'History go to server 🎇')
		}
		historyToServer().then(() => {
			clearHistory()
		})
	}, [])
}
