import { api } from '../api'

export const playlistApi = api.injectEndpoints({
	endpoints: build => ({
		searchPlayListById: build.query({
			query: (id) => {
				return {
					url: '/playlist/metadata',
					params: {
						playlistId: id,
					}
				}
			},
		}),
		searchAlbomTrackById: build.query({
			query: (id) => {
				return {
					url: '/album/tracks',
					params: {
						albumId: id,
					}
				}
			},
		}),
	})
})
export const {useSearchPlayListByIdQuery} = playlistApi
