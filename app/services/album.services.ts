import { getAlbumUrl } from '@/services/api.config'
import { request } from '@/services/api/request.api'
import { AlbumTypes } from '@/services/types/IAlbum'

export const albumServices = {
	async getById(id: number) {
		return request<AlbumTypes>({
			url: getAlbumUrl(`/${id}`),
			method: 'GET'
		})
	}
}
