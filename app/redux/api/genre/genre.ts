import { api } from '../api'


export const musicApi = api.injectEndpoints({
	endpoints: build => ({
		getAllGenre: build.query({
			query: () => ({
				url: '/genre',
			})
		}),
		getChartInGenre: build.query({
			query: id => ({
				url: `/https://api.deezer.com/editorial/${id}/charts`,
			})
		}),
	})
})
export const {
	useGetAllGenreQuery,
	useGetChartInGenreQuery,
} = musicApi
