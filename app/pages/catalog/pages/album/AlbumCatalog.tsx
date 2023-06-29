import { useAction } from '@/hook/useAction'
import { useTypedRoute } from '@/hook/useTypedRoute'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { albumServices } from '@/services/album.services'
import { CatalogItem, FullScreenLoader, Layout, UFlatList } from '@/ui'
import { useQuery } from '@tanstack/react-query'
import { FC, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated } from 'react-native'

const AlbumCatalog:FC = () => {
	const { params } = useTypedRoute<'AlbumCatalog'>()
	const { addToPlayer } = useAction()
	const y = useRef(new Animated.Value(0)).current
	const { data: album } = useQuery(['album', params.id], () =>
		albumServices.getById(params.id)
	)
	const { t } = useTranslation()
	if (!album || !album.songs.length) return <FullScreenLoader />
	return (
		<Layout className='p-0'>
			<CatalogHeader
				type={'album'}
				id={params.id}
				title={album.title}
				rightIcon={'heart'}
				y={y}
			/>
			<CatalogBackground poster={album.coverBig} y={y} />
			<CatalogContent
				description={`${album.title} - ${album.songs.length} ${t('songs')}`}
				headerTitle={album.title}
				y={y}
			>
				<UFlatList
					data={album.songs}
					scrollEnabled={false}
					renderItem={({ item: song, index }) => {
						return (
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
								text2={song.artists[0].name}
								onPress={() => {
									addToPlayer({
										data: album.songs.map(track => {
											return {
												id: track.id,
												title: track.title,
												url: track.mp3Path,
												artist: track.artists[0].name,
												coverBig: track.coverBig,
												coverSmall: track.coverSmall,
											}
										}),
										songIndex: index
									})
								}}
							/>
						)
					}}
				/>
			</CatalogContent>
		</Layout>
	)
}

export default AlbumCatalog
