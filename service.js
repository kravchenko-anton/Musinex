
import {skipToNext, skipToPrevious, trackPause, trackPlay} from "@/utils/player/player.function";
import TrackPlayer from 'react-native-track-player'

module.exports = async function () {
	TrackPlayer.addEventListener('remote-play', () => trackPlay())
	TrackPlayer.addEventListener('remote-pause', () => trackPause())
	TrackPlayer.addEventListener('remote-next', () => skipToNext())
	TrackPlayer.addEventListener('remote-previous', () => skipToPrevious())
	TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.destroy())
}
