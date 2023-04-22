import { api } from '../api'
import { IChart } from './types/IChart'
import { ISearchAlbum } from './types/ISearchAlbum'
import { ISearchAuthor } from './types/ISearchAuthor'
import { ISearchPlayList } from './types/ISearchPlayList'
import { ISearchTrack } from './types/ISearchTrack'


export const musicApi = api.injectEndpoints({
	endpoints: build => ({
		getChart: build.query<IChart, null>({
			query: () => ({
				url: '/chart?limit=100'
			})
		}),
		searchAuthor: build.query<ISearchAuthor, string>({
			query: term => ({
				url: `/search/artist?q=${term}`
			})
		}),
		searchTrack: build.query<ISearchTrack, string>({
			query: term => ({
				url: `/search/track?q=${term}`
			})
		}),
		searchAlbum: build.query<ISearchAlbum, string>({
			query: term => ({
				url: `/search/album?q=${term}`
			})
		}),
		searchPlayList: build.query<ISearchPlayList, string>({
			query: term => ({
				url: `/search/playlist?q=${term}`
			})
		})
	})
})
export const {
	useGetChartQuery,
	useSearchAuthorQuery,
	useSearchTrackQuery,
	useSearchAlbumQuery,
	useSearchPlayListQuery
} = musicApi
