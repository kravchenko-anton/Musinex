import TrackPlayer, { Capability } from 'react-native-track-player'

export async function setupPlayer() {
	let isSetup = false
	try {
		await TrackPlayer.getActiveTrack()
		isSetup = true
		return isSetup
	} catch {
		await TrackPlayer.setupPlayer({
			autoHandleInterruptions: true,
			maxCacheSize: 10,
			maxBuffer:0,
			waitForBuffer: true,
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
		return isSetup
	}
}