import { useAction } from '@/hook/useAction'
import { useTypedSelector } from '@/hook/useTypedSelector'
import { userServices } from '@/services/user.services'
import { PlayerTypes } from '@/utils/player/player.types'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import TrackPlayer, { Event, useActiveTrack } from 'react-native-track-player'

export const historyProvider = () => {
	const history = useTypedSelector(state => state.history)
	const { addToHistory, clearHistory } = useAction()
	const ActiveTrack = useActiveTrack() as PlayerTypes
	const { mutate: postHistory } = useMutation(['Post History'], () =>
		userServices.postHistory({
			data: [...new Set(history)]
		})
	)
	TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, e => {
		if (e.position.toFixed(0.1) === (e.duration - 5).toFixed(0.1)) {
			ActiveTrack && ActiveTrack.id && addToHistory([ActiveTrack.id])
		}
	})
	useEffect(() => {
		const historyToServer = async () => {
			if (history.length === 0) return
			await postHistory()
		}
		historyToServer().then(() => clearHistory())
	}, [])
}
