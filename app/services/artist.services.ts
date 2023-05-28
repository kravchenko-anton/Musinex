import { request } from '@/services/api/request.api'
import { IArtist } from '@/services/types/artist.services.types'
import { getArtistUrl } from '@/utils/apiConfig'

export const artistServices = {
	async getById(id: number) {
		return request<IArtist>({
			url: getArtistUrl(`/${id}`),
			method: 'GET',
		})
	},
}