import { useAction } from '@/hook/useAction'
import { useTypedRoute } from '@/hook/useTypedRoute'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { artistServices } from '@/services/artist.services'
import CatalogItem from '@/ui/catalog-item/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated } from 'react-native'

const ArtistCatalog = () => {
	const { params } = useTypedRoute<'ArtistCatalog'>()
	const { addToPlayer } = useAction()
	const { data: artist } = useQuery(['artists', params.id], () =>
		artistServices.getById(params.id)
	)
	const y = useRef(new Animated.Value(0)).current
	const { t } = useTranslation()
	if (!artist) return <FullScreenLoader />
	return (
		<Layout className='p-0'>
			<CatalogHeader
				type={'artist'}
				id={params.id}
				title={artist.name}
				rightIcon={'heart'}
				y={y}
			/>
			<CatalogBackground poster={artist.pictureBig} y={y} />
			<CatalogContent
				description={`${artist.name} - ${artist.songs.length} ${t('songs')}`}
				headerTitle={artist.name}
				y={y}
			>
				<UFlatList
					data={artist.songs}
					scrollEnabled={false}
					renderItem={({ item: song, index }) => (
							<CatalogItem
								type={'song'}
								id={song.id}
								text1={song.title}
								image={{
									url: song.coverSmall,
									height: 70,
									width: 70,
									border: 5
								}}
								text2={artist.name}
								onPress={() => {
									addToPlayer({
										data: artist.songs.map(track => ({
												id: track.id,
												title: track.title,
												url: track.mp3Path,
												artist: artist.name,
												coverBig: track.coverBig,
												coverSmall: track.coverSmall,
											})),
										songIndex: index
									})
								}}
							/>
						)}
				/>
			</CatalogContent>
		</Layout>
	)
}

export default ArtistCatalog
