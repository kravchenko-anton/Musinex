import { useTypedRoute } from '../../../../hook/useTypedRoute'
import { useGetAlbumByIdQuery, useGetAlbumTracksByIdQuery } from '../../../../redux/api/album/album'
import FullScreenLoader from '../../../../ui/Loader/FullScreenLoader'
import CatalogWithProps from '../../catalogProps'

const AlbumWrapperCatalog = () => {
	const { params } = useTypedRoute<'AlbumWrapperCatalog'>()
	const { data: album } = useGetAlbumByIdQuery(params.albumId)
	const { data: tracks } = useGetAlbumTracksByIdQuery(params.albumId)
	if (!album || !tracks) return <FullScreenLoader />
	return <CatalogWithProps headerImage={album.cover_big} data={tracks.data.map(item => {
		return {
			title: item.title,
			image: album.cover_medium,
			artist: item.artist.name,
			id: item.id
		}
	})} headerText={album.title} />
}

export default AlbumWrapperCatalog