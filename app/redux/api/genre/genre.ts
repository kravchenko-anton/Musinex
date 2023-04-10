import { api } from '../api'
import { IGenreContentById } from './types/IGenreContentById'
import { IHomeGenre } from './types/IHomeGenre'

export const genreApi = api.injectEndpoints({
	endpoints: build => ({
		getHomePageGenre: build.query<IHomeGenre, null>({
			query: () => '/home'
		}),
		getGenreContentById: build.query<IGenreContentById, string>({
			query: id => {
				return {
					url: '/genre/contents',
					params: {
						genreId: id
					}
				}
			}
		})
	})
})
export const { useGetHomePageGenreQuery, useGetGenreContentByIdQuery } =
	genreApi
