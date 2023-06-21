import { AnimatedImage, AnimatedPressable, AnimatedView } from '@/animation/global'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import RepeatIcon from '@/pages/song/ui/repeatIcon'
import Sliders from '@/pages/song/ui/slider'
import { handleShuffle } from '@/pages/song/utils/handleShaffle'
import CatalogItem from '@/ui/flatList/catalogItem/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Heart from '@/ui/icon/heart/heart'
import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { ScreenHeight, WindowHeight, WindowWidth } from '@/utils/screen'
import { Pressable, View } from 'react-native'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import TrackPlayer, { useActiveTrack, usePlaybackState } from 'react-native-track-player'

const Song = () => {
	const selector = useTypedSelector(state => state.player)
	const { goBack } = useTypedNavigation()
	const playBackState = usePlaybackState()
	const trackInfo = useActiveTrack()
	const isOpen = useSharedValue(false)
	const tap = Gesture.Pan().onEnd(() => {
		isOpen.value = !isOpen.value
	})
	const topBarAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen.value	? WindowHeight * 0.7 : 130, {
				duration: 600			}),
			easing: Easing.bezier(0.25, 0.1, 0.25, 1)
		}
	})
	const ImageAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen.value ? 0 : WindowWidth * 0.8, {
				duration: 300			}),
			width: withTiming(isOpen.value ? 0 : WindowWidth * 0.8, {
				duration: 300,
			}),
		}
	})
	const useDropDownContentAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen.value ?
				WindowHeight * 0.50
				: 0, {
				duration: 600}),
			opacity: withTiming(isOpen.value ? 0 : 0, {
				duration: 700
			}),
		}
	})
	const opacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isOpen.value ? 1 : 0, {
				duration: 700
			}),
			display: isOpen.value ? "flex" : "none",
		}
	})
	const MinusOpacityAnimation = useAnimatedStyle(() => {
		return {
			opacity: withTiming(isOpen.value ? 0 : 1, {
				duration: 700
			}),
			display: isOpen.value ? "none" : "flex",
		}
	})
	const BottomMenuAnimation = useAnimatedStyle(() => {
		return {
			height: withTiming(isOpen.value ? 220 : 280, {
				duration: 500,
				easing: Easing.bezier(0.25, 0.1, 0.25, 1)
			})
		}
	})
	const IconAnimation = useAnimatedStyle(() => {
		return {
			transform: [
				{
					rotate: withSpring(isOpen.value ? '180deg' : '0deg', {
						damping: 20,
						stiffness: 90
					})
				}
			]
		}
	})
	if (!trackInfo) return null
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
				<GestureDetector gesture={tap}>
				
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
					{String(trackInfo?.title)}
				</Title>
			</View>
					<UIcon name='ellipsis-vertical' size={24} color='white' />
						</View>
			
						<AnimatedView style={useDropDownContentAnimation}>
							<UFlatList  contentContainerStyle={{
								paddingBottom: 0,
							}} data={selector[0].data} renderItem={({item}) =>
								<CatalogItem
									text1={item.title}
									text2={item.artist}
									type={'song'}
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
							uri: String(trackInfo?.artwork),
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
			<GestureDetector gesture={tap}>
			
			<AnimatedView className='bg-lightBlack pt-4 rounded-t-3xl w-full' style={[{
				paddingBottom: WindowHeight * 0.05,
			}, BottomMenuAnimation]}>
				<Pressable  className='w-full items-center justify-center self-center'>
						<View className='bg-primaryGray h-[4px] w-10 rounded-full'/>
				</Pressable>
				<View className='items-center px-4  self-center flex-row justify-between' style={{
					marginTop: 15,
					width: '100%',
					}}>
						<View style={{
							width: isOpen.value	? '50%' : '80%',
						}}>
						<Title size={isOpen.value ? 18 : 30} fontFamily={'Montserrat_600SemiBold'}>
							{String(trackInfo?.title)}
						</Title>
						<Title color={'primaryGray'} fontFamily={'Montserrat_500Medium'} size={isOpen.value ? 14 : 20}>
							{String(trackInfo?.artist)}
						</Title>
						</View>
					<AnimatedView style={opacityAnimation} className='items-center justify-between flex-row p-0 m-0'>
						<UIcon
							name='play-skip-back'
							onPress={() => TrackPlayer.skipToPrevious()}
							size={22}
							color='white'
						/>
						<UIcon
							name={
								playBackState.state === 'playing'
									? 'md-pause-circle'
									: 'play-circle'
							}
							size={52}
							color='white'
							onPress={() => {
								if (playBackState.state === 'playing') {
									TrackPlayer.pause();
								} else {
									TrackPlayer.play();
								}
							}}
						/>
						<UIcon
							name='play-skip-forward'
							onPress={() => TrackPlayer.skipToNext()}
							size={22}
							color='white'
						/>
					</AnimatedView>
						{!isOpen.value && (
							<Heart
								size={35}
								id={trackInfo?.id}
								type={'song'}
							/>
						)}
				</View>
				<Sliders />
			
				<AnimatedView style={[{
					display: isOpen.value ? 'none' : 'flex',
				}, MinusOpacityAnimation]}  className='flex-row self-center items-center justify-evenly w-full px-3'>
						<UIcon
							name='shuffle'
							onPress={() => handleShuffle()}
							size={30}
							color='lightGray'
						/>
						<UIcon
							name='play-skip-back'
							onPress={() => TrackPlayer.skipToPrevious()}
							size={30}
							color='white'
						/>
						<UIcon
							name={
								playBackState.state === 'playing'
									? 'md-pause-circle'
									: 'play-circle'
							}
							size={65}
							color='white'
							onPress={() => {
								if (playBackState.state === 'playing') {
									TrackPlayer.pause()
								} else {
									TrackPlayer.play()
								}
							}}
						/>
						<UIcon
							name='play-skip-forward'
							onPress={() => TrackPlayer.skipToNext()}
							size={30}
							color='white'
						/>
						
						<RepeatIcon/>
					</AnimatedView>
			</AnimatedView>
			</GestureDetector>
		</View>
		</GestureHandlerRootView>
	)
}

export default Song
