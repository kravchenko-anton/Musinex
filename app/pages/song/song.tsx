import BottomMenu from '@/pages/song/components/bottom-menu/bottomMenu'
import CoverImage from '@/pages/song/components/cover-image/CoverImage'
import TopDropDown from '@/pages/song/components/top-dropDown/topDropDown'
import { ITrack } from '@/types/player/ITrack'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { useActiveTrack } from 'react-native-track-player'

const Song = () => {
	const trackInfo = useActiveTrack() as ITrack
	const isOpen = useSharedValue(false)
	if (!trackInfo || !trackInfo.title || !trackInfo.artist || !trackInfo.coverSmall || !trackInfo.id) return <FullScreenLoader/>
	return (
		<GestureHandlerRootView>
		<View className='h-full bg-midnight justify-between'>
			<View>
			<TopDropDown isOpen={isOpen} title={trackInfo.title} />
			<CoverImage isOpen={isOpen} coverBig={trackInfo.coverBig}/>
			</View>
				<BottomMenu isOpen={isOpen} title={trackInfo.title} id={trackInfo.id}
				            artist={trackInfo.artist}/>
		</View>
		</GestureHandlerRootView>
	)
}

export default Song
