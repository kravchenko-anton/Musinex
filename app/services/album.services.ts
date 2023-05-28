import { request } from '@/services/api/request.api'
import { getAlbumUrl } from '@/utils/apiConfig'

export const albumServices	= {
	async getById(id: number) {
		return request({
			url: getAlbumUrl(`/${id}`),
			method: 'GET',
		})
	},
}