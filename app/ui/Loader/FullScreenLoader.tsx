import { ActivityIndicator, View } from 'react-native'

const FullScreenLoader = () => {
	return (
		<View className={'h-full w-full'}>
			<ActivityIndicator size='large' className={'h-full w-full'} color='#000' />
		</View>
	)
}

export default FullScreenLoader
