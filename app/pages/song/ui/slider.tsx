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
				alignSelf: 'center',
			}}
		>
			<Slider
				value={position}
				minimumValue={0}
				maximumValue={duration}
				style={{ height: 15, marginTop: 10, width: '100%', margin: 0, padding: 0 }}
				maximumTrackTintColor={'white'}
				thumbTintColor={getHexCode('primary')}
				minimumTrackTintColor={getHexCode('primary')}
				step={1}
				onSlidingStart={() => {
					TrackPlayer.pause()
				}}
				onSlidingComplete={value => {
					TrackPlayer.seekTo(value)
				}}
			/>
			<View className='flex-row justify-between p-0 m-0 px-4'>
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
