import { request } from '@/services/api/request.api'
import { getGenresUrl } from '@/utils/apiConfig'

export const genreServices = {
	async getById(id: number) {
		return request({
			url: getGenresUrl(`/${id}`),
			method: 'GET',
		})
	},
	async getAll() {
		return request({
			url: getGenresUrl(''),
			method: 'GET',
		})
	}
}