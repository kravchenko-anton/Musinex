import { useColorTheme } from '@/hook/useColorTheme'
import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import Slider from '@react-native-community/slider'
import { memo } from 'react'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const timeFormat = (time: number) => {
	const minutes = Math.floor(time / 60)
	const seconds = Math.floor(time - minutes * 60)
	return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}
const Sliders = () => {
	const { position, duration } = useProgress()
	const { midnightToSilver } = useColorTheme()
	return (
		<View>
			<Slider
				style={{ width: '100%', height: 35 }}
				value={position || 1}
				minimumValue={0}
				maximumValue={duration || 10}
				thumbTintColor='white'
				minimumTrackTintColor={Color.white}
				maximumTrackTintColor='#FFFFFF'
				onSlidingComplete={TrackPlayer.seekTo}
			/>
			<View className='m-0 flex-row justify-between px-4'>
				<Title color={midnightToSilver} className='text-center' size={20}>
					{timeFormat(position)}
				</Title>
				<Title color={midnightToSilver} className='text-center' size={20}>
					{timeFormat(duration)}
				</Title>
			</View>
		</View>
	)
}

export default memo(Sliders)
