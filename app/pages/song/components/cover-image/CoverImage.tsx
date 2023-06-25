import { AnimatedImage } from '@/animation/global'
import { ICoverImage } from '@/pages/song/components/cover-image/CoverImage.types'
import { useSongAnimation } from '@/pages/song/song-animation'
import { WindowHeight, WindowWidth } from '@/utils/screen'
import { FC } from 'react'
import { View } from 'react-native'

const CoverImage:FC<ICoverImage> = ({artwork, isOpen}) => {
	const {ImageAnimation} = useSongAnimation({
		isOpen
	})
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

export default CoverImage