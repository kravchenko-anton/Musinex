import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { WindowWidth } from '@/utils/screen'
import Slider from '@react-native-community/slider'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const Sliders = () => {
	const { duration, position } = useProgress(100)
	return (
		<View
			style={{
				width: WindowWidth * 0.85,
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
				style={{ height: 10, marginTop: 20 }}
				maximumTrackTintColor={getHexCode('lightGray')}
				thumbTintColor={getHexCode('lightGray')}
				minimumTrackTintColor={getHexCode('lightGray')}
				step={1}
			/>
			<View className='flex-row justify-between'>
				<Title
					color={getHexCode('lightGray')}
					className='text-center mt-1'
					size={20}
				>
					{position.toFixed(2)}
				</Title>
				<Title
					color={getHexCode('lightGray')}
					className='text-center mt-1'
					size={20}
				>
					{duration.toFixed(2)}
				</Title>
			</View>
		</View>
	)
}

export default Sliders
