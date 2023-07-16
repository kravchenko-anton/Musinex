import { getHistoryUrl, getUsersUrl } from '@/services/api.config'
import { request } from '@/services/api/request.api'
import { UserType } from '@/services/types/user.services.types'

export const userServices = {
	async getProfile() {
		return request<UserType>({
			url: getUsersUrl('/get-profile'),
			method: 'GET'
		})
	},
	async postHistory({ data }: { data: number[] }) {
		return request<UserType>({
			url: getHistoryUrl('/add'),
			method: 'POST',
			data: {
				songsId: data
			}
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
