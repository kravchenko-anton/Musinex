import { useTypedSelector } from '@/hook/useTypedSelector'
import { Color } from '@/utils/color'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/utils/screen'
import Lottie from 'lottie-react-native'
import { memo } from 'react'
import { View } from 'react-native'
import loader from '../../assets/loader.json'

const FullScreenLoader = () => {
	const selector = useTypedSelector(state => state.theme)
	return (
		<View
			style={{
				height: SCREEN_HEIGHT,
				width: SCREEN_WIDTH,
				backgroundColor: selector === 'light' ? Color.silver : Color.midnight
			}}
			className='absolute items-center justify-center'>
			<Lottie
				loop
				source={loader}
				autoPlay={true}
				style={{
					width: 200,
					height: 200
				}}
			/>
		</View>
	)
}

export default memo(FullScreenLoader)
