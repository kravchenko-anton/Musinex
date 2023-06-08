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
	const {navigate} = useTypedNavigation()
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
				renderItem={({ item }) => {
					return <GenreItem item={item} />
				}}
			/>

			<UFlatList
				data={chart.songs}
				horizontal
				mt={25}
				headerText={'Trending Songs'}
				renderItem={({ item }) => {
					return (
						<MusicCart
							ImageClassNames={'rounded-2xl'}
							WrapClassNames={'mr-3'}
							image={{
								url: item.coverMedium,
								width: 130,
								height: 130
							}}
							name={item.title}
							artists={item.artists[0].name}
						/>
					)
				}}
			/>
			<UFlatList
				data={chart.artists}
				horizontal
				mt={25}
				headerText='Rated Artists'
				renderItem={({ item }) => {
					return (
						<MusicCart
							textCenter={true}
							ImageClassNames={'rounded-full'}
							WrapClassNames={'mr-3'}
							image={{
								url: item.pictureMedium,
								width: 80,
								height: 80
							}}
							name={item.name}
						/>
					)
				}}
			/>

			<UFlatList
				data={chart.albums}
				horizontal
				mt={25}
				headerText='Wonderful Albums'
				renderItem={({ item }) => {
					return (
						<MusicCart
							ImageClassNames={'rounded-md'}
							WrapClassNames={'mr-3'}
							image={{
								url: item.coverMedium,
								width: 140,
								height: 140
							}}
							name={item.title}
						/>
					)
				}}
			/>

			<UFlatList
				data={chart.playlists}
				horizontal
				mt={25}
				headerText='Best Playlist'
				renderItem={({ item }) => {
					return (
						<MusicCart
							WrapClassNames={'mr-3'}
							image={{
								url: item.coverMedium,
								width: 150,
								border: 10,
								height: 150
							}}
							name={item.title}
						/>
					)
				}}
			/>
		</ScrollLayout>
	)
}

export default Home
