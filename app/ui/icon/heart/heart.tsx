import Lottie, { AnimatedLottieViewProps } from 'lottie-react-native'
import { FC, memo, useEffect, useRef } from 'react'
import { Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { FavoriteAction } from '../../../redux/favorite/favoriteSlice'
import { IHeartProps } from '../../../types/catalogTypes'
import { useHeart } from './useHeart'

interface IHeart extends Omit<AnimatedLottieViewProps, 'source'>, IHeartProps {
	size?: number
}

const Heart: FC<IHeart> = ({ size = 70, type, id, ...rest }) => {
	const heart = useHeart({ id, type })
	const dispatch = useDispatch()
	let lottieRef = useRef<any>(null).current
	useEffect(() => {
		lottieRef.play(
			heart ? 0 : 80,
			heart ? 80 : 180
		)
	}, [heart])
	return <Pressable onPress={() => {
		dispatch(FavoriteAction.toggleFavorite({ id, type }))
	}}>
		<Lottie ref={ref => lottieRef = ref}
		        autoSize={true}
		        autoPlay={false}
		        duration={1000}
		        loop={false}
		        style={{
			        width: size,
			        height: size
		        }} source={require('../../../assets/heart.json')} {...rest} />
	</Pressable>
}

export default memo(Heart)