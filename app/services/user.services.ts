import { request } from '@/services/api/request.api'
import { IUser } from '@/services/types/user.services.types'
import { getUsersUrl } from '@/utils/apiConfig'

export const userServices = {
		async getProfile() {
			return request<IUser>({
				url: getUsersUrl('/get-profile'),
				method: 'GET',
			})
		},
		async updateProfile(data: Partial<IUser>) {
			return request({
				url: getUsersUrl('/update-user'),
				method: 'POST',
				data
			})
		},
	async toggleFavorite(type: "song" | 'album' | 'playlist' | 'artist', id: number) {
		return request<IUser>({
			url: getUsersUrl(`/toggle-favorite/${type}/${id}`),
			method: 'POST',
		})
	}
	}