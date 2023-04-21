import Lottie from 'lottie-react-native'
import { View } from 'react-native'
import loader from '../../assets/loader.json'

const FullScreenLoader = () => {
	return (
		<View className={'h-screen w-full justify-center items-center'}>
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
