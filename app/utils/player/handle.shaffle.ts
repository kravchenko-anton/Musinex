import TrackPlayer from 'react-native-track-player'

export async function handleShuffle() {
	let queue = await TrackPlayer.getQueue()
	await TrackPlayer.reset()
	queue.sort(() => Math.random() - 0.5)
	await TrackPlayer.add(queue)
}