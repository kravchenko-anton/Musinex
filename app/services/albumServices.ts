import { request } from '@/services/api/requestApi'
import { IAlbum } from '@/services/types/IAlbumServices'
import { getAlbumUrl } from '@/utils/apiConfig'

export const albumServices = {
	async getById(id: number) {
		return request<IAlbum>({
			url: getAlbumUrl(`/${id}`),
			method: 'GET'
		})
	}
}
