import { useAction } from '@/hook/useAction'
import { useTypedRoute } from '@/hook/useTypedRoute'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { playlistServices } from '@/services/playlistServices'
import CatalogSongItem from '@/ui/flatList/catalogItem/catalogSongItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated } from 'react-native'

const PlaylistCatalog = () => {
	const { params } = useTypedRoute<'PlaylistCatalog'>()
	const {addToPlayer} = useAction()
	const {data:playlist} = useQuery(['playlists', params.id], () => playlistServices.getById(params.id))
	const y = useRef(new Animated.Value(0)).current
	const {t} = useTranslation()
	console.log(playlist?.id)
	if (!playlist) return <FullScreenLoader/>
	return (
		<Layout className={'p-0'}>
			<CatalogHeader
				type={"songs"}
				id={params.id}
				title={playlist.title}
				rightIcon={'heart'}
				rightIconFunction={() => console.log(1)}
				y={y}
			/>
			<CatalogBackground poster={playlist.coverBig} y={y} />
			<CatalogContent
				description={
					`${playlist.title} - ${playlist.songs.length} ${t('songs')}`
				}
				headerTitle={playlist.title}
				y={y}
			>
			<UFlatList data={playlist.songs} scrollEnabled={false}  renderItem={({item,index}) => {
				return <CatalogSongItem
					id={item.id}
					title={item.title}
					image={item.coverMedium}
					artist={item.artists[0].name}
					playFunc={() => {
						addToPlayer({
							data: playlist.songs.map(track => {
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

export default PlaylistCatalog