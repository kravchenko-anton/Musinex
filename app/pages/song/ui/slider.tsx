import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { WindowWidth } from '@/utils/screen'
import { Slider } from '@rneui/themed'
import { View } from 'react-native'
import TrackPlayer, { useProgress } from 'react-native-track-player'

const Sliders = () => {
	const { duration, position } = useProgress(100)
	return <View style={{
		width: WindowWidth * 0.85,
		justifyContent: 'center',
		alignSelf: 'center'
	}}>
		<Slider
			onValueChange={(value) => {
				TrackPlayer.seekTo(value)
			}}
			value={position}
			minimumValue={0}
			maximumValue={30}
			allowTouchTrack={true}
			thumbStyle={{
				backgroundColor: getHexCode('lightGray'),
				width: 10,
				height: 10
			}}
			trackStyle={{ backgroundColor: getHexCode('dark') }}
			style={{ height: 10, marginTop: 20 }}
			maximumTrackTintColor={'#ffffff10'}
			minimumTrackTintColor={getHexCode('lightGray')}
			
			step={1}
		/>
		<View className='flex-row justify-between'>
			<Title text={position.toFixed(2)} color={getHexCode('lightGray')} className='text-center mt-1'
			       size={20} />
			<Title text={duration.toFixed(2)} color={getHexCode('lightGray')} className='text-center mt-1' size={20} />
		</View>
	</View>
}

export default Sliders