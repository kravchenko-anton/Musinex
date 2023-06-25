import { AnimatedImage } from '@/animation/global'
import { songAnimationValue } from '@/pages/song/animation/songAnimationTypes'
import { useSongAnimation } from '@/pages/song/animation/useSongAnimation'
import { WindowHeight, WindowWidth } from '@/utils/screen'
import { FC } from 'react'
import { View } from 'react-native'
import { Track } from 'react-native-track-player'

interface IImage  extends songAnimationValue, Pick<Track, 'artwork'>{}

const Image:FC<IImage> = ({artwork, isOpen}) => {
	const {ImageAnimation} = useSongAnimation(isOpen)
	return <View
		style={{ marginTop: WindowHeight * 0.06}}
		className='relative items-center  justify-center self-center'
	>
		<AnimatedImage
			source={{
				uri: String(artwork),
				height: WindowWidth * 0.8,
				width: WindowWidth * 0.8,
			}}
			style={[{
				borderRadius: 15,
			}, ImageAnimation]}
			
			resizeMode={'cover'}
			className=' relative items-center  justify-center'
		/>
	</View>
}

export default Image