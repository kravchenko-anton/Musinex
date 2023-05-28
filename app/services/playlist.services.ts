import { request } from '@/services/api/request.api'
import { getPlaylistUrl } from '@/utils/apiConfig'

export const playlistServices = {
	async getById(id: number) {
		return request({
			url: getPlaylistUrl(`/${id}`),
			method: 'GET',
		})
	},
}