import { request } from '@/services/api/request.api'
import { IGenre, IGenreList } from '@/services/types/genre.services.types'
import { getGenresUrl } from '@/utils/api.config'

export const genreServices = {
	async getById(id: number) {
		return request<IGenre>({
			url: getGenresUrl(`/by-id/${id}`),
			method: 'GET'
		})
	},
	async getAll() {
		return request<IGenreList>({
			url: getGenresUrl('/all'),
			method: 'GET'
		})
	}
}
