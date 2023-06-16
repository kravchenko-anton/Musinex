import { useAction } from '@/hook/useAction'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import Banner from '@/pages/home/ui/banner'
import GenreItem from '@/pages/home/ui/genreItem'
import { genreServices } from '@/services/genreServices'
import { searchServices } from '@/services/searchServices'
import MusicCart from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import Header from '@/ui/header/header'
import ScrollLayout from '@/ui/layout/scrollLayout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
	const { data: chart } = useQuery(['chart'], searchServices.getCatalogue)
	const { data: genre } = useQuery(['genre'], genreServices.getAll)
	const { navigate } = useTypedNavigation()
	const { addToPlayer } = useAction()
	if (!chart || !genre) return <FullScreenLoader />
	return (
		<ScrollLayout>
			<Header
				secondIcon={{
					name: 'mail',
					onPress: () => console.log('mail')
				}}
				firstIcon={{
					name: 'search',
					onPress: () => navigate('Search')
				}}
			/>

			<Banner songs={chart.songs.slice(0, 3)} />

			<UFlatList
				data={genre}
				horizontal
				mt={20}
				headerText='Categories'
				renderItem={({ item: genre }) => {
					return <GenreItem item={genre} />
				}}
			/>
			<UFlatList
				data={chart.songs}
				horizontal
				mt={25} 
				headerText={'Trending Songs'}
				renderItem={({ item: song, index }) => {
					return (
						<MusicCart
							onPress={() =>
								addToPlayer({
									data: chart.songs.map(track => {
										return {
											artist: track.artists[0].name,
											duration: track.duration,
											id: track.id,
											title: track.title,
											url: track.mp3Path,
											artwork: track.coverMedium
										}
									}),
									songIndex: index
								})
							}
							image={{
								url: song.coverMedium,
								width: 130,
								height: 130,
								border: 16
							}}
							name={song.title}
							artists={song.artists[0].name}
						/>
					)
				}}
			/>
			<UFlatList
				data={chart.artists}
				horizontal
				mt={25}
				headerText='Rated Artists'
				renderItem={({ item: artist }) => {
					return (
						<MusicCart
							onPress={() => navigate('ArtistCatalog', { id: artist.id })}
							textCenter={true}
							image={{
								url: artist.pictureMedium,
								width: 80,
								height: 80,
								border: 100
							}}
							name={artist.name}
						/>
					)
				}}
			/>

			<UFlatList
				data={chart.albums}
				horizontal
				mt={25}
				headerText='Wonderful Albums'
				renderItem={({ item: album }) => {
					return (
						<MusicCart
							onPress={() => navigate('AlbumCatalog', { id: album.id })}
							image={{
								url: album.coverMedium,
								width: 140,
								height: 140,
								border: 6
							}}
							name={album.title}
						/>
					)
				}}
			/>

			<UFlatList
				data={chart.playlists}
				horizontal
				mt={25}
				headerText='Best Playlist'
				renderItem={({ item: playlist }) => {
					return (
						<MusicCart
							onPress={() => navigate('PlaylistCatalog', { id: playlist.id })}
							image={{
								url: playlist.coverMedium,
								width: 150,
								height: 150
							}}
							name={playlist.title}
						/>
					)
				}}
			/>
		</ScrollLayout>
	)
}

export default Home
