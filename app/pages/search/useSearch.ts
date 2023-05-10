import {
	useSearchAlbumQuery,
	useSearchArtistQuery,
	useSearchPlayListQuery,
	useSearchTrackQuery
} from '@/redux/api/music/musicApi'
import { useSearchForm } from './useSearchForm'

export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm()
	
	const { data: tracks, isLoading: trackLoading } = useSearchTrackQuery(
		debouncedSearch,
		{
			skip: !debouncedSearch
		}
	)
	const { data: artists, isLoading: artistsLoading } = useSearchArtistQuery(
		debouncedSearch,
		{
			skip: !debouncedSearch
		}
	)
	const { data: albums, isLoading: albumLoading } = useSearchAlbumQuery(
		debouncedSearch,
		{
			skip: !debouncedSearch
		}
	)
	const { data: playlists, isLoading: playlistLoading } = useSearchPlayListQuery(
		debouncedSearch,
		{
			skip: !debouncedSearch
		}
	)
	const isLoading =
		trackLoading || artistsLoading || albumLoading || playlistLoading
	return { tracks, artists, albums, playlists, isLoading, control, searchTerm }
}
