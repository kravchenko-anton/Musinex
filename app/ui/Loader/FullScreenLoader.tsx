import { ActivityIndicator, View } from 'react-native'

const FullScreenLoader = () => {
	return (
		<View className={'h-full w-full'}>
			<ActivityIndicator size='large' className={'h-full w-full'} color='#fff' />
		</View>
	)
}

export default FullScreenLoader
