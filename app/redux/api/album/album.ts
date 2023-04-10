import { api } from '../api'
import { IListTopWeeklyAlbum } from './types/IListTopWeeklyAlbum'
import { ISearchAlbumMetadataById } from './types/ISearchAlbumMetadataById'
import { ISearchAlbumTrackById } from './types/ISearchAlbumTrackById'

export const albumApi = api.injectEndpoints({
	endpoints: build => ({
		ListTopWeeklyAlbum: build.query<IListTopWeeklyAlbum, null>({
			query: () => '/chart/albums/top'
		}),

		searchAlbumTrackById: build.query<ISearchAlbumTrackById, string>({
			query: id => {
				return {
					url: '/album/tracks',
					params: {
						albumId: id
					}
				}
			}
		}),
		searchAlbumMetadataById: build.query<ISearchAlbumMetadataById, string>({
			query: id => {
				return {
					url: '/album/metadata',
					params: {
						albumId: id
					}
				}
			}
		})
	})
})
export const {
	useListTopWeeklyAlbumQuery,
	useSearchAlbumMetadataByIdQuery,
	useSearchAlbumTrackByIdQuery
} = albumApi
