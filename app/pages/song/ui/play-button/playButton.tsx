import { PlayButtonProps } from '@/pages/song/ui/play-button/playButton.types'
import Icon from '@/ui/icon/default-icon/icon'
import { Color } from '@/utils/color'
import { trackPause, trackPlay } from '@/utils/player/player.actions'
import { FC } from 'react'
import { State, usePlaybackState } from 'react-native-track-player'

const PlayButton: FC<PlayButtonProps> = ({ size, ...props }) => {
	const playBackState = usePlaybackState()
	return (
		<Icon
			name={
				playBackState.state === State.Playing ||
				playBackState.state === State.Buffering
					? props.circle
						? 'md-pause-circle'
						: 'pause'
					: props.circle
					? 'md-play-circle'
					: 'play'
			}
			size={size}
			color={Color.white}
			onPress={async () => {
				if (playBackState.state === State.Playing) await trackPause()
				else await trackPlay()
			}}
			{...props}
		/>
	)
}

export default PlayButton
