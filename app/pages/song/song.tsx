import { AnimatedImage } from '@/animation/global'
import BottomDropDown from '@/pages/song/components/bottomDropDown'
import TopDropDown from '@/pages/song/components/topDropDown'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { color } from '@/utils/getColor'
import { WindowHeight, WindowWidth } from '@/utils/screen'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { useActiveTrack } from 'react-native-track-player'

const Song = () => {
	const trackInfo = useActiveTrack()
	const isOpen = useSharedValue(false)
	const ImageAnimation = useAnimatedStyle(() => {
		return {
			height: withSpring(isOpen.value ? 0 : WindowWidth * 0.8, {
				damping: 20,
				velocity: 0.5,
				stiffness:90,
				mass: 0.5
			}),
			width: withSpring(isOpen.value ? 0 : WindowWidth * 0.8, {
				damping: 20,
				velocity: 0.5,
				stiffness:90,
				mass: 0.5
			}),
			opacity: withTiming(isOpen.value ? 0 : 1, {
				duration: 300
			}),
		}
	})
	if (!trackInfo || !trackInfo.title || !trackInfo.artist || !trackInfo.artwork) return <FullScreenLoader/>
	return (
		<GestureHandlerRootView>
		<View
			style={{
				justifyContent: 'space-between',
				backgroundColor: color.midnight,
				height: '100%'
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
