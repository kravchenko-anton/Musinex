import { request } from '@/services/api/request.api'
import { ISearchResult } from '@/services/types/search.services.types'
import { getSearchUrl } from '@/utils/apiConfig'

export const searchServices = {
		async getSearchResult(query: string) {
			return request<ISearchResult>({
				url: getSearchUrl(`/${query}`),
				method: 'GET',
			})
		},
		async getCatalogue() {
			return request<ISearchResult>({
				url: getSearchUrl('/catalog'),
				method: 'GET',
			})
		}
	}