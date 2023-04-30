import I18n from 'i18n-js'
import { useTypedRoute } from '../../../../hook/useTypedRoute'
import {
	useGetAlbumByIdQuery,
	useGetAlbumTracksByIdQuery
} from '../../../../redux/api/album/album'
import FullScreenLoader from '../../../../ui/loader/fullScreenLoader'
import CatalogWithProps from '../../catalogProps'

const AlbumWrapperCatalog = () => {
	const { params } = useTypedRoute<'AlbumWrapperCatalog'>()
	const { data: album } = useGetAlbumByIdQuery(params.albumId)
	const { data: tracks } = useGetAlbumTracksByIdQuery(params.albumId)
	if (!album || !tracks) return <FullScreenLoader />
	return (
		<CatalogWithProps
			type={'songs'}
			headerCatalogDescription={
				album.release_date + ' • ' + album.nb_tracks + I18n.t('songs')
			}
			headerImage={album.cover_big}
			data={tracks.data.map(item => {
				return {
					title: item.title,
					image: album.cover_medium,
					artist: item.artist.name,
					url: item.preview,
					id: item.id
				}
			})}
			headerText={album.title}
		/>
	)
}

export default AlbumWrapperCatalog
