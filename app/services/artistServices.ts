import { request } from '@/services/api/requestApi'
import { IArtist } from '@/services/types/IArtistServices'
import { getArtistUrl } from '@/utils/apiConfig'

export const artistServices = {
	async getById(id: number) {
		return request<IArtist>({
			url: getArtistUrl(`/${id}`),
			method: 'GET'
		})
	}
}
