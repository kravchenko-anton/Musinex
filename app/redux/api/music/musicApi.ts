import { SongTypes } from '../../../types/songTypes'
import { api } from '../api'

export const musicApi = api.injectEndpoints({
	endpoints: build => ({
		searchSong: build.query({
			query: (term) => {
				return {
					url: '/search',
					params: {
						term,
						type: 'all'
					}
				}
			},
		}), getTopSong: build.query<{trackMetadata: SongTypes }[], null>({
			query: () => '/chart/tracks/top',
		}), getTopVirusSong: build.query<{trackMetadata: SongTypes }[], null>({
			query: () => '/chart/tracks/viral',
		})
	})
})
export const { useGetTopSongQuery, useSearchSongQuery } = musicApi
