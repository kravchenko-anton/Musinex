import BottomMenu from '@/pages/song/components/bottom-menu/bottomMenu'
import CoverImage from '@/pages/song/components/cover-image/CoverImage'
import TopDropDown from '@/pages/song/components/top-dropDown/topDropDown'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { useActiveTrack } from 'react-native-track-player'

const Song = () => {
	const trackInfo = useActiveTrack()
	const isOpen = useSharedValue(false)
	if (!trackInfo || !trackInfo.title || !trackInfo.artist || !trackInfo.artwork) return <FullScreenLoader/>
	return (
		<GestureHandlerRootView>
		<View className='h-full bg-midnight justify-between'>
			<View>
			<TopDropDown isOpen={isOpen} title={String(trackInfo.title)} />
			<CoverImage isOpen={isOpen} artwork={trackInfo.artwork}/>
			</View>
				<BottomMenu isOpen={isOpen} title={String(trackInfo.title)} id={trackInfo.id} artist={String(trackInfo.artist)}/>
		</View>
		</GestureHandlerRootView>
	)
}

export default Song
