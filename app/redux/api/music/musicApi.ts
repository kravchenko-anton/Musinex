import { api } from '../api'
import { IChart } from './types/IChart'
import { ISearch } from './types/ISearch'


export const musicApi = api.injectEndpoints({
	endpoints: build => ({
		getChart: build.query<IChart, null>({
			query: () => ({
				url: '/chart?limit=100',
			})
		}),
		search: build.query<ISearch, string>({
			query: term => ({
				url: `/search${term}`,
			})
		}),
	})
})
export const {
	useGetChartQuery,
	useSearchQuery,
} = musicApi
