import Lottie, { AnimatedLottieViewProps } from 'lottie-react-native'
import { FC, memo } from 'react'
import { Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { FavoriteAction } from '../../../redux/favorite/favoriteSlice'
import { ICatalogRenderTypes } from '../../../types/catalogTypes'
import { useHeart } from './useHeart'

interface IHeart extends Omit<AnimatedLottieViewProps, 'source'> {
	type: ICatalogRenderTypes
	id: number | string
	size?: number
}

const Heart: FC<IHeart> = ({ size = 70, type, id, ...rest }) => {
	const heart = useHeart(id, type)
	const dispatch = useDispatch()
	console.log(heart)
	return <Pressable onPress={() => dispatch(FavoriteAction.toggleFavorite({
		id,
		type
	}))}>
		<Lottie style={{
			width: size,
			height: size
		}} source={require('../../../assets/heart.json')} {...rest} />
	</Pressable>
}

export default memo(Heart)