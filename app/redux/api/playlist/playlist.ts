import { api } from '../api'
import { ISearchPlayListById } from './types/ISearchPlayListById'
import { ISearchPlayListContentById } from './types/ISearchPlayListContentById'

export const playlistApi = api.injectEndpoints({
	endpoints: build => ({
		searchPlayListById: build.query<ISearchPlayListById, string>({
			query: (id) => {
				return {
					url: '/playlist/metadata',
					params: {
						playlistId: id,
					}
				}
			},
		}),
		searchPlayListContentById: build.query<ISearchPlayListContentById, string>({
			query: (id) => {
				return {
					url: '/playlist/contents',
					params: {
						playlistId: id,
					}
				}
			},
		}),
	
	})
})
export const {
	useSearchPlayListByIdQuery,
	useSearchPlayListContentByIdQuery,
} = playlistApi
