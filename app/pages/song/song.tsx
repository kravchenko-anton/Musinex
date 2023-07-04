import { useColorTheme } from '@/hook/useColorTheme'
import BottomMenu from '@/pages/song/components/bottom-menu/bottomMenu'
import CoverImage from '@/pages/song/components/cover-image/CoverImage'
import TopDropDown from '@/pages/song/components/top-dropDown/topDropDown'
import { TrackType } from '@/types/player/TrackType'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'

import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSharedValue } from 'react-native-reanimated'
import { useActiveTrack } from 'react-native-track-player'

const Song = () => {
	const trackInfo = useActiveTrack() as TrackType
	const isOpen = useSharedValue(false)
	const {silverToMidnight, charcoalToTwilight} = useColorTheme()
	if (!trackInfo || !trackInfo.title || !trackInfo.artist || !trackInfo.coverSmall || !trackInfo.id) return <FullScreenLoader/>
	return (
		<GestureHandlerRootView>
		<View style={{backgroundColor:silverToMidnight}} className='h-full justify-between'>
			<View>
			<TopDropDown isOpen={isOpen} title={trackInfo.title} />
			<CoverImage isOpen={isOpen} coverBig={trackInfo.coverBig}/>
			</View>
				<BottomMenu isOpen={isOpen} title={trackInfo.title} id={trackInfo.id} artist={trackInfo.artist}/>
		</View>
		</GestureHandlerRootView>
	)
}

export default Song
