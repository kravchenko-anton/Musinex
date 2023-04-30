import { useScrollToTop } from '@react-navigation/native'
import { FlashList } from '@shopify/flash-list'
import { LinearGradient } from 'expo-linear-gradient'
import I18n from 'i18n-js'
import { useColorScheme } from 'nativewind'
import React, { FC, useRef } from 'react'
import { Animated, ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTypedNavigation } from '../../../../hook/useTypedNavigation'
import { PlayerAction } from '../../../../redux/player/playerSlice'
import { ICatalogList, ICatalogTypes } from '../../../../types/catalogTypes'
import CatalogAuthorItem from '../../../../ui/flatList/catalogItem/catalogAuthorItem'
import CatalogSongItem from '../../../../ui/flatList/catalogItem/catalogSongItem'
import MusicItem from '../../../../ui/flatList/flatlistItem/musicCart'
import FullScreenLoader from '../../../../ui/loader/fullScreenLoader'
import { cutString } from '../../../../utils/cutString'
import { HEADER_HEIGHT } from '../../catalogConstant'
import CatalogContentHeader from './catalogContentHeader'

interface ICatalogContent extends ICatalogTypes {
	DataList: ICatalogList[]
	type: 'songs' | 'albums' | 'playlists' | 'authors'
	headerTitle: string
	description?: string
}

const CatalogContent: FC<ICatalogContent> =
	({
		 y,
		 description,
		 type,
		 DataList,
		 headerTitle
	 }) => {
		const ref = useRef<ScrollView>(null)
		useScrollToTop(ref)
		const dispatch = useDispatch()
		const { navigate } = useTypedNavigation()
		const { colorScheme } = useColorScheme()
		if (!DataList) return <FullScreenLoader />
		return (
			<Animated.ScrollView
				ref={ref}
				showsVerticalScrollIndicator={false}
				scrollEventThrottle={16}
				onScroll={Animated.event([{
						nativeEvent: { contentOffset: { y } }
					}], { useNativeDriver: true }
				)}
				contentContainerStyle={{
					paddingTop: HEADER_HEIGHT / 1.3
				}}
			>
				<CatalogContentHeader
					description={
						description
							? description
							: I18n.t('by') +
							DataList[0].artist +
							(DataList.some(item => item.artist !== DataList[0].artist)
								? I18n.t('and other')
								: '')
					}
					title={headerTitle}
					y={y}
				/>
				<LinearGradient
					style={{
						...StyleSheet.absoluteFillObject,
						height: HEADER_HEIGHT / 0.8
					}}
					start={[0, 0.1]}
					end={[0, 0.8]}
					colors={['transparent', colorScheme === 'light' ? '#EEE' : '#101010']}
				/>
				<View
					style={{
						backgroundColor: colorScheme === 'light' ? '#EEE' : '#101010'
					}}
					className='pt-1 px-3 pb-5 w-full flex-1'
				>
					<FlashList
						// Its one list who work with scroll View and for big list it good choice for performance 👇
						// if I not add  estimatedListSize my list in start rendering get only 2 element and after scroll get all element, if I add it, my list load great but if you wait 1-3 second, list be bugged 😢
						extraData={DataList}
						drawDistance={0.1}
						decelerationRate={'fast'}
						estimatedItemSize={200}
						numColumns={(type === 'playlists' || type === 'albums') ? 2 : 1}
						data={DataList}
						renderItem={({ item, index }) => {
							if (type === 'songs') {
								return (
									<CatalogSongItem
										title={item.title}
										image={item.image}
										artist={item.artist}
										likeFunc={() => console.log(1)}
										playFunc={() => {
											dispatch(
												PlayerAction.addToPlayer({
													data: DataList.map(track => {
														return {
															id: track.id,
															title: track.title,
															url: track.url,
															artist: track.artist,
															artwork: track.image
														}
													}),
													songIndex: index
												})
											)
										}}
									/>
								)
							} else if (type === 'authors') {
								return (
									<CatalogAuthorItem
										onPress={() =>
											navigate('AuthorWrapperCatalog', {
												authorId: item.id
											})
										}
										name={item.title}
										image={item.image}
										likeFunc={() => console.log(1)}
									/>
								)
							} else {
								return (
									<MusicItem defaultImage textCenter={false}
									           className='w-[100%] p-2 mt-2 mb-2'
									           onPress={() =>
										           type === 'albums' ? navigate('AlbumWrapperCatalog', { albumId: item.id }) :
											           navigate('PlayListWrapperCatalog', { playListId: item.id })
									           }
									           image={{ url: item.image, height: 180, width: 180 }}
									           name={cutString(item.title, 10)}
									/>
								)
							}
						}}
					/>
				</View>
			</Animated.ScrollView>
		)
	}

export default CatalogContent
