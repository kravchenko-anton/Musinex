import { request } from '@/services/api/request.api'
import { IUser } from '@/services/types/user.services.types'
import { getUsersUrl } from '@/utils/api.config'

export const userServices = {
	async getProfile() {
		return request<IUser>({
			url: getUsersUrl('/get-profile'),
			method: 'GET'
		})
	},
	async updateProfile(data: Partial<IUser>) {
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
		return request<IUser>({
			url: getUsersUrl(`/toggle-favorite/${data.type}/${data.id}`),
			method: 'PATCH'
		})
	}
}
