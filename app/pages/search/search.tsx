import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useSearch } from '@/pages/search/useSearch'
import { genreServices } from '@/services/genre.services'
import Button from '@/ui/button/button'
import CatalogArtistItem from '@/ui/flatList/catalogItem/catalogArtistItem'
import MusicCart from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import Field from '@/ui/Flield/field'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Title from '@/ui/title/title'
import { WindowWidth } from '@/utils/screen'
import { useQuery } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { SectionList, View } from 'react-native'

const Search = () => {
	const { searchTerm, searchResult, isLoading, control } =
		useSearch()
	const { navigate } = useTypedNavigation()
	console.log(isLoading)
	const { data: genre } = useQuery(['genre'], genreServices.getAll)
	if (!genre) return <FullScreenLoader />
	return (
		<Layout className='h-full'>
			<Field control={control} name={'searchTerm'} placeholder={'Select'}/>
			{
				(!searchTerm || !searchResult) ? <View>
					<UFlatList data={genre} renderItem={({item}) => {
						return <View className='w-full h-20'>
							<Title className='mb-3' size={24} fontFamily={'Montserrat_700Bold'}>{item.name}</Title>
						</View>
					}} />
				</View> : <View>
					
					<SectionList<any>
						initialNumToRender={4}
						sections={
							[
								{
									title: 'Songs',
									data: searchResult[0].slice(0, 10),
									renderItem: ({item}) => {
											return <MusicCart image={{
												url: item.coverMedium,
												width: WindowWidth /2 - 13,
													height: 200
											}} name={item.title}  />
									}
								},
								{
									title: 'Artists',
									data: searchResult[1].slice(0, 10),
									renderItem: ({item}) =>  {
											return <CatalogArtistItem  className='w-screen' id={item.id} name={item.name} image={item.pictureSmall} />
									}
								},
								{
									title: 'Albums',
									data: searchResult[2].slice(0, 10),
									renderItem: ({item}) => {
											return <MusicCart image={{
												url: item.coverMedium,
													width: WindowWidth /2 - 13,
													height: 200
											}} name={item.title}  />
 									}
								}, {
									title: 'Playlists',
									data: searchResult[3].slice(0, 10),
									renderItem: ({item}) => {
											return <MusicCart image={{
												url: item.coverMedium,
													width: WindowWidth	/2 - 13,
													height: 200
											}} name={item.title} />
									}
							}
							]
						}
						contentContainerStyle={{
							flexWrap: 'wrap',
							flexDirection: 'row',
							alignItems: 'center',
							alignSelf: 'center',
							gap: 20,
							columnGap: 10,
							justifyContent: 'space-between',
							paddingBottom  : 150,
						}}
						renderToHardwareTextureAndroid={true}
						maxToRenderPerBatch={4}
						removeClippedSubviews={true}
						showsHorizontalScrollIndicator={false}
						decelerationRate={'fast'}
						keyExtractor={(item, index) => item + index}
					showsVerticalScrollIndicator={false}
						renderItem={({ section: { renderItem, data } }) => {
								if (!data.length) return null
						 return	<View>{renderItem as ReactNode}</View>}
						}
						renderSectionHeader={({section: {title, data}}) => {
							if (!data.length) return null
							return <View className='justify-between flex-row items-center' style={{
								width: WindowWidth - 20,
							}}>
								<Title
									className={'text-2xl mt-5 mb-2'}
									fontFamily={'Montserrat_600SemiBold'}
								>
									{title}
								</Title>
								<Button size={'small'} text={'More'}/>
							</View>
						}}
					/>
				</View>
			}
		</Layout>
	)
}

export default Search
