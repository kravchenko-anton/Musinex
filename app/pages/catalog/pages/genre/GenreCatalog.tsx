import { useAction } from '@/hook/useAction'
import { useTypedRoute } from '@/hook/useTypedRoute'
import { HEADER_HEIGHT } from '@/pages/catalog/catalogConstant'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { genreServices } from '@/services/genreServices'
import MusicCart from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated } from 'react-native'

const GenreCatalog = () => {
	const { params } = useTypedRoute<'GenreCatalog'>()
	const { addToPlayer } = useAction()
	const { data: genre } = useQuery(['genre', params.id], () =>
		genreServices.getById(params.id)
	)
	const y = useRef(new Animated.Value(0)).current
	const { t } = useTranslation()
	if (!genre) return <FullScreenLoader />
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				type={'songs'}
				id={params.id}
				title={genre.name}
				rightIcon={'share-social'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground color={genre.color} y={y} />
			<CatalogContent
				paddingTop={HEADER_HEIGHT * 0.32}
				description={`${t('In you heart')} - ${genre.name}`}
				headerTitle={genre.name}
				y={y}
			>
				<UFlatList
					wrapClassNames={'w-full justify-center items-center'}
					data={genre.songs.slice(0, 10)}
					horizontal
					mt={25}
					headerText={'Songs'}
					renderItem={({ item, index }) => {
						return (
							<MusicCart
								image={{
									url: item.coverMedium,
									width: 130,
									height: 130,
									border: 16
								}}
								onPress={() => {
									addToPlayer({
										data: genre?.songs.map(track => {
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
								name={item.title}
								artists={item.artists[0].name}
							/>
						)
					}}
				/>

				<UFlatList
					data={genre.albums.slice(0, 10)}
					horizontal
					mt={0}
					headerText='Albums'
					renderItem={({ item }) => {
						return (
							<MusicCart
								image={{
									url: item.coverMedium,
									width: 140,
									height: 140,
									border: 6
								}}
								name={item.title}
							/>
						)
					}}
				/>

				<UFlatList
					data={genre.playlists.slice(0, 10)}
					horizontal
					mt={25}
					headerText='Playlist'
					renderItem={({ item }) => {
						return (
							<MusicCart
								image={{
									url: item.coverMedium,
									width: 150,
									height: 150
								}}
								name={item.title}
							/>
						)
					}}
				/>
			</CatalogContent>
		</Layout>
	)
}

export default GenreCatalog
