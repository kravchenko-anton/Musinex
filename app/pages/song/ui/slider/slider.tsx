import Title from '@/ui/title/title'
import { color } from '@/utils/color'
import Slider from '@react-native-community/slider'
import { memo, useState } from 'react'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const Sliders = () => {
	const { position, duration } = useProgress(0);
	const [isSeeking, setIsSeeking] = useState(false);
	const [sliderValue, setSliderValue] = useState(position);
	return (
		<View className='justify-center self-center w-full mt-[10px]'>
			<Slider
				minimumValue={0}
				maximumValue={duration}
				style={{ width: '100%', height: 18, margin: 0, padding: 0 }}
				maximumTrackTintColor={'white'}
				thumbTintColor={color.white}
				minimumTrackTintColor={color.white}
				step={1}
				value={
					isSeeking ? sliderValue : position
				}
				onSlidingComplete={async (value) => {
					setIsSeeking(false);
				await 	TrackPlayer.seekTo(value);
					setSliderValue(value)
				}}
				onValueChange={(value) => {
					if (isSeeking) setSliderValue(value)
				}}
				onTouchStart={() => setIsSeeking(true)}
			/>
			<View className='flex-row justify-between p-0 m-0 px-4'>
				<Title color={'silver'} className='text-center mt-1' size={20}>
					{
						String(position.toFixed(2))
					}
				</Title>
				<Title color={'silver'} className='text-center mt-1' size={20}>
					{
						String(duration.toFixed(2))
					}
				</Title>
			</View>
		</View>
	)
}

export default memo(Sliders)
