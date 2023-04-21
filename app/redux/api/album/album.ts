import { api } from '../api'
import { IGetAlbumByID } from './types/IGetAlbumById'
import { IGetAlbumTrackByID } from './types/IGetAlbumTrackById'

export const albumApi = api.injectEndpoints({
	endpoints: build => ({
		getAlbumById: build.query<IGetAlbumByID, number>({
			query: id => ({
				url: `/album/${id}`
			})
		}),
		getAlbumTracksById: build.query<IGetAlbumTrackByID, number>({
			query: id => ({
				url: `/album/${id}/tracks?limit=100`
			})
		})
		
	})
})
export const {
	useGetAlbumByIdQuery,
	useGetAlbumTracksByIdQuery
} = albumApi
