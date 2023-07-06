import { useAction } from '@/hook/useAction'
import { HEADER_HEIGHT } from '@/pages/catalog/catalog.constant'
import CatalogBackground from '@/pages/catalog/ui/catalog-background/catalogBackground'
import CatalogContent from '@/pages/catalog/ui/catalog-content/catalogContent'
import CatalogHeader from '@/pages/catalog/ui/catalog-header/catalogHeader'
import { userServices } from '@/services/user.services'
import CatalogItem from '@/ui/catalog-item/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Layout from '@/ui/layout/layout'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import { Color } from '@/utils/color'
import { useQuery } from '@tanstack/react-query'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated } from 'react-native'

const FavoriteCatalog = () => {
	const y = useRef(new Animated.Value(0)).current
	const { addToPlayer } = useAction()
	const { t } = useTranslation()
	const { data: songs } = useQuery(
		['favoriteSongs'],
		() => userServices.getProfile(),
		{
			select: user => user.favoritesSong
		}
	)
	if (!songs) return <FullScreenLoader />
	return (
		<Layout className='p-0'>
			<CatalogHeader title={t('Favorite songs')} y={y} />
			<CatalogBackground color={Color.primary} y={y} />
			<CatalogContent
				description={`${songs.length} ${t('songs')}`}
				paddingTop={HEADER_HEIGHT * 0.3}
				gradientEnd={0.75}
				headerTitle={t('Favorite songs')}
				y={y}>
				<UFlatList
					data={songs}
					scrollEnabled={false}
					renderItem={({ item: song, index }) => (
						<CatalogItem
							type='song'
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
									data: songs.map(track => ({
										id: track.id,
										title: track.title,
										url: track.mp3Path,
										artist: track.artists[0].name,
										coverBig: track.coverBig,
										coverSmall: track.coverSmall
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

export default FavoriteCatalog
