import { useTypedRoute } from '@/hook/useTypedRoute'
import NavigateHeader from '@/ui/header/navigateHeader'
import Icon from '@/ui/icon/defaultIcon/Icon'
import UImage from '@/ui/image/fastimage'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Title from '@/ui/title/title'
import { cutString } from '@/utils/cutString'
import React from 'react'
import { View } from 'react-native'
import TrackPlayer, { State } from 'react-native-track-player'
import { skipToPrevious } from 'react-native-track-player/lib/trackPlayer'

const Song = () => {
	const { params } = useTypedRoute<'Song'>()
	const { songData, playBackState } = [] as any
	if (!params) return <FullScreenLoader />
	return (
		<Layout>
			<NavigateHeader logoSize={30} className='mb-4' />
			<Title text={cutString(songData.title, 5)} size={30} className={'mx-auto mb-4'} />
			<UImage
				source={songData.album.cover_big}
				className={'rounded-full mx-auto'}
				width={300}
				height={300}
			/>
			<View className='justify-between flex-row'>
				<Icon onPress={() => skipToPrevious()} name='caret-back' />
				<Icon
					onPress={() => {
						if (playBackState.state === State.Playing) {
							TrackPlayer.pause()
						} else {
							TrackPlayer.play()
						}
					}}
					name={playBackState.state === State.Playing ? 'pause' : 'play'}
				/>
				<Icon onPress={() => TrackPlayer.skipToNext()} name='caret-forward' />
			</View>
		</Layout>
	)
}

export default Song
