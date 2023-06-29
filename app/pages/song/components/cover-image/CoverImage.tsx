import { AnimatedImage } from '@/animation/global'
import { CoverImageProps } from '@/pages/song/components/cover-image/CoverImage.types'
import { useSongAnimation } from '@/pages/song/song-animation'
import { WindowHeight, WindowWidth } from '@/utils/screen'
import { FC } from 'react'

const CoverImage:FC<CoverImageProps> = ({coverBig, isOpen}) => {
	const {ImageAnimation} = useSongAnimation({
		isOpen
	})
	return <AnimatedImage
			source={{
				uri: String(coverBig),
				height: WindowWidth * 0.8,
				width: WindowWidth * 0.8,
			}}
			style={[{
				borderRadius: 15,
				marginTop: WindowHeight * 0.06
			}, ImageAnimation]}
			
			resizeMode={'cover'}
			className=' relative items-center  justify-center self-center'
		/>
}

export default CoverImage