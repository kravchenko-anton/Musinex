import { useSearchAlbumQuery, useSearchAuthorQuery, useSearchTrackQuery } from '../../redux/api/music/musicApi'
import { useSearchForm } from './useSearchForm'

export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm()
	
	const { data: tracks, isLoading: trackLoading } = useSearchTrackQuery(debouncedSearch, {
		skip: !debouncedSearch
	})
	const { data: author, isLoading: authorLoading } = useSearchAuthorQuery(debouncedSearch, {
		skip: !debouncedSearch
	})
	const { data: albums, isLoading: albumLoading } = useSearchAlbumQuery(debouncedSearch, {
		skip: !debouncedSearch
	})
	const { data: playlists, isLoading: playlistLoading } = useSearchAlbumQuery(debouncedSearch, {
		skip: !debouncedSearch
	})
	const isLoading = trackLoading || authorLoading || albumLoading || playlistLoading
	return { tracks, author, albums, playlists, isLoading, control, searchTerm }
}
