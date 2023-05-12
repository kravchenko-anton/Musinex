import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import RepeatIcon from '@/pages/song/ui/repeatIcon'
import Sliders from '@/pages/song/ui/slider'
import Icon from '@/ui/icon/defaultIcon/Icon'
import Heart from '@/ui/icon/heart/heart'
import Title from '@/ui/title/title'
import { cutString } from '@/utils/cutString'
import { getHexCode } from '@/utils/getColor'
import { ScreenHeight, WindowHeight, WindowWidth } from '@/utils/screen'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import TrackPlayer, { useActiveTrack, usePlaybackState } from 'react-native-track-player'

const Song = () => {
	const selector = useTypedSelector(state => state.player)
	const playBackState = usePlaybackState()
	const trackInfo = useActiveTrack()
	const { goBack } = useTypedNavigation()
	
	async function handleShuffle() {
		let queue = await TrackPlayer.getQueue()
		await TrackPlayer.reset()
		queue.sort(() => Math.random() - 0.5)
		await TrackPlayer.add(queue)
		
	}
	
	
	return (
		<View style={{
			paddingTop: WindowHeight * 0.05,
			justifyContent: 'space-between',
			height: ScreenHeight * 0.96
		}}>
			<StatusBar backgroundColor={'#ffffff00'} style={'light'} />
			<View style={{
				...StyleSheet.absoluteFillObject,
				backgroundColor: getHexCode('dark'),
				width: WindowWidth,
				height: ScreenHeight,
				opacity: 0.5
			}}>
				<Image resizeMode={'cover'} source={{
					uri: trackInfo?.artwork as string,
					width: WindowWidth,
					height: ScreenHeight
				}} style={{
					width: WindowWidth,
					height: ScreenHeight
				}}
				       blurRadius={50}
				/>
			</View>
			<View>
				<View className='items-center flex-row justify-between mx-1'>
					<Icon onPress={() => goBack()} name='arrow-down' size={24} color='white' />
					<Icon name='ellipsis-vertical' size={24} color='white' />
				</View>
				
				<Image source={{
					uri: trackInfo?.artwork as string,
					width: WindowWidth * 0.85,
					height: WindowHeight * 0.4
				}} style={{
					width: WindowWidth * 0.85,
					height: WindowHeight * 0.4,
					marginTop: WindowHeight * 0.05,
					borderRadius: 10
				}}
				       resizeMode={'cover'}
				       className=' relative self-center items-center justify-center' />
			</View>
			<View style={{
				width: WindowWidth * 0.85,
				alignSelf: 'center'
			}}>
				<View className='flex-row justify-between items-center w-full'>
					<View className='mt-5'>
						<Title fontFamily={'Montserrat_600SemiBold'} numberOfLines={1}
						       text={cutString(trackInfo?.title ? trackInfo.title : 'title', 15)}
						       size={30} />
						<Title text={cutString(trackInfo?.artist ? trackInfo.artist : 'artist', 20)} color={getHexCode('lightGray')}
						       size={18} />
					</View>
					<Heart id={trackInfo?.id as string} type={'songs'} resizeMode={'contain'}
					       autoSize style={{
						marginRight: -20
					}}
					/>
				</View>
				<Sliders />
				<View className='flex-row justify-between items-center'>
					<Icon name='shuffle' onPress={() => handleShuffle()} size={24} color='white' />
					<View className='flex-row items-center'>
						<Icon name='play-skip-back' onPress={() => TrackPlayer.skipToPrevious()} size={24} color='white' />
						<Icon name={playBackState.state === 'playing' ? 'md-pause-circle' : 'play-circle'} size={60} color='white'
						      onPress={() => {
							      if (playBackState.state === 'playing') {
								      TrackPlayer.pause()
							      } else {
								      TrackPlayer.play()
							      }
						      }}
						/>
						<Icon name='play-skip-forward' onPress={() => TrackPlayer.skipToNext()} size={24} color='white' />
					</View>
					<RepeatIcon />
				</View>
			</View>
		</View>
	)
}

export default Song
