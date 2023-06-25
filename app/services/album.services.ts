import { request } from '@/services/api/request.api'
import { IAlbum } from '@/services/types/album.services.types'
import { getAlbumUrl } from '@/utils/api.config'

export const albumServices = {
	async getById(id: number) {
		return request<IAlbum>({
			url: getAlbumUrl(`/${id}`),
			method: 'GET'
		})
	}
}
