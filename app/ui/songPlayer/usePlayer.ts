import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from 'react-native-track-player'


export async function setupPlayer() {
	let isSetup = false
	try {
		await TrackPlayer.getActiveTrack()
		isSetup = true
	} catch {
		await TrackPlayer.setupPlayer()
		await TrackPlayer.updateOptions({
			android: {
				appKilledPlaybackBehavior:
				AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
			},
			capabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext,
				Capability.SkipToPrevious,
				Capability.SeekTo
			],
			compactCapabilities: [
				Capability.Play,
				Capability.Pause,
				Capability.SkipToNext
			]
		})
		
		isSetup = true
	} finally {
		return isSetup
	}
}

