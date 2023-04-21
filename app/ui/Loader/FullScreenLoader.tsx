import Lottie from 'lottie-react-native'
import { View } from 'react-native'
import loader from '../../assets/loader.json'

const FullScreenLoader = () => {
	return (
		<View className={'h-full w-full'}>
			<Lottie
				loop
				source={loader}
				autoPlay={true}
			/>
		</View>
	)
}

export default FullScreenLoader
