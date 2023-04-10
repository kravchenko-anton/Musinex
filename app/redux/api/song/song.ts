import { api } from '../api'
import { IGetMp3Data } from './types/IGetMp3FromSong'
import { IGetTackByName } from './types/IGetTackByName'
import { IGetTrackById } from './types/IGetTrackById'
import { ISearch } from './types/Isearch'

export const songApi = api.injectEndpoints({
	endpoints: build => ({
		search: build.query<ISearch, string>({
			query: (term) => {
				return {
					url: '/search',
					params: {
						term,
						type: 'all'
					}
				}
			},
		}),
		
		getTrackByName: build.query<IGetTackByName, string>({
			query: (name) => {
				return {
					url: '/track/search',
					params: {
						name,
					}
				}
			},
		}),
		getTrackById: build.query<IGetTrackById, string>({
			query: (id) => {
				return {
					url: '/track/metadata',
					params: {
						trackId: id,
					}
				}
			},
		}),
		getTrackLyricsById: build.query<string, string>({
			query: (id) => {
				return {
					url: '/track/lyrics',
					params: {
						trackId: id,
					}
				}
			},
		}),
		getTrackMP3ByName: build.query<IGetMp3Data, string>({
			query: (name) => {
				return {
					url: '/track/download/soundcloud',
					params: {
						track: name,
					}
				}
			},
		}),

	})
})
export const {
	useSearchQuery,
	useGetTrackByNameQuery,
	useGetTrackByIdQuery,
	useGetTrackLyricsByIdQuery,
	useGetTrackMP3ByNameQuery,
} = songApi
