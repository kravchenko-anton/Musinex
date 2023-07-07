import { genreServices } from '@/services/genre.services'
import { searchServices } from '@/services/search.services'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useSearchForm } from './useSearchForm'

export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm()
	const { data: searchResult, isLoading } = useQuery(
		['search', debouncedSearch],
		() => searchServices.getSearchResult(debouncedSearch),
		{
			enabled: !!debouncedSearch && debouncedSearch.length > 2
		}
	)
	const { data: genres } = useQuery(['genre'], genreServices.getAll)

	const isSearchLoading =
		searchResult &&
		!searchResult.songs.length &&
		!searchResult.artists.length &&
		!searchResult.playlists.length &&
		!searchResult.albums.length

	return useMemo(
		() => ({
			searchResult,
			isLoading,
			control,
			searchTerm,
			isSearchLoading,
			genres
		}),
		[searchResult, isLoading, control, searchTerm, isSearchLoading, genres]
	)
}
