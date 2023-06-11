import { useTypedSelector } from '@/hook/useTypedSelector'
import { getHexCode } from '@/utils/getColor'
import { ScreenHeight, ScreenWidth } from '@/utils/screen'
import Lottie from 'lottie-react-native'
import { View } from 'react-native'
import loader from '../../assets/loader.json'

const FullScreenLoader = () => {
	// Need for app component
	const selector = useTypedSelector(state => state.theme)
	return (
		<View
			style={{
				position: 'absolute',
				height: ScreenHeight,
				width: ScreenWidth,
				backgroundColor:
					selector === 'light'
						? getHexCode('lightGray')
						: getHexCode('primaryBlack')
			}}
			className={'justify-center items-center'}
		>
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

export default FullScreenLoader
