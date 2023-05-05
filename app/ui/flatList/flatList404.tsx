import Lottie from 'lottie-react-native'
import { FC } from 'react'
import { View } from 'react-native'
import Title from '../title/title'

interface IFlatList404 {
	width: number
	height: number
}

const FlatList404: FC<IFlatList404> = (props) => {
	return <View style={{
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	}}>
		<Lottie source={require('../../assets/90988-no-results.json')} style={{
			width: props.width,
			height: props.height
		}} autoSize={true} autoPlay={true} loop={false} />
		<Title translate text={'No results'} />
	</View>
}

export default FlatList404