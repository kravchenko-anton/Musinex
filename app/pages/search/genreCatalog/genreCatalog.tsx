import React, { FC } from 'react'

import { ScrollView } from 'react-native'
import { useTypedNavigation } from '../../../hook/useTypedNavigation'
import { useTypedRoute } from '../../../hook/useTypedRoute'
import { useGetChartInGenreQuery } from '../../../redux/api/genre/genre'
import AlbumItem from '../../../ui/flatList/flatlistItem/albumItem'
import AuthorItem from '../../../ui/flatList/flatlistItem/authorItem'
import PlayListItem from '../../../ui/flatList/flatlistItem/playListItem'
import TrackItem from '../../../ui/flatList/flatlistItem/trackItem'
import UFlatList from '../../../ui/flatList/uFlatList'
import NavigateHeader from '../../../ui/header/navigateHeader'
import Layout from '../../../ui/layout/layout'
import FullScreenLoader from '../../../ui/loader/fullScreenLoader'
import Title from '../../../ui/title/title'

const GenreCatalog: FC = () => {
	const { params } = useTypedRoute<'genreCatalog'>()
	const { data: chart } = useGetChartInGenreQuery(params.genreId)
	const { navigate } = useTypedNavigation()
	if (!chart) return <FullScreenLoader />
	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<NavigateHeader className='mb-4' logoSize={30} />
				<Title
					size={40}
					numberOfLines={2}
					className={'mb-4'}
					fontFamily={'Montserrat_900Black_Italic'}
					text={params.genreName}
				/>
				<UFlatList headerNavigate={() => navigate('catalog', {
					data: chart.tracks.data.map((item) => {
							return {
								id: item.id,
								title: item.title,
								image: item.album.cover_medium,
								artist: item.artist.name
							}
						}
					),
					headerText: 'Top Song',
					headerImage: chart.tracks.data[0].album.cover_big
				})}
				           headerText={'Song'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.tracks.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <TrackItem
							           ImageClassNames={'rounded-lg'}
							           WrapClassNames={'mr-3 '}
							           name={item.title_short}
							           artists={item.artist.name}
							           image={{
								           url: item.album.cover_big,
								           width: 220,
								           height: 220
							           }}
							           songId={item.id}
						           />
					           )
				           }}
				/>
				<UFlatList headerNavigate={() => navigate('catalog', {
					data: chart.artists.data.map((item) => {
							return {
								id: item.id,
								title: item.name,
								image: item.picture_medium,
								artist: item.name
							}
						}
					),
					headerText: 'Top Author',
					headerImage: chart.artists.data[0].picture_big
				})}
				           headerText={'Author'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.artists.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <AuthorItem
							           onPress={() => navigate('AuthorWrapperCatalog', {
								           authorId: item.id
							           })}
							           ImageClassNames={'rounded-full'}
							           WrapClassNames={'mr-3'}
							           image={{
								           url: item.picture_big,
								           width: 150,
								           height: 150
							           }}
							           name={item.name}
							           authorId={item.id}
						           />
					           )
				           }}
				/>
				<UFlatList headerNavigate={() => navigate('catalog', {
					data: chart.albums.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							image: item.cover_medium,
							artist: item.artist.name
						}
					}),
					headerText: 'Top Album',
					headerImage: chart.albums.data[0].cover_big
				})}
				           headerText={'Album'}
				           wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.albums.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <AlbumItem
							           onPress={() => navigate('AlbumWrapperCatalog', {
								           albumId: item.id
							           })}
							           WrapClassNames={'mr-3'}
							           image={{
								           url: item.cover_big,
								           width: 200,
								           height: 200
							           }}
							           artists={item.artist.name}
							           name={item.title}
							           albumId={item.id}
						           />
					           )
				           }}
				/>
				
				
				<UFlatList headerNavigate={() => navigate('catalog', {
					data: chart.playlists.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							image: item.picture_medium,
							artist: item.user.name
						}
					}),
					headerText: 'Top PlayList',
					headerImage: chart.playlists.data[0].picture_big
				})} headerText={'PlayList'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.playlists.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <PlayListItem
							           onPress={() => navigate('PlayListWrapperCatalog', {
								           playListId: item.id
							           })}
							           WrapClassNames={'mr-3'}
							           image={{
								           url: item.picture_big,
								           width: 200,
								           height: 200
							           }}
							           artists={item.user.name}
							           name={item.title}
							           PlayListId={item.id}
						           />
					           )
				           }}
				/>
			
			</ScrollView>
		</Layout>
	)
}

export default GenreCatalog
