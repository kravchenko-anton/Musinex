import { useScrollToTop } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import React, { FC, useRef } from 'react'
import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { PlayerAction } from '../../../../redux/player/playerSlice'
import { ICatalogTypes } from '../../../../types/catalogTypes'
import FullScreenLoader from '../../../../ui/loader/fullScreenLoader'
import { HEADER_HEIGHT } from '../../catalogConstant'
import MusicItem from '../musicItem/musicItem'
import CatalogContentHeader from './catalogContentHeader'

export interface ICatalogContent {
	musicList: ICatalogTypes[]
	headerTitle: string
	y: Animated.Value
	description?: string
}

const CatalogContent: FC<ICatalogContent> = ({ y, description, musicList, headerTitle }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
	const dispatch = useDispatch()
	const { colorScheme } = useColorScheme()
	if (!musicList) return <FullScreenLoader />
	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			onScroll={Animated.event(
				[
					{
						nativeEvent: { contentOffset: { y } }
					}
				],
				{
					useNativeDriver: true
				}
			)}
			contentContainerStyle={{
				paddingTop: HEADER_HEIGHT / 1.3
			}}
		>
			
			<CatalogContentHeader description={description ? description : 'by ' + musicList[0].artist + ' and other'}
			                      title={headerTitle} y={y} />
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, height: HEADER_HEIGHT / 0.8 }}
				start={[0, 0.1]}
				end={[0, 0.8]}
				colors={['transparent', colorScheme === 'light' ? '#EEE' : '#101010']}
			/>
			<View style={{
				backgroundColor: colorScheme === 'light' ? '#EEE' : '#101010'
			}} className=' px-3 pt-1 pb-5'>
				{musicList.map((item, index) => {
					return <MusicItem key={item.id} artist={item.artist} title={item.title} image={item.image}
					                  playFunc={() => {
						                  dispatch(PlayerAction.addToPlayer({
							                  data: musicList.map((track, i) => {
								                  return {
									                  title: track.title,
									                  artwork: track.image,
									                  artist: track.artist,
									                  id: track.id
								                  }
							                  }),
							                  songIndex: index
						                  }))
					                  }}
					                  likeFunc={() => console.log(1)} />
				})}
			</View>
		</Animated.ScrollView>
	)
}

export default CatalogContent
