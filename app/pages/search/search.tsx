import GenreItem from '@/pages/search/ui/genreItem'
import SearchList from '@/pages/search/ui/searchList'
import { useSearch } from '@/pages/search/useSearch'
import { genreServices } from '@/services/genre.services'
import UFlatList from '@/ui/flatList/uFlatList'
import FlatList404 from '@/ui/flatList/ui/flatList-404/flatList404'
import Field from '@/ui/flield/field'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@/utils/screen'
import { useQuery } from '@tanstack/react-query'

const Search = () => {
	const { searchTerm, searchResult, isLoading, control } = useSearch()
	const { data: genres } = useQuery(['genre'], genreServices.getAll)

	const isSearchLoading =
		searchResult &&
		!searchResult.songs.length &&
		!searchResult.artists.length &&
		!searchResult.playlists.length &&
		!searchResult.albums.length
	if (!genres) return <FullScreenLoader />
	return (
		<Layout>
			<Field control={control} name='searchTerm' placeholder='Type anything' />
			{searchTerm && searchTerm.length > 2 && !isLoading && isSearchLoading ? (
				<FlatList404 width={WINDOW_WIDTH} height={WINDOW_HEIGHT * 0.3} />
			) : searchTerm &&
			  searchTerm.length > 2 &&
			  isLoading ? null : !searchTerm || !searchResult || isSearchLoading ? (
				<UFlatList
					data={genres}
					fixBottom
					numColumns={2}
					renderItem={({ item: genre }) => <GenreItem genre={genre} />}
				/>
			) : (
				<>
					<SearchList searchResult={searchResult} />
				</>
			)}
		</Layout>
	)
}

export default Search
