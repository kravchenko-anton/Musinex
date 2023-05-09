import I18n from 'i18n-js'
import React from 'react'
import { FlatList } from 'react-native'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import { useGetAllGenreQuery } from '../../redux/api/genre/genre'
import MusicCart from '../../ui/flatList/flatlistItem/musicCart'
import UFlatList from '../../ui/flatList/uFlatList'
import Field from '../../ui/Flield/field'
import Layout from '../../ui/layout/layout'
import FullScreenLoader from '../../ui/loader/fullScreenLoader'
import UScrollView from '../../ui/scrollView/uScrollView'
import GenreItem from './ui/genreItem'
import { useSearch } from './useSearch'

const Search = () => {
	const { searchTerm, tracks, playlists, albums, artists, isLoading, control } =
		useSearch()
	const { navigate } = useTypedNavigation()
	const { data: genre } = useGetAllGenreQuery(null)
	if (!genre || isLoading) return <FullScreenLoader />
	return (
		<Layout className='h-full'>
			<Field
				name='searchTerm'
				keyboardType='web-search'
				control={control}
				placeholder={I18n.t('Type anything')}
			/>
			{searchTerm && tracks && playlists && albums && artists ? (
				<UScrollView className='mt-4'>
					<UFlatList
						headerText={'Songs'}
						headerNavigate={() =>
							navigate('catalog', {
								data: tracks.data.map(item => {
									return {
										id: item.id,
										title: item.title,
										image: item.album.cover_medium,
										artist: item.artist.name,
										playTime: item.duration
									}
								}),
								type: 'songs',
								id: tracks.data[0].id,
								headerText: I18n.t('Songs'),
								headerImage: tracks.data[0].album.cover_big
							})
						}
						showsHorizontalScrollIndicator={false}
						horizontal
						header
						data={tracks.data.slice(0, 10)}
						renderItem={({ item }) => {
							return (
								<MusicCart
									ImageClassNames={'rounded-lg'}
									WrapClassNames={'mr-3 '}
									name={item.title_short}
									artists={item.artist.name}
									image={{
										url: item.album.cover_big,
										width: 220,
										height: 220
									}}
								/>
							)
						}}
					/>
					<UFlatList
						headerNavigate={() =>
							navigate('catalog', {
								data: artists.data.map(item => {
									return {
										id: item.id,
										title: item.name,
										image: item.picture_medium,
										artist: item.name
									}
								}),
								type: 'artists',
								id: artists.data[0].id,
								headerText: I18n.t('Artists'),
								headerImage: artists.data[0].picture_big
							})
						}
						headerText={'Artists'}
						wrapClassNames={'mt-10 mb-5'}
						showsHorizontalScrollIndicator={false}
						horizontal
						header
						data={artists.data.slice(0, 10)}
						renderItem={({ item }) => {
							return (
								<MusicCart
									onPress={() =>
										navigate('ArtistWrapperCatalog', { artistId: item.id })
									}
									ImageClassNames={'rounded-full'}
									WrapClassNames={'mr-3'}
									image={{
										url: item.picture_big,
										width: 150,
										height: 150
									}}
									name={item.name}
								/>
							)
						}}
					/>
					
					<UFlatList
						headerNavigate={() =>
							navigate('catalog', {
								data: albums.data.map(item => {
									return {
										id: item.id,
										title: item.title,
										image: item.cover_medium,
										artist: item.artist.name
									}
								}),
								type: 'albums',
								id: albums.data[0].id,
								headerText: I18n.t('Albums'),
								headerImage: albums.data[0].cover_big
							})
						}
						headerText={'Albums'}
						wrapClassNames={'mt-10 mb-5'}
						showsHorizontalScrollIndicator={false}
						horizontal
						header
						data={albums.data.slice(0, 10)}
						renderItem={({ item }) => {
							return (
								<MusicCart
									onPress={() =>
										navigate('AlbumWrapperCatalog', { albumId: item.id })
									}
									WrapClassNames={'mr-3'}
									image={{
										url: item.cover_big,
										width: 200,
										height: 200
									}}
									artists={item.artist.name}
									name={item.title}
								/>
							)
						}}
					/>
					
					<UFlatList
						headerNavigate={() =>
							navigate('catalog', {
								data: playlists.data.map(item => {
									return {
										id: item.id,
										title: item.title,
										image: item.picture_medium,
										artist: item.user.name
									}
								}),
								type: 'playlists',
								id: playlists.data[0].id,
								headerText: I18n.t('Playlists'),
								headerImage: playlists.data[0].picture_big
							})
						}
						headerText={'Playlists'}
						wrapClassNames={'mt-10 mb-5'}
						showsHorizontalScrollIndicator={false}
						horizontal
						header
						data={playlists.data.slice(0, 10)}
						renderItem={({ item }) => {
							return (
								<MusicCart
									onPress={() =>
										navigate('PlayListWrapperCatalog', { playListId: item.id })
									}
									WrapClassNames={'mr-3'}
									image={{
										url: item.picture_medium,
										width: 250,
										height: 250
									}}
									artists={item.user.name}
									name={item.title}
								/>
							)
						}}
					/>
				</UScrollView>
			) : (
				<FlatList
					showsVerticalScrollIndicator={false}
					numColumns={2}
					contentContainerStyle={{
						paddingBottom: 50
					}}
					columnWrapperStyle={{
						justifyContent: 'space-between',
						marginVertical: 10,
						gap: 5,
						width: '100%',
						zIndex: 100
					}}
					data={genre.data.slice(1, 20)}
					renderItem={({ item }) => {
						return (
							<GenreItem
								id={item.id}
								name={item.name}
								picture={item.picture_big}
							/>
						)
					}}
				/>
			)}
		</Layout>
	)
}

export default Search
