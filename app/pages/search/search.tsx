import GenreItem from '@/pages/search/ui/genreItem'
import SearchList from '@/pages/search/ui/searchList'
import { useSearch } from '@/pages/search/useSearch'
import { genreServices } from '@/services/genre.services'
import { Field, FlatList404, FullScreenLoader, Layout, UFlatList } from '@/ui'
import { WindowHeight, WindowWidth } from '@/utils/screen'
import { useQuery } from '@tanstack/react-query'

const Search = () => {
	const { searchTerm, searchResult, isLoading, control } = useSearch()
	const { data: genres } = useQuery(['genre'], genreServices.getAll)

	const loading =
		searchResult &&
		!searchResult.songs.length &&
		!searchResult.artists.length &&
		!searchResult.playlists.length &&
		!searchResult.albums.length
	if (!genres) return <FullScreenLoader />
	return (
		<Layout>
			<Field
				control={control}
				name={'searchTerm'}
				placeholder={'Type anything'}
			/>
			{searchTerm && searchTerm.length > 2 && !isLoading && loading ? (
				<FlatList404 width={WindowWidth} height={WindowHeight * 0.3} />
			) : searchTerm &&
			searchTerm.length > 2 &&
			isLoading ? null : !searchTerm || !searchResult || loading ? (
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
