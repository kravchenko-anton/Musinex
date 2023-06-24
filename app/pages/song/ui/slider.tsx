import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import Slider from '@react-native-community/slider'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const Sliders = () => {
	const { duration, position } = useProgress(10)
	return (
		<View
			style={{
				width: '100%',
				justifyContent: 'center',
				alignSelf: 'center',
			}}
		>
			<Slider
				minimumValue={0}
				maximumValue={duration}
				style={{ height: 15, marginTop: 10, width: '100%', margin: 0, padding: 0 }}
				maximumTrackTintColor={'white'}
				thumbTintColor={getHexCode('white')}
				minimumTrackTintColor={getHexCode('primary')}
				step={1}
				value={position}
				onSlidingComplete={async (value) => TrackPlayer.seekTo(value)
				}
			/>
			<View className='flex-row justify-between p-0 m-0 px-4'>
				<Title color={'lightGray'} className='text-center mt-1' size={20}>
					{new Date(position * 1000)
						.toLocaleTimeString()
						.substring(3).slice(0,5)}
				</Title>
				<Title color={'lightGray'} className='text-center mt-1' size={20}>
					{new Date((duration) * 1000)
						.toLocaleTimeString()
						.substring(3).slice(0,5)}
				</Title>
			</View>
		</View>
	)
}

export default Sliders
