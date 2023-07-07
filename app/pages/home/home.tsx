import { useAction } from '@/hook/useAction'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { useTypedSelector } from '@/hook/useTypedSelector'
import Banner from '@/pages/home/ui/banner/banner/banner'
import GenreItem from '@/pages/home/ui/genre-item/genreItem'
import { genreServices } from '@/services/genre.services'
import { searchServices } from '@/services/search.services'
import UFlatList from '@/ui/flatList/uFlatList'
import Header from '@/ui/header/header'
import ScrollLayout from '@/ui/layout/scrollLayout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import MusicCart from '@/ui/music-cart/musicCart'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
	const { data: chart } = useQuery(['chart'], searchServices.getCatalogue)
	const { data: genre } = useQuery(['genre'], genreServices.getAll)
	const { navigate } = useTypedNavigation()
	const { addToPlayer } = useAction()
	const selector = useTypedSelector(state => state.history)
	console.log(selector, '1')
	console.log('2')
	if (!chart || !genre) return <FullScreenLoader />
	return (
		<ScrollLayout className='px-0'>
			<Header
				className='px-2'
				secondIcon={{
					name: 'mail',
					onPress: () => console.log('mail')
				}}
				firstIcon={{
					name: 'search',
					onPress: () => navigate('Search')
				}}
			/>
			<Banner songs={chart.songs.slice(0, 3)} wrapperClassName={'px-2'} />
			<UFlatList
				data={genre}
				horizontal
				mt={20}
				headerText='Categories'
				renderItem={({ item: genre }) => <GenreItem item={genre} />}
			/>
			<UFlatList
				data={chart.songs}
				horizontal
				mt={25}
				headerText='Trending Songs'
				renderItem={({ item: song, index }) => (
					<MusicCart
						onPress={() =>
							addToPlayer({
								data: chart.songs.map(track => ({
									artist: track.artists[0].name,
									duration: track.duration,
									id: track.id,
									title: track.title,
									url: track.mp3Path,
									coverBig: track.coverBig,
									coverSmall: track.coverSmall
								})),
								songIndex: index
							})
						}
						image={{
							url: song.coverMedium,
							width: 130,
							height: 130,
							border: 16
						}}
						text1={song.title}
						text2={song.artists[0].name}
					/>
				)}
			/>
			<UFlatList
				data={chart.artists}
				horizontal
				mt={25}
				headerText='Rated Artists'
				renderItem={({ item: artist }) => (
					<MusicCart
						onPress={() => navigate('ArtistCatalog', { id: artist.id })}
						image={{
							url: artist.pictureMedium,
							width: 80,
							height: 80,
							border: 100
						}}
						text1={artist.name}
						textCenter
					/>
				)}
			/>

			<UFlatList
				data={chart.albums}
				horizontal
				mt={25}
				headerText='Wonderful Albums'
				renderItem={({ item: album }) => (
					<MusicCart
						onPress={() => navigate('AlbumCatalog', { id: album.id })}
						image={{
							url: album.coverMedium,
							width: 140,
							height: 140,
							border: 6
						}}
						text1={album.title}
					/>
				)}
			/>

			<UFlatList
				data={chart.playlists}
				horizontal
				mt={25}
				headerText='Best Playlist'
				renderItem={({ item: playlist }) => (
					<MusicCart
						onPress={() => navigate('PlaylistCatalog', { id: playlist.id })}
						image={{
							url: playlist.coverMedium,
							width: 150,
							height: 150
						}}
						text1={playlist.title}
					/>
				)}
			/>
		</ScrollLayout>
	)
}

export default Home
