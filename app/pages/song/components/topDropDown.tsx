import { AnimatedPressable, AnimatedView } from '@/animation/global'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import { useSongAnimation } from '@/pages/song/useSongAnimation'
import { songAnimationValue } from '@/pages/song/utils/songAnimationTypes'
import CatalogItem from '@/ui/flatList/catalogItem/catalogItem'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import { trackPause, trackPlay } from '@/ui/song-player/songFade'
import Title from '@/ui/title/title'
import { generateRandomBeautifulHexColor } from '@/utils/getRandomColor'
import { WindowHeight } from '@/utils/screen'
import { FC } from 'react'
import { View } from 'react-native'
import { FlatList, GestureDetector } from 'react-native-gesture-handler'
import TrackPlayer from 'react-native-track-player'

interface ITopDropDown extends  songAnimationValue{
	title: string
	}
const TopDropDown:FC<ITopDropDown> = ({isOpen, title}) => {
	const selector = useTypedSelector(state => state.player)
	const { goBack } = useTypedNavigation()
	const {
		panGesture,
		topBarAnimation,
		useDropDownContentAnimation,
		IconAnimation,
	} = useSongAnimation(isOpen)
	return 	<GestureDetector gesture={panGesture}>
		
		<AnimatedPressable
			style={[{
				paddingTop: WindowHeight * 0.05,
			}, topBarAnimation]} className='bg-lightBlack   rounded-b-3xl p-3'>
			<View className='flex-row justify-between mb-5 items-center'>
				<UIcon
					onPress={() => goBack()}
					name='arrow-down'
					size={24}
					color='white'
				/>
				<View className='items-center w-2/3'>
					<Title translate fontFamily={'Montserrat_700Bold'}>
						Now	Playing
					</Title>
					<Title	translate color={'lightGray'} size={16}>
						{title}
					</Title>
				</View>
				<UIcon name='ellipsis-vertical' size={24} color='white' />
			</View>
			
			<AnimatedView style={[{
				height: WindowHeight * 0.65,
			},useDropDownContentAnimation]}>
				<FlatList data={selector[0].data} showsVerticalScrollIndicator={false} className='max-h-[90%]' renderItem={({item}) =>
					<CatalogItem
						text1={item.title}
						text2={item.artist}
						type={'song'}
						onPress={async () => {
					await trackPause()
							const color	= generateRandomBeautifulHexColor()
						await 	TrackPlayer.load({
								title: item.title,
								artist: item.artist,
								artwork: item.artwork,
								id: item.id,
								url: item.url,
								color,
							})
							await trackPlay()
						}}
						id={item.id}
						image={{
							uri: String(item.artwork),
							height: 50,
							width: 50,
							border: 5
						}}
					/>
				}/>
			
			</AnimatedView>
			<UIcon style={IconAnimation} name={'ios-chevron-down'}  className=' absolute bottom-1 z-40  self-center rounded-full'/>
		</AnimatedPressable>
	</GestureDetector>
}

export default TopDropDown