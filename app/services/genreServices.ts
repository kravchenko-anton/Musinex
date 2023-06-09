import { request } from '@/services/api/requestApi'
import { IGenre, IGenreList } from '@/services/types/IGenreServices'
import { getGenresUrl } from '@/utils/apiConfig'

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
