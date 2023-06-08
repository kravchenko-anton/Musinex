import { searchServices } from '@/services/searchServices'
import { useQuery } from '@tanstack/react-query'
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
	return { searchResult, isLoading, control, searchTerm }
}
