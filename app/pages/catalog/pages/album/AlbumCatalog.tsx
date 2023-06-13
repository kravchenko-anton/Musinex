import { useAction } from '@/hook/useAction'
import { useTypedRoute } from '@/hook/useTypedRoute'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { albumServices } from '@/services/albumServices'
import CatalogItem from '@/ui/flatList/catalogItem/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated } from 'react-native'

const AlbumCatalog = () => {
	const { params } = useTypedRoute<'AlbumCatalog'>()
	const { addToPlayer } = useAction()
	const y = useRef(new Animated.Value(0)).current
	const { data: album } = useQuery(['album', params.id], () =>
		albumServices.getById(params.id)
	)
	const { t } = useTranslation()
	if (!album || !album.songs.length) return <FullScreenLoader />
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				type={'album'}
				id={params.id}
				title={album.title}
				rightIcon={'heart'}
				rightIconFunction={() => console.log(1)}
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
					renderItem={({ item, index }) => {
						return (
							<CatalogItem
								type={'song'}
								id={item.id}
								text1={item.title}
								image={{
									uri: item.coverSmall,
									height: 70,
									width: 70,
									border: 5
								}}
								text2={item.artists[0].name}
								onPress={() => {
									addToPlayer({
										data: album.songs.map(track => {
											return {
												id: track.id,
												title: track.title,
												url: track.mp3Path,
												artist: track.artists[0].name,
												artwork: track.coverMedium
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
