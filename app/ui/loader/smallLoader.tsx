import loader from '@/assets/loader.json'
import Lottie from 'lottie-react-native'
import { memo } from 'react'
import { View } from 'react-native'

const SmallLoader = () => (
	<View className='h-full w-full items-center justify-center'>
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

export default memo(SmallLoader)
