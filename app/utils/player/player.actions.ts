import { fadeInVolume, fadeOutVolume } from '@/utils/player/song.fade'
import TrackPlayer from 'react-native-track-player'

export async function handleShuffle() {
	const queue = await TrackPlayer.getQueue()
	await TrackPlayer.reset()
	queue.sort(() => Math.random() - 0.5)
	await TrackPlayer.add(queue)
}

export const trackPlay = async () =>
	await fadeInVolume().then(() => TrackPlayer.play())
export const trackPause = async () =>
	await fadeOutVolume().then(() => TrackPlayer.pause())
export const skipToNext = async () =>
	await fadeOutVolume().then(() =>
		TrackPlayer.skipToNext().then(() => trackPlay())
	)
export const skipToPrevious = async () =>
	await fadeOutVolume().then(() =>
		TrackPlayer.skipToPrevious().then(() => trackPlay())
	)
