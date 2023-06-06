import { request } from '@/services/api/requestApi'
import { IPlaylist } from '@/services/types/IPlaylistServices'
import { getPlaylistUrl } from '@/utils/apiConfig'

export const playlistServices = {
	async getById(id: number) {
		return request<IPlaylist>({
			url: getPlaylistUrl(`/${id}`),
			method: 'GET'
		})
	}
}
