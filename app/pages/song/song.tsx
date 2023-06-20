import { AnimatedImage, AnimatedView } from '@/animation/global'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import RepeatIcon from '@/pages/song/ui/repeatIcon'
import Sliders from '@/pages/song/ui/slider'
import { useSongAnimation } from '@/pages/song/useSongAnimation'
import { handleShuffle } from '@/pages/song/utils/handleShaffle'
import CatalogItem from '@/ui/flatList/catalogItem/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import Heart from '@/ui/icon/heart/heart'
import Title from '@/ui/title/title'
import { getHexCode } from '@/utils/getColor'
import { ScreenHeight, WindowHeight, WindowWidth } from '@/utils/screen'
import { useState } from 'react'
import { Pressable, View } from 'react-native'
import TrackPlayer, { useActiveTrack, usePlaybackState } from 'react-native-track-player'

const Song = () => {
	const selector = useTypedSelector(state => state.player)
	const playBackState = usePlaybackState()
	const trackInfo = useActiveTrack()
	const [isOpen, setIsOpen] = useState(false)
	const {topBarAnimation,ImageAnimation,BottomMenuAnimation, useDropDownContentAnimation, opacityAnimation, MinusOpacityAnimation} = useSongAnimation(isOpen)
	const { goBack } = useTypedNavigation()
	if (!trackInfo) return
	return (
		<View
			style={{
				justifyContent: 'space-between',
				backgroundColor: getHexCode('primaryBlack'),
				height: ScreenHeight
			}}
		>
			<View>
				<AnimatedView
				style={[{
					paddingTop: WindowHeight * 0.05,
				}, topBarAnimation]} className='bg-lightBlack  rounded-b-3xl p-3'>
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
				
						<AnimatedView style={[ useDropDownContentAnimation]}>
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
							<Pressable onPress={() => setIsOpen(!isOpen)} className='bg-primaryGray h-1.5 mt-4 w-10  self-center rounded-full'/>
						</AnimatedView>
				</AnimatedView>
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
			
			<AnimatedView className='bg-lightBlack pt-4 rounded-t-3xl w-full' style={[{
				paddingBottom: WindowHeight * 0.05,
			}, BottomMenuAnimation]}>
				<Pressable onPress={() => setIsOpen(!isOpen)} className='w-full items-center justify-center self-center'>
						<View className='bg-primaryGray h-[4px] w-10 rounded-full'/>
				</Pressable>
				<View className='items-center px-4  self-center flex-row justify-between' style={{
					marginTop: 15,
					width: '100%',
					}}>
						<View style={{
							width: isOpen	? '55%' : '80%',
						}}>
						<Title size={isOpen ? 18 : 30} fontFamily={'Montserrat_600SemiBold'}>
							{String(trackInfo?.title)}
						</Title>
						<Title color={'primaryGray'} fontFamily={'Montserrat_500Medium'} size={isOpen ? 14 : 20}>
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
						{!isOpen && (
							<Heart
								size={35}
								id={trackInfo?.id}
								type={'song'}
							/>
						)}
				</View>
				<Sliders />
			
				<AnimatedView style={MinusOpacityAnimation}  className='flex-row self-center items-center justify-evenly w-full px-3'>
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
		</View>
	)
}

export default Song
