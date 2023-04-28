import { useTypedRoute } from '../../../../hook/useTypedRoute'
import { useGetPlaylistByIdQuery, useGetPlaylistTracksQuery } from '../../../../redux/api/playlist/playlist'
import FullScreenLoader from '../../../../ui/loader/fullScreenLoader'
import CatalogWithProps from '../../catalogProps'

const PlayListWrapperCatalog = () => {
	const { params } = useTypedRoute<'PlayListWrapperCatalog'>()
	const { data: playlist } = useGetPlaylistByIdQuery(params.playListId)
	const { data: tracks } = useGetPlaylistTracksQuery(params.playListId)
	console.log(tracks)
	if (!playlist || !tracks) return <FullScreenLoader />
	return <CatalogWithProps headerCatalogDescription={
		playlist.nb_tracks + ' songs'
	} headerImage={playlist.picture_big} data={tracks.data.map(item => {
		return {
			title: item.title,
			image: item.album.cover_big,
			artist: item.artist.name,
			id: item.id
		}
	})} headerText={playlist.title} />
}

export default PlayListWrapperCatalog