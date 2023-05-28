import { request } from '@/services/api/request.api'
import { getUsersUrl } from '@/utils/apiConfig'

export const userServices = {
		async getProfile() {
			return request({
				url: getUsersUrl('/get-profile'),
				method: 'GET',
			})
		},
		async updateProfile(data: any) {
			return request({
				url: getUsersUrl('/update-user'),
				method: 'POST',
				data
			})
		},
	async toggleFavorite(type: "song" | 'album' | 'playlist' | 'artist', id: number) {
		return request({
			url: getUsersUrl(`/toggle-favorite/${type}/${id}`),
			method: 'POST',
		})
	}
	}