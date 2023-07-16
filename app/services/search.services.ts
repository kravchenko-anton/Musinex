import { getSearchUrl } from '@/services/api.config'
import { request } from '@/services/api/request.api'
import {CatalogResultType, SearchResultType,} from '@/services/types/search.services.types'

export const searchServices = {
	async getSearchResult(query: string) {
		return request<SearchResultType>({
			url: getSearchUrl(`/${query}`),
			method: 'GET'
		})
	},
	async getCatalogue() {
		return request<CatalogResultType>({
			url: getSearchUrl('/catalog'),
			method: 'GET'
		})
	}
}
