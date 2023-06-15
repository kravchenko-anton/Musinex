import GenreList from '@/pages/search/ui/genreList'
import SearchList from '@/pages/search/ui/searchList'
import { useSearch } from '@/pages/search/useSearch'
import { genreServices } from '@/services/genreServices'
import FlatList404 from '@/ui/flatList/flatList404'
import Field from '@/ui/Flield/field'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { WindowHeight, WindowWidth } from '@/utils/screen'
import { useQuery } from '@tanstack/react-query'
import { View } from 'react-native'

const Search = () => {
	const { searchTerm, searchResult, isLoading, control } = useSearch()
	const { data: genre } = useQuery(['genre'], genreServices.getAll)

	const loading =
		searchResult &&
		!searchResult.songs.length &&
		!searchResult.artists.length &&
		!searchResult.playlists.length &&
		!searchResult.albums.length
	if (!genre) return <FullScreenLoader />
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
				<GenreList genre={genre} />
			) : (
				<View>
					<SearchList searchResult={searchResult} />
				</View>
			)}
		</Layout>
	)
}

export default Search
