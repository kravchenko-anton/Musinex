import { AnimatedPressable, AnimatedView } from '@/animation/global'
import { useRotateAnimation } from '@/animation/rotate.animation'
import { useColorTheme } from '@/hook/useColorTheme'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import { TopDropDownProps } from '@/pages/song/components/top-dropDown/topDropDown.types'
import { useSongAnimation } from '@/pages/song/song-animation'
import CatalogItem from '@/ui/catalog-item/catalogItem'
import Icon from '@/ui/icon/default-icon/icon'
import UScrollView from '@/ui/scroll-view/uScrollView'
import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import { trackPause, trackPlay } from '@/utils/player/player.actions'
import { generateRandomBeautifulHexColor } from '@/utils/random.color'
import { WINDOW_HEIGHT } from '@/utils/screen'
import { FC } from 'react'
import { View } from 'react-native'
import { GestureDetector } from 'react-native-gesture-handler'
import TrackPlayer from 'react-native-track-player'

const TopDropDown: FC<TopDropDownProps> = ({ isOpen, title }) => {
	const { goBack } = useTypedNavigation()
	const { charcoalToTwilight, midnightToSilver } = useColorTheme()
	const selector = useTypedSelector(state => state.player)
	const { topBarAnimation, panGesture, dropDownContentAnimation } =
		useSongAnimation({ isOpen })
	const { rotateAnimation } = useRotateAnimation({ isOpen, direction: 'down' })
	return (
		<GestureDetector gesture={panGesture}>
			<AnimatedPressable
				style={[
					{
						paddingTop: WINDOW_HEIGHT * 0.05,
						overflow: 'hidden',
						backgroundColor: charcoalToTwilight
					},
					topBarAnimation
				]}
				className='rounded-b-3xl p-3'>
				<View className='mb-5 flex-row items-center justify-between'>
					<Icon
						onPress={() => goBack()}
						name='arrow-down'
						size={24}
						color={Color.white}
					/>
					<View className='w-2/3 items-center'>
						<Title translate={true} weight='bold'>
							{'Now Playing'}
						</Title>
						<Title translate={false} color={midnightToSilver} size={16}>
							{title}
						</Title>
					</View>
					<Icon name='ellipsis-vertical' size={24} color={Color.white} />
				</View>
				<AnimatedView
					style={[
						{
							height: WINDOW_HEIGHT * 0.57,
							overflow: 'hidden',
							minHeight: WINDOW_HEIGHT * 0.57
						},
						dropDownContentAnimation
					]}>
					<UScrollView>
						{selector[0].data.map(track => (
							<CatalogItem
								key={track.id}
								text1={track.title}
								text2={track.artist}
								type='song'
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
										color
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
						))}
					</UScrollView>
				</AnimatedView>
				<Icon
					style={rotateAnimation}
					name='ios-chevron-down'
					className=' absolute bottom-1 z-40  self-center rounded-full'
				/>
			</AnimatedPressable>
		</GestureDetector>
	)
}

export default TopDropDown
