import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useSearch } from '@/pages/search/useSearch'
import { genreServices } from '@/services/genre.services'
import Button from '@/ui/button/button'
import CatalogArtistItem from '@/ui/flatList/catalogItem/catalogArtistItem'
import FlatList404 from '@/ui/flatList/flatList404'
import MusicCart from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import Field from '@/ui/Flield/field'
import UImage from '@/ui/image/image'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Title from '@/ui/title/title'
import { WindowHeight, WindowWidth } from '@/utils/screen'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { SectionList, View } from 'react-native'

const Search = () => {
	const { searchTerm, searchResult, isLoading, control } =
		useSearch()
	const { navigate } = useTypedNavigation()
	const { data: genre } = useQuery(['genre'], genreServices.getAll)
	if (!genre) return <FullScreenLoader />
	return (
		<Layout className='h-full'>
			<Field control={control} name={'searchTerm'} placeholder={'Type anything'}/>
			{searchTerm && !isLoading && searchResult && !searchResult[0].length && !searchResult[1].length && !searchResult[2].length && !searchResult[3].length ? (
				<FlatList404 width={WindowWidth} height={WindowHeight * 0.3} />
			) : searchTerm && isLoading ? null : (
				!searchTerm || !searchResult || !searchResult[0].length && !searchResult[1].length && !searchResult[2].length && !searchResult[3].length ? (
					<View className="justify-between w-full max-w-full items-center flex-row">
						<UFlatList
							contentContainerStyle={{
								paddingBottom: 130,
							}}
							data={genre}
							numColumns={2}
							renderItem={({ item }) => (
								<View className="w-[49%] h-[100px] m-1 rounded-xl p-3 relative overflow-hidden" style={{ backgroundColor: item.color }}>
									<Title className="mb-3" size={18} fontFamily="Montserrat_700Bold">
										{item.name}
									</Title>
									<UImage
										source={item.songs[0].coverMedium}
										width={70}
										height={70}
										className="absolute right-[-10] bottom-[-10] rounded-full"
									/>
								</View>
							)}
						/>
					</View>
				) : (
					<SectionList<any> // It requires because of the type of the data in the array cannot be different
						initialNumToRender={4}
						sections={[
							{
								title: 'Songs',
								data: searchResult[0].slice(0, 10),
								renderItem: ({ item }) => (
									<MusicCart
										image={{
											url: item.coverMedium,
											width: WindowWidth / 2 - 13,
											height: 200,
										}}
										name={item.title}
									/>
								),
							},
							{
								title: 'Artists',
								data: searchResult[1].slice(0, 10),
								renderItem: ({ item }) => (
									<CatalogArtistItem
										className="w-screen"
										id={item.id}
										name={item.name}
										image={item.pictureSmall}
									/>
								),
							},
							{
								title: 'Albums',
								data: searchResult[2].slice(0, 10),
								renderItem: ({ item }) => (
									<MusicCart
										image={{
											url: item.coverMedium,
											width: WindowWidth / 2 - 13,
											height: 200,
										}}
										name={item.title}
									/>
								),
							},
							{
								title: 'Playlists',
								data: searchResult[3].slice(0, 10),
								renderItem: ({ item }) => (
									<MusicCart
										image={{
											url: item.coverMedium,
											width: WindowWidth / 2 - 13,
											height: 200,
										}}
										name={item.title}
									/>
								),
							},
						]}
						contentContainerStyle={{
							flexWrap: 'wrap',
							flexDirection: 'row',
							alignItems: 'center',
							alignSelf: 'center',
							columnGap: 10,
							justifyContent: 'space-between',
							paddingBottom: 150,
						}}
						renderToHardwareTextureAndroid={true}
						maxToRenderPerBatch={4}
						removeClippedSubviews={true}
						showsHorizontalScrollIndicator={false}
						decelerationRate="fast"
						keyExtractor={(item, index) => item + index}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (item.data.length ? <View>{item.renderItem(item)}</View> : null)}
						renderSectionHeader={({ section: { title, data } }) =>
							data.length ? (
								<View className="justify-between flex-row items-center my-4" style={{ width: WindowWidth - 20 }}>
									<Title className="text-2xl" fontFamily="Montserrat_700Bold">
										{title}
									</Title>
									<Button size="small" translate text="More" />
								</View>
							) : null
						}
					/>
				)
			)}
			
		</Layout>
	)
}

export default Search
