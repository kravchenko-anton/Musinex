import { request } from '@/services/api/request.api'
import { getSearchUrl } from '@/utils/apiConfig'

export const searchServices = {
		async getSearchResult(query: string) {
			return request({
				url: getSearchUrl(`/${query}`),
				method: 'GET',
			})
		},
		async getCatalogue() {
			return request({
				url: getSearchUrl('/catalog'),
				method: 'GET',
			})
		}
	}