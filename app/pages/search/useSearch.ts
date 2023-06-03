import { searchServices } from '@/services/search.services'
import { useQuery } from '@tanstack/react-query'
import { useSearchForm } from './useSearchForm'

export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm()
	const { data: searchResult, isLoading } = useQuery(
		['search', debouncedSearch],
		() => searchServices.getSearchResult(debouncedSearch),
		{
			enabled: !!debouncedSearch
		}
	)
	return { searchResult, isLoading, control, searchTerm }
}
