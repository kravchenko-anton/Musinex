import { useAction } from '@/hook/useAction'
import { useTypedRoute } from '@/hook/useTypedRoute'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { genreServices } from '@/services/genreServices'
import CatalogSongItem from '@/ui/flatList/catalogItem/catalogSongItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated } from 'react-native'

const GenreCatalog = () => {
	const { params } = useTypedRoute<'GenreCatalog'>()
	const {addToPlayer} = useAction()
	const {data:genre} = useQuery(['song', params.id], () => genreServices.getById(params.id))
	const y = useRef(new Animated.Value(0)).current
	const {t} = useTranslation()
	if (!genre) return <FullScreenLoader/>
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				type={"songs"}
				id={params.id}
				title={genre.name}
				rightIcon={'share-social'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground color={genre.color}  y={y} />
			<CatalogContent
				description={
					genre.name
				}
				headerTitle={genre.name}
				y={y}
			>
				<UFlatList data={genre?.songs} renderItem={({item,index}) => {
					return <CatalogSongItem
						id={item.id}
						title={item.title}
						image={item.coverSmall}
						artist={item.artists[0].name}
						playFunc={() => {
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
					/>
				}}
				/>
			</CatalogContent>
		</Layout>
	)
}

export default GenreCatalog