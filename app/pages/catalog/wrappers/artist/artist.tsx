import { useTypedRoute } from '@/hook/useTypedRoute'
import { useGetArtistByIdQuery, useGetArtistTracksQuery } from '@/redux/api/artist/artistApi'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import I18n from 'i18n-js'
import CatalogWithProps from '../../catalogProps'

const ArtistWrapperCatalog = () => {
	const { params } = useTypedRoute<'ArtistWrapperCatalog'>()
	const { data: artist } = useGetArtistByIdQuery(params.artistId)
	const { data: tracks } = useGetArtistTracksQuery(params.artistId)
	if (!tracks || !artist) return <FullScreenLoader />
	return (
		<CatalogWithProps
			id={artist.id}
			type={'artists'}
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

export default ArtistWrapperCatalog
