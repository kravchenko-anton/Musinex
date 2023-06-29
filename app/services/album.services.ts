import { request } from '@/services/api/request.api'
import { AlbumTypes } from '@/services/types/IAlbum'
import { getAlbumUrl } from '@/utils/api.config'

export const albumServices = {
	async getById(id: number) {
		return request<AlbumTypes>({
			url: getAlbumUrl(`/${id}`),
			method: 'GET'
		})
	}
}
