import { api } from '../api'


export const artistApi = api.injectEndpoints({
	endpoints: build => ({
		ListTopArtists: build.query({
	query: () => '/chart/artists/top'
}),	searchArtistbyName: build.query({
			query: (name) => {
				return {
					url: '/artist/search',
					params: {
						name,
					}
				}
			},
		}),
		searchArtistById: build.query({
			query: (id) => {
				return {
					url: '/artist/overview',
					params: {
						artistId: id,
					}
				}
			},
		}),
		ArtistAlbumsById: build.query({
			query: (id) => {
				return {
					url: '/artist/albums',
					params: {
						artistId: id,
					}
				}
			},
		}),
	})
})
export const {useListTopArtistsQuery} = artistApi
