import TrackPlayer from 'react-native-track-player'

const targetVolume = 1;
const tick = 10;
const duration = 50;
	const fadeSteps = 7;

export const fadeInVolume = async () => {
	const volumeIncrease = targetVolume / (duration / tick);
	const volume = await TrackPlayer.getVolume();
	const vol = Math.min(targetVolume, volume + volumeIncrease);
	await TrackPlayer.setVolume(vol).then(() => {
		if (volume < targetVolume) {
			setTimeout(fadeInVolume, tick);
		}
	});
}

export const fadeOutVolume = async () => {
	const initialVolume = await TrackPlayer.getVolume();
	const fadeInterval = duration / fadeSteps;
	
	for (let i = 0; i < fadeSteps; i++) {
		const volume = initialVolume - (initialVolume / fadeSteps) * i;
		await TrackPlayer.setVolume(volume);
		await new Promise((resolve) => setTimeout(resolve, fadeInterval));
	}
	
	await TrackPlayer.setVolume(0);
}

export const trackPlay = async () => await fadeInVolume().then(() => TrackPlayer.play())
	export const trackPause = async () => await fadeOutVolume().then(() => TrackPlayer.pause())