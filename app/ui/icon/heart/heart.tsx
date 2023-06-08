import { IHeartProps } from '@/types/catalogTypes'
import Lottie, { AnimatedLottieViewProps } from 'lottie-react-native'
import { FC, memo, useEffect, useRef } from 'react'
import { Pressable } from 'react-native'
import { useHeart } from './useHeart'

interface IHeart extends Omit<AnimatedLottieViewProps, 'source'>, IHeartProps {
	size?: number
}

const Heart: FC<IHeart> = ({ size = 70, type, id,style, ...rest }) => {
	const heart = useHeart({ id, type })
	let lottieRef = useRef<any>(null).current
	const isFirstRun = useRef(true)
	useEffect(() => {
		if (isFirstRun.current) {
			if (heart) {
				lottieRef.play(80, 80)
			} else {
				lottieRef.play(180, 180)
			}
			isFirstRun.current = false
		} else if (heart) {
			lottieRef.play(0, 80)
		} else {
			lottieRef.play(80, 180)
		}
	}, [heart])

	return (
		<Pressable
			onPress={() => {
				console.log('heart')
			}}
			style={style}
		>
			<Lottie
				ref={ref => (lottieRef = ref)}
				autoSize={true}
				autoPlay={false}
				duration={1000}
				loop={false}
				style={{
					width: size,
					height: size
				}}
				source={require('../../../assets/heart.json')}
				{...rest}
			/>
		</Pressable>
	)
}

export default memo(Heart)
