import { UPressableProps } from '@/types/global'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import { trackPause, trackPlay } from '@/utils/player/usePlayer'
import { FC } from 'react'
import { State, usePlaybackState } from 'react-native-track-player'

interface IPlayButton extends UPressableProps{
	size: number
	circle?: boolean
}
const PlayButton:FC<IPlayButton> = ({size, ...props}) => {
	const playBackState = usePlaybackState()
	return <UIcon
		name={
			playBackState.state === State.Playing
				? (props.circle ? 'md-pause-circle' : 'pause')
				: (props.circle ? 'md-play-circle' : 'play')
		}
		size={size}
		color='white'
		onPress={async () => {
			if (playBackState.state === State.Playing) await trackPause()
			else await trackPlay()
		}}
		{...props}
	/>
}

export default PlayButton