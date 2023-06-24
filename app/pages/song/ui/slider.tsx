import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const Sliders = () => {
	const { duration, position } = useProgress(500)
	const [isSeeking, setIsSeeking] = useState(false);
	const [seek, setSeek] = useState(0);
	console.log(isSeeking)
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
				onValueChange={(value) => {
					TrackPlayer.pause()
					setSeek(value);
				}}
				onSlidingStart={() => {
					setIsSeeking(true)
				}}
				onSlidingComplete={(value) => {
					setIsSeeking(false);
					TrackPlayer.seekTo(value)
				}}
			/>
			<View className='flex-row justify-between p-0 m-0 px-4'>
				<Title color={'lightGray'} className='text-center mt-1' size={20}>
					{
						isSeeking ? seek.toFixed(2) : position.toFixed(2)
					}
				</Title>
				<Title color={'lightGray'} className='text-center mt-1' size={20}>
					{duration.toFixed(2)}
				</Title>
			</View>
		</View>
	)
}

export default Sliders
