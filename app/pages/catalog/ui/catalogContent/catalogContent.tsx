import { useScrollToTop } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import { LinearGradient } from 'expo-linear-gradient'
import I18n from 'i18n-js'
import { useColorScheme } from 'nativewind'
import React, { FC, useRef } from 'react'
import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { ICatalogTypes } from '../../../../types/catalogTypes'
import MusicItem from '../../../../ui/flatList/flatlistItem/MusicItem'
import FullScreenLoader from '../../../../ui/loader/fullScreenLoader'
import { HEADER_HEIGHT } from '../../catalogConstant'
import AuthorItem from '../songItem/authorItem'
import SongItem from '../songItem/songItem'
import CatalogContentHeader from './catalogContentHeader'

export interface ICatalogContent {
	DataList: ICatalogTypes[]
	type: 'songs' | 'albums' | 'playlists' | 'authors'
	headerTitle: string
	y: Animated.Value
	description?: string
}

const CatalogContent: FC<ICatalogContent> = ({ y, description, type, DataList, headerTitle }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)
	console.log(type)
	const dispatch = useDispatch()
	const { colorScheme } = useColorScheme()
	if (!DataList) return <FullScreenLoader />
	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			renderToHardwareTextureAndroid={true}
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
			
			<CatalogContentHeader
				description={description ? description : I18n.t('by') + DataList[0].artist
					+ (
						DataList.some((item) => item.artist !== DataList[0].artist)
							? I18n.t('and other') : '')
				}
				title={headerTitle} y={y} />
			<LinearGradient
				style={{ ...StyleSheet.absoluteFillObject, height: HEADER_HEIGHT / 0.8 }}
				start={[0, 0.1]}
				end={[0, 0.8]}
				colors={['transparent', colorScheme === 'light' ? '#EEE' : '#101010']}
			/>
			<View style={{
				backgroundColor: colorScheme === 'light' ? '#EEE' : '#101010',
				flex: 1
			}} className='pt-1 px-3 pb-5 flex-1 h-full'>
				
				<FlashList numColumns={(type === 'playlists' || type === 'albums') ? 2 : 1} estimatedItemSize={200} style={{
					flex: 1
				}} data={DataList}
				           renderItem={({ item }) => {
					           return type === 'songs' ?
						           <SongItem title={item.title} image={item.image} artist={item.artist} likeFunc={() => console.log(1)}
						                     playFunc={() => console.log(1)} key={item.id} /> : type === 'authors' ?
							           <AuthorItem name={item.title} image={item.image} likeFunc={() => console.log(1)} key={item.id} />
							           
							           :
							           <MusicItem className='w-[100%] p-2 mt-2 mb-2' image={{
								           url: item.image,
								           height: 180,
								           width: '100%'
							           }} name={item.title} key={item.id} />
					           
				           }} />
			</View>
		</Animated.ScrollView>
	)
}

export default CatalogContent
