import { useScrollToTop } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import React, { FC, useRef } from 'react'

import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { ICatalogTypes } from '../../../../types/catalogTypes'
import FullScreenLoader from '../../../../ui/Loader/FullScreenLoader'
import { HEADER_HEIGHT } from '../../catalogConstant'
import MusicItem from '../musicItem/musicItem'
import CatalogContentHeader from './catalogContentHeader'

export interface ICatalogContent {
	musicList: ICatalogTypes[]
	headerTitle: string
	y: Animated.Value
}

const CatalogContent:FC<ICatalogContent> = ({y, musicList, headerTitle}) => {
	if (!musicList) return <FullScreenLoader/>
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
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
	
	<CatalogContentHeader description={'by ' + musicList[0].artist + ' and other'} title={headerTitle} y={y}/>
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, height: HEADER_HEIGHT /0.8}}
				start={[0, 0.1]}
				end={[0, 0.8]}
				colors={['transparent', '#101010']}
			/>
			<View className='bg-[#101010] px-6 pt-1 pb-5'>
				{musicList.map((item) => {
					return <MusicItem key={item.id} artist={item.artist} title={item.title} image={item.image} likeFunc={() => console.log(1)} />
				})}
			</View>
		</Animated.ScrollView>
	)
}

export default CatalogContent
