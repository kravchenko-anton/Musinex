import loader from '@/assets/loader.json'
import { ScreenWidth } from '@/utils/screen'
import Lottie from 'lottie-react-native'
import { View } from 'react-native'

const SmallLoader = () => {
	return (
		<View
			style={{
				width: ScreenWidth
			}}
			className={'justify-center items-center'}
		>
			<Lottie
				loop
				source={loader}
				autoPlay={true}
				style={{
					width: 100,
					height: 100
				}}
			/>
		</View>
	)
}

export default SmallLoader
