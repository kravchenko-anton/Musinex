import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import Slider from '@react-native-community/slider'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const Sliders = () => {
	const { duration, position } = useProgress(100)
	return (
		<View
			style={{
				width: '100%',
				justifyContent: 'center',
				alignSelf: 'center'
			}}
		>
			<Slider
				onValueChange={value => {
					TrackPlayer.seekTo(value)
				}}
				value={position}
				minimumValue={0}
				maximumValue={30}
				style={{ height: 10, marginTop: 20, width: '100%' }}
				maximumTrackTintColor={'white'}
				thumbTintColor={'white'}
				minimumTrackTintColor={getHexCode('primary')}
				step={1}
			/>
			<View className='flex-row justify-between p-0 m-0 mx-4'>
				<Title color={'lightGray'} className='text-center mt-1' size={20}>
					{position.toFixed(2)}
				</Title>
				<Title color={'lightGray'} className='text-center mt-1' size={20}>
					{duration.toFixed(2)}
				</Title>
			</View>
		</View>
	)
}

export default Sliders
