import Title from '@/ui/title/title'
import { color } from '@/utils/color'
import Slider from '@react-native-community/slider'
import { memo } from 'react'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const Sliders = () => {
	const { position, duration } = useProgress();
	return (
		<View>
			<Slider
				style={{ width: '100%', height: 35 }}
				value={position}
				minimumValue={0}
				maximumValue={duration}
				thumbTintColor="white"
				minimumTrackTintColor={color.primary}
				maximumTrackTintColor="#FFFFFF"
				onSlidingComplete={TrackPlayer.seekTo}
			/>
			<View className='flex-row justify-between px-4 m-0'>
				<Title color={'silver'} className='text-center' size={20}>
					{
						String(position.toFixed(2))
					}
				</Title>
				<Title color={'silver'} className='text-center' size={20}>
					{
						String(duration.toFixed(2))
					}
				</Title>
			</View>
		</View>
	)
}

export default memo(Sliders)
