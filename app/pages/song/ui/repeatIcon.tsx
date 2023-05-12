import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useState } from 'react'
import TrackPlayer, { RepeatMode } from 'react-native-track-player'

const RepeatIcon = () => {
	const [repeatMode, setRepeatMode] = useState('off')
	const repeatIcon = () => {
		switch (repeatMode) {
			case 'off':
				return 'repeat-off'
			case 'track':
				return 'repeat-once'
			case 'repeat':
				return 'repeat'
		}
	}
	
	const changeRepeatMode = () => {
		switch (repeatMode) {
			case 'off':
				TrackPlayer.setRepeatMode(RepeatMode.Track)
				setRepeatMode('track')
				break
			case 'track':
				TrackPlayer.setRepeatMode(RepeatMode.Queue)
				setRepeatMode('repeat')
				break
			case 'repeat':
				TrackPlayer.setRepeatMode(RepeatMode.Off)
				setRepeatMode('off')
				break
		}
	}
	
	return <MaterialCommunityIcons
		name={`${repeatIcon() as 'repeat-off' | 'repeat-once' | 'repeat'}`}
		style={{
			justifyContent: 'center',
			alignSelf: 'center'
		}}
		onPress={changeRepeatMode} size={24} color='white' />
	
}

export default RepeatIcon