import { FontAwesome5 } from '@expo/vector-icons'
import { ScrollView } from 'react-native'
import { useGetChartQuery } from '../../redux/api/music/musicApi'
import AlbumItem from '../../ui/FlatList/flatlistItem/AlbumItem'
import AuthorItem from '../../ui/FlatList/flatlistItem/authorItem'
import PlayListItem from '../../ui/FlatList/flatlistItem/PlayListItem'
import TrackItem from '../../ui/FlatList/flatlistItem/trackItem'
import UFlatList from '../../ui/FlatList/UFlatList'
import Header from '../../ui/header/header'
import Layout from '../../ui/Layout/Layout'
import FullScreenLoader from '../../ui/Loader/FullScreenLoader'
import Title from '../../ui/title/title'

const Home = () => {

		const {data: chart} = useGetChartQuery(null)
		if (!chart) return <FullScreenLoader/>
	return (
			<Layout>
			<ScrollView showsVerticalScrollIndicator={false}>
			<Header className={'mb-5'} logoSize={24}>
				<FontAwesome5 name='bell' size={26} color='black' />
			</Header>
			<Title
				size={40}
				numberOfLines={2}
				classNames={'mb-4'}
				fontFamily={'Silkscreen_700Bold'}
				text={'Select you music! '}
			/>
			<UFlatList headerText={'Top Song'}
				showsHorizontalScrollIndicator={false}
				horizontal
				header
				data={chart.tracks.data.slice(0, 10)}
				renderItem={({ item }) => {
					return (
						<TrackItem
							ImageClassNames={'rounded-lg'}
							WrapClassNames={'mr-3 '}
							name={item.title}
							artists={item.artist.name}
							image={{
								url: item.album.cover_medium,
								width: 220,
								height: 220
							}}
							songId={item.id}
						/>
					)
				}}
			/>
				<UFlatList headerText={'Top Author'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.artists.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <AuthorItem
							           ImageClassNames={'rounded-full'}
							           WrapClassNames={'mr-3'}
							           image={{
								           url: item.picture_medium,
								           width: 150,
								           height: 150
							           }}
							           name={item.name}
							           authorId={item.id}
						           />
					           )
				           }}
				/>
	
				
				<UFlatList headerText={'Top Album'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.albums.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <AlbumItem
							           WrapClassNames={'mr-3'}
							           image={{
								           url: item.cover_medium,
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
				
				<UFlatList headerText={'Top PlayList'} wrapClassNames={'mt-10 mb-5'}
				           showsHorizontalScrollIndicator={false}
				           horizontal
				           header
				           data={chart.playlists.data.slice(0, 10)}
				           renderItem={({ item }) => {
					           return (
						           <PlayListItem
							           WrapClassNames={'mr-3'}
							           image={{
								           url: item.picture_medium,
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

export default Home
