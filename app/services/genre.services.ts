import { request } from '@/services/api/request.api'
import { IGenre, IGenreList } from '@/services/types/genre.services.types'
import { getGenresUrl } from '@/utils/apiConfig'

export const genreServices = {
	async getById(id: number) {
		return request<IGenre>({
			url: getGenresUrl(`/${id}`),
			method: 'GET',
		})
	},
	async getAll() {
		return request<IGenreList>({
			url: getGenresUrl('/all'),
			method: 'GET',
		})
	}
}