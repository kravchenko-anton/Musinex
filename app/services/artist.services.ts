import { request } from '@/services/api/request.api'
import { getArtistUrl } from '@/utils/apiConfig'

export const artistServices = {
	async getById(id: number) {
		return request({
			url: getArtistUrl(`/${id}`),
			method: 'GET',
		})
	},
}