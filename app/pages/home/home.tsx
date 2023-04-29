import I18n from 'i18n-js'
import React from 'react'
import { ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import { useGetChartQuery } from '../../redux/api/music/musicApi'
import { PlayerAction } from '../../redux/player/playerSlice'
import AuthorItem from '../../ui/flatList/flatlistItem/authorItem'
import AlbumItem from '../../ui/flatList/flatlistItem/MusicItem'
import PlayListItem from '../../ui/flatList/flatlistItem/playListItem'
import TrackItem from '../../ui/flatList/flatlistItem/trackItem'
import UFlatList from '../../ui/flatList/uFlatList'
import Header from '../../ui/header/header'
import Icon from '../../ui/icon/defaultIcon/Icon'
import Layout from '../../ui/layout/layout'
import FullScreenLoader from '../../ui/loader/fullScreenLoader'

const Home = () => {
	const { data: chart } = useGetChartQuery(null)
	const { navigate } = useTypedNavigation()
	const dispatch = useDispatch()
	if (!chart) return <FullScreenLoader />
	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header className={'mb-5'} logoSize={30}>
					<Icon name={'mail'} size={24} borderRadius={100} padding={10} />
				</Header>
				<UFlatList headerText={'Top Songs'} headerNavigate={() => navigate('catalog', {
					data: chart.tracks.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							url: item.preview,
							image: item.album.cover_medium,
							artist: item.artist.name,
							playTime: item.duration
						}
					}),
					headerText: I18n.t('Top Songs'),
					type: 'songs',
					headerImage: chart.tracks.data[0].album.cover_big
				})}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.tracks.data.slice(0, 10)}
				           renderItem={({ item, index }) => {
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
							           onPress={() => {
								           dispatch(PlayerAction.addToPlayer({
									           data: chart.tracks.data.map((track) => {
										           return {
											           id: track.id,
											           title: track.title,
											           url: track.preview,
											           artist: track.artist.name,
											           artwork: track.album.cover_big
										           }
									           }),
									           songIndex: index
								           }))
							           }}
						           />
					           )
				           }}
				/>
				<UFlatList headerNavigate={() => navigate('catalog', {
					data: chart.artists.data.slice(0, 10).map((item) => {
						return {
							id: item.id,
							title: item.name,
							image: item.picture_big,
							artist: item.name
						}
					}),
					headerText: I18n.t('Top Authors'),
					type: 'authors',
					headerImage: chart.artists.data[0].picture_big
				})}
				           headerText={'Top Authors'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.artists.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <AuthorItem onPress={() => navigate('AuthorWrapperCatalog', { authorId: item.id })}
						                       ImageClassNames={'rounded-full'}
						                       WrapClassNames={'mr-3'}
						                       image={{
							                       url: item.picture_big,
							                       width: 100,
							                       height: 100
						                       }}
						                       name={item.name}
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
					headerText: I18n.t('Top Albums'),
					type: 'albums',
					headerImage: chart.albums.data[0].cover_big
				})}
				           headerText={'Top Albums'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.albums.data.slice(0, 10)}
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
						           />
					           )
				           }}
				/>
				
				
				<UFlatList headerNavigate={() => navigate('catalog', {
					data: chart.playlists.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							image: item.picture_big,
							artist: item.user.name
						}
					}),
					headerText: I18n.t('Top Playlists'),
					type: 'playlists',
					headerImage: chart.playlists.data[0].picture_big
				})} headerText={'Top Playlists'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.playlists.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <PlayListItem onPress={() => navigate('PlayListWrapperCatalog', { playListId: item.id })}
						                         WrapClassNames={'mr-3'}
						                         image={{
							                         url: item.picture_big,
							                         width: 250,
							                         height: 250
						                         }}
						                         artists={item.user.name}
						                         name={item.title}
						           />
					           )
				           }}
				/>
			
			</ScrollView>
		</Layout>
	)
}

export default Home
