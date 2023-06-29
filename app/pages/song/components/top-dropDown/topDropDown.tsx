import { AnimatedPressable, AnimatedView } from '@/animation/global'
import { useRotateAnimation } from '@/animation/rotate.animation'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import { ITopDropDown } from '@/pages/song/components/top-dropDown/topDropDown.types'
import { useSongAnimation } from '@/pages/song/song-animation'
import CatalogItem from '@/ui/catalog-item/catalogItem'
import UIcon from '@/ui/icon/default-icon/icon'
import Title from '@/ui/title/title'
import { trackPause, trackPlay } from '@/utils/player/usePlayer'
import { generateRandomBeautifulHexColor } from '@/utils/random.color'
import { WindowHeight } from '@/utils/screen'
import { FC } from 'react'
import { View } from 'react-native'
import { GestureDetector, ScrollView } from 'react-native-gesture-handler'
import TrackPlayer from 'react-native-track-player'

const TopDropDown:FC<ITopDropDown> = ({isOpen, title}) => {
	const { goBack } = useTypedNavigation()
	const selector = useTypedSelector((state) => state.player)
	const {
		TopBarAnimation,
		PanGesture,
		useDropDownContentAnimation,
	} = useSongAnimation({ isOpen })
	const {RotateAnimation} = useRotateAnimation({isOpen, direction: 'down'})
	return <GestureDetector gesture={PanGesture}>
		<AnimatedPressable
			style={[{
				paddingTop: WindowHeight * 0.05,
				overflow: 'hidden',
			}, TopBarAnimation]} className='bg-twilight rounded-b-3xl p-3'>
			<View className='flex-row justify-between mb-5 items-center'>
				<UIcon
					onPress={() => goBack()}
					name='arrow-down'
					size={24}
					color='white'
				/>
				<View className='items-center w-2/3'>
					<Title translate={true} fontFamily={'Montserrat_700Bold'}>
						{"Now Playing"}
					</Title>
					<Title	translate={false} color={'silver'} size={16}>
						{title}
					</Title>
				</View>
				<UIcon name='ellipsis-vertical' size={24} color='white' />
			</View>
			<AnimatedView style={[{
				height: WindowHeight * 0.57,
				overflow: 'hidden',
				minHeight: WindowHeight * 0.57,
			},useDropDownContentAnimation]}>
				<ScrollView showsVerticalScrollIndicator={false}>
				{selector[0].data.map((track) => {
						return <CatalogItem key={track.id}
							text1={track.title}
							text2={track.artist}
							type={'song'}
							onPress={async () => {
								await trackPause()
								const color = generateRandomBeautifulHexColor()
								await TrackPlayer.load({
									title: track.title,
									artist: track.artist,
									coverBig: track.coverBig,
									coverSmall: track.coverSmall,
									id: track.id,
									url: track.url,
									color,
								})
								await trackPlay()
							}}
							id={track.id}
							image={{
								url: track.coverSmall,
								height: 50,
								width: 50,
								border: 5
							}}
						/>
					})
				}
				</ScrollView>
			</AnimatedView>
			<UIcon style={RotateAnimation} name={'ios-chevron-down'}  className=' absolute bottom-1 z-40  self-center rounded-full'/>
		</AnimatedPressable>
	</GestureDetector>
}

export default TopDropDown
