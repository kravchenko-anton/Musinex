import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import { useGetAllGenreQuery } from '../../redux/api/genre/genre'
import AlbumItem from '../../ui/FlatList/flatlistItem/AlbumItem'
import AuthorItem from '../../ui/FlatList/flatlistItem/authorItem'
import PlayListItem from '../../ui/FlatList/flatlistItem/PlayListItem'
import TrackItem from '../../ui/FlatList/flatlistItem/trackItem'
import UFlatList from '../../ui/FlatList/UFlatList'
import Field from '../../ui/Flield/Field'
import Layout from '../../ui/Layout/Layout'
import FullScreenLoader from '../../ui/Loader/FullScreenLoader'
import GenreItem from './ui/genreItem'
import { useSearch } from './useSearch'

const Search = () => {
	const { searchTerm, tracks, playlists, albums, author, isLoading, control } = useSearch()
	const { navigate } = useTypedNavigation()
	const { data: genre } = useGetAllGenreQuery(null)
	if (!genre || isLoading) return <FullScreenLoader />
	console.log(tracks)
	return <Layout className='h-full'>
		<Field name='searchTerm'
		       keyboardType='web-search' control={control} placeholder={'Type anything... '} />
		{(searchTerm && tracks && playlists && albums && author) ?
			<ScrollView showsVerticalScrollIndicator={false} className='mt-4'>
				
				<UFlatList headerText={'Song'} headerNavigate={() => navigate('catalog', {
					data: tracks.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							image: item.album.cover_medium,
							artist: item.artist.name,
							playTime: item.duration
						}
					}),
					headerText: 'Song',
					headerImage: tracks.data[0].album.cover_big
				})}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={tracks.data.slice(0, 10)}
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
					data: author.data.map((item) => {
						return {
							id: item.id,
							title: item.name,
							image: item.picture_big,
							artist: item.name
						}
					}),
					headerText: 'Top Author',
					headerImage: author.data[0].picture_big
				})}
				           headerText={'Top Author'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={author.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <AuthorItem onPress={() => navigate('AuthorWrapperCatalog', { authorId: item.id })}
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
					data: albums.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							image: item.cover_medium,
							artist: item.artist.name
						}
					}),
					headerText: 'Top Album',
					headerImage: albums.data[0].cover_big
				})}
				           headerText={'Top Album'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={albums.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <AlbumItem onPress={() => navigate('AlbumWrapperCatalog', { albumId: item.id })}
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
					data: playlists.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							image: item.cover_big,
							artist: item.artist.name
						}
					}),
					headerText: 'Top PlayList',
					headerImage: playlists.data[0].cover_big
				})} headerText={'Top PlayList'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={playlists.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <PlayListItem onPress={() => navigate('PlayListWrapperCatalog', { playListId: item.id })}
						                         WrapClassNames={'mr-3'}
						                         image={{
							                         url: item.cover_big,
							                         width: 250,
							                         height: 250
						                         }}
						                         artists={item.artist.name}
						                         name={item.title}
						                         PlayListId={item.id}
						           />
					           )
				           }}
				/>
			
			</ScrollView>
			:
			<FlatList
				showsVerticalScrollIndicator={false} numColumns={2} columnWrapperStyle={{
				justifyContent: 'space-between',
				marginVertical: 10,
				gap: 5,
				width: '100%',
				zIndex: 100
			}} data={genre.data.slice(1, 20)} renderItem={({ item }) => {
				return <GenreItem id={item.id} name={item.name} picture_big={item.picture_big} />
			}} />}
	
	</Layout>
}

export default Search
