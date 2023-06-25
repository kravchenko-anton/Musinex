import { useState } from 'react'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'

type RepeatModeType = 'repeat-off' | 'repeat-once' | 'repeat'
const UseRepeatIcon = () => {
	const [repeatMode, setRepeatMode] = useState<RepeatModeType>('repeat-off')
	const changeRepeatMode = () => {
		switch (repeatMode) {
			case 'repeat-off':
				TrackPlayer.setRepeatMode(RepeatMode.Track)
				setRepeatMode('repeat-once')
				break
			case 'repeat-once':
				TrackPlayer.setRepeatMode(RepeatMode.Queue)
				setRepeatMode('repeat')
				break
			case 'repeat':
				TrackPlayer.setRepeatMode(RepeatMode.Off)
				setRepeatMode('repeat-off')
				break
		}
	}
	return  { repeatMode, changeRepeatMode }
}

export default UseRepeatIcon