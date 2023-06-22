import { AnimatedImage } from '@/animation/global'
import BottomDropDown from '@/pages/song/components/bottomDropDown'
import TopDropDown from '@/pages/song/components/topDropDown'
import { useSongAnimation } from '@/pages/song/useSongAnimation'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { getHexCode } from '@/utils/getColor'
import { ScreenHeight, WindowHeight, WindowWidth } from '@/utils/screen'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { useActiveTrack } from 'react-native-track-player'

const Song = () => {
	const isOpen = useSharedValue(false)
const {ImageAnimation} = useSongAnimation(isOpen)
	const trackInfo = useActiveTrack()
	if (!trackInfo || !trackInfo.title || !trackInfo.artist || !trackInfo.artwork) return <FullScreenLoader/>
	return (
		<GestureHandlerRootView>
		<View
			style={{
				justifyContent: 'space-between',
				backgroundColor: getHexCode('primaryBlack'),
				height: ScreenHeight
			}}
		>
			<View>
			<TopDropDown isOpen={isOpen} title={String(trackInfo.title)} />
				<View
					style={{
						alignSelf: 'center',
						position: 'relative',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: WindowHeight * 0.06,
					}}
				>
					<AnimatedImage
						source={{
							uri: String(trackInfo.artwork),
							height: WindowWidth * 0.8,
							width: WindowWidth * 0.8,
						}}
						style={[{
							borderRadius: 15,
						}, ImageAnimation]}
						resizeMode={'cover'}
						className=' relative items-center  justify-center'
					/>
				</View>
			</View>
				<BottomDropDown isOpen={isOpen} title={String(trackInfo.title)} id={trackInfo.id} artist={String(trackInfo.artist)}/>
		</View>
		</GestureHandlerRootView>
	)
}

export default Song
