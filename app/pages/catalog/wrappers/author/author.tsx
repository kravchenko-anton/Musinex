import { useTypedRoute } from '../../../../hook/useTypedRoute'
import { useGetArtistByIdQuery, useGetArtistTracksQuery } from '../../../../redux/api/artist/artistApi'
import FullScreenLoader from '../../../../ui/Loader/FullScreenLoader'
import CatalogWithProps from '../../catalogProps'

const AuthorWrapperCatalog = () => {
	const { params } = useTypedRoute<'AuthorWrapperCatalog'>()
	const { data: artist } = useGetArtistByIdQuery(params.authorId)
	const { data: tracks } = useGetArtistTracksQuery(params.authorId)
	if (!artist || !tracks) return <FullScreenLoader />
	return <CatalogWithProps headerImage={artist.picture_big} data={tracks.data.map(item => {
		return {
			title: item.title,
			image: item.album.cover_big,
			artist: item.artist.name,
			id: item.id
		}
	})} headerText={artist.name} />
}

export default AuthorWrapperCatalog