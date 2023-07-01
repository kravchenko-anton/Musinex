import { getGenresUrl } from '@/services/api.config'
import { request } from '@/services/api/request.api'
import { GenreListType, GenreType } from '@/services/types/genre.services.types'

export const genreServices = {
	async getById(id: number) {
		return request<GenreType>({
			url: getGenresUrl(`/by-id/${id}`),
			method: 'GET'
		})
	},
	async getAll() {
		return request<GenreListType>({
			url: getGenresUrl('/all'),
			method: 'GET'
		})
	}
}
