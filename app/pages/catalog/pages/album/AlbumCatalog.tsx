import { useAction } from '@/hook/useAction'
import { useTypedRoute } from '@/hook/useTypedRoute'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { albumServices } from '@/services/albumServices'
import CatalogSongItem from '@/ui/flatList/catalogItem/catalogSongItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { Animated } from 'react-native'

const AlbumCatalog = () => {
	const { params } = useTypedRoute<'AlbumCatalog'>()
	const {addToPlayer} = useAction()
	const y = useRef(new Animated.Value(0)).current
	const {data:album} = useQuery(['song', params.id], () => albumServices.getById(params.id))
	if (!album) return <FullScreenLoader/>
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				type={"songs"}
				id={params.id}
				title={params.headerText}
				rightIcon={'heart'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground poster={params.headerImage} y={y} />
			<CatalogContent
				description={params.headerDescription}
				headerTitle={params.headerText}
				y={y}
			>
				<UFlatList data={album?.songs} renderItem={({item,index}) => {
					return <CatalogSongItem
						id={item.id}
						title={item.title}
						image={item.coverMedium}
						artist={item.artists[0].name}
						playFunc={() => {
							addToPlayer({
								data: album?.songs.map(track => {
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

export default AlbumCatalog