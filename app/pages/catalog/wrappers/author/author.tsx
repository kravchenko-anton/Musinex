import I18n from 'i18n-js'
import { useTypedRoute } from '../../../../hook/useTypedRoute'
import { useGetArtistByIdQuery, useGetArtistTracksQuery } from '../../../../redux/api/artist/artistApi'
import FullScreenLoader from '../../../../ui/loader/fullScreenLoader'
import CatalogWithProps from '../../catalogProps'

const AuthorWrapperCatalog = () => {
	const { params } = useTypedRoute<'AuthorWrapperCatalog'>()
	const { data: artist } = useGetArtistByIdQuery(params.authorId)
	const { data: tracks } = useGetArtistTracksQuery(params.authorId)
	if (!artist || !tracks) return <FullScreenLoader />
	return (
		<CatalogWithProps
			id={artist.id}
			type={'authors'}
			contentTypes={'songs'}
			headerCatalogDescription={
				artist.nb_album +
				I18n.t('albums') +
				' • ' +
				artist.nb_fan +
				I18n.t('fans')
			}
			headerImage={artist.picture_big}
			data={tracks.data.map(item => {
				return {
					title: item.title,
					image: item.album.cover_big,
					artist: item.artist.name,
					url: item.preview,
					id: item.id
				}
			})}
			headerText={artist.name}
		/>
	)
}

export default AuthorWrapperCatalog
