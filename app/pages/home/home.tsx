import React from 'react'
import { ScrollView } from 'react-native'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import { useGetChartQuery } from '../../redux/api/music/musicApi'
import AlbumItem from '../../ui/FlatList/flatlistItem/AlbumItem'
import AuthorItem from '../../ui/FlatList/flatlistItem/authorItem'
import PlayListItem from '../../ui/FlatList/flatlistItem/PlayListItem'
import TrackItem from '../../ui/FlatList/flatlistItem/trackItem'
import UFlatList from '../../ui/FlatList/UFlatList'
import Header from '../../ui/header/header'
import Icon from '../../ui/icon/defaultIcon/Icon'
import Layout from '../../ui/Layout/Layout'
import FullScreenLoader from '../../ui/Loader/FullScreenLoader'

const Home = () => {
	const { data: chart } = useGetChartQuery(null)
	const { navigate } = useTypedNavigation()
	if (!chart) return <FullScreenLoader />
	return (
		<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header className={'mb-5'} logoSize={30}>
					<Icon name={'mail'} size={24} borderRadius={100} padding={10} />
				</Header>
				<UFlatList headerText={'Top Song'} headerNavigate={() => navigate('catalog', {
					data: chart.tracks.data.map((item) => {
						return {
							id: item.id,
							title: item.title,
							image: item.album.cover_medium,
							artist: item.artist.name,
							playTime: item.duration
						}
					}),
					headerText: 'Top Song',
					headerImage: chart.tracks.data[0].album.cover_big
				})}
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
							image: item.picture_big,
							artist: item.name
						}
					}),
					headerText: 'Top Author',
					headerImage: chart.artists.data[0].picture_big
				})}
				           headerText={'Top Author'} wrapClassNames={'mt-10 mb-5'}
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
				           headerText={'Top Album'} wrapClassNames={'mt-10 mb-5'}
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
							image: item.picture_big,
							artist: item.user.name
						}
					}),
					headerText: 'Top PlayList',
					headerImage: chart.playlists.data[0].picture_big
				})} headerText={'Top PlayList'} wrapClassNames={'mt-10 mb-5'}
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
						                         PlayListId={item.id}
						           />
					           )
				           }}
				/>
			
			</ScrollView>
		</Layout>
	)
}

export default Home
