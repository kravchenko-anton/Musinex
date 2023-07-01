import { AnimatedImage } from '@/animation/global'
import { CoverImageProps } from '@/pages/song/components/cover-image/CoverImage.types'
import { useSongAnimation } from '@/pages/song/song-animation'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@/utils/screen'
import { FC } from 'react'

const CoverImage:FC<CoverImageProps> = ({coverBig, isOpen}) => {
	const {ImageAnimation} = useSongAnimation({
		isOpen
	})
	return <AnimatedImage
			source={{
				uri: String(coverBig),
				height: WINDOW_WIDTH * 0.8,
				width: WINDOW_WIDTH * 0.8,
			}}
			style={[{
				borderRadius: 15,
				marginTop: WINDOW_HEIGHT * 0.06
			}, ImageAnimation]}
			
			resizeMode={'cover'}
			className=' relative items-center  justify-center self-center'
		/>
}

export default CoverImage