import { api } from '../api'
import { IgetTopSong } from './types/IgetTopSong'

// getTopSong types === getTopVirusSong	types

export const musicApi = api.injectEndpoints({
	endpoints: build => ({
		getTopSong: build.query<IgetTopSong, null>({
			query: () => '/chart/tracks/top',
		}),
		getTopVirusSong: build.query<IgetTopSong, null>({
			query: () => '/chart/tracks/viral',
		}),
		
	})
})
export const {
	useGetTopSongQuery,
	useGetTopVirusSongQuery,
	
} = musicApi
