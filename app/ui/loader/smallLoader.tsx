import loader from '@/assets/loader.json'
import Lottie from 'lottie-react-native'
import { View } from 'react-native'

const SmallLoader = () => {
	return (
		<View
			className={'justify-center items-center h-full w-full'}
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
