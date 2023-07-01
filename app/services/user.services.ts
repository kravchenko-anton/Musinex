import { getUsersUrl } from '@/services/api.config'
import { request } from '@/services/api/request.api'
import { UserType } from '@/services/types/user.services.types'

export const userServices = {
	async getProfile() {
		return request<UserType>({
			url: getUsersUrl('/get-profile'),
			method: 'GET'
		})
	},
	async updateProfile(data: Partial<UserType>) {
		return request({
			url: getUsersUrl('/update-user'),
			method: 'POST',
			data
		})
	},
	async toggleFavorite(data: {
		type: 'song' | 'album' | 'playlist' | 'artist'
		id: number
	}) {
		return request<UserType>({
			url: getUsersUrl(`/toggle-favorite/${data.type}/${data.id}`),
			method: 'PATCH'
		})
	}
}
