import { api } from '../api'
import { IArtistAlbumsById } from './types/IArtistAlbumsById'
import { IListTopArtists } from './types/IListTopArtists'
import { ISearchArtistById } from './types/ISearchArtistById'
import { ISearchArtistbyName } from './types/ISearchArtistbyName'

export const artistApi = api.injectEndpoints({
	endpoints: build => ({
		ListTopArtists: build.query<IListTopArtists, null>({
			query: () => '/chart/artists/top'
		}),

		searchArtistByName: build.query<ISearchArtistbyName, string>({
			query: name => {
				return {
					url: '/artist/search',
					params: {
						name
					}
				}
			}
		}),
		searchArtistById: build.query<ISearchArtistById, string>({
			query: id => {
				return {
					url: '/artist/overview',
					params: {
						artistId: id
					}
				}
			}
		}),
		ArtistAlbumsById: build.query<IArtistAlbumsById, string>({
			query: id => {
				return {
					url: '/artist/albums',
					params: {
						artistId: id
					}
				}
			}
		})
	})
})
export const {
	useListTopArtistsQuery,
	useSearchArtistByNameQuery,
	useSearchArtistByIdQuery,
	useArtistAlbumsByIdQuery
} = artistApi
