import { getPlaylistUrl } from '@/services/api.config'
import { request } from '@/services/api/request.api'
import { PlaylistType } from '@/services/types/playlist.services.types'

export const playlistServices = {
	async getById(id: number) {
		return request<PlaylistType>({
			url: getPlaylistUrl(`/${id}`),
			method: 'GET'
		})
	}
}
