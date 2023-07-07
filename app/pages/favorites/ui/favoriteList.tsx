import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { userServices } from '@/services/user.services'
import CatalogItem from '@/ui/catalog-item/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Icon from '@/ui/icon/default-icon/icon'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Title from '@/ui/title/title'
import { Color } from '@/utils/color'
import { shadeRGBColor } from '@/utils/shade.color'
import { useQuery } from '@tanstack/react-query'
import { LinearGradient } from 'expo-linear-gradient'
import { useTranslation } from 'react-i18next'
import { Pressable, View } from 'react-native'

type favoriteListType = 'Album' | 'Artist' | 'Playlist'
const FavoriteList = () => {
	const { t } = useTranslation()
	const { navigate } = useTypedNavigation()
	const { data: user } = useQuery(['favorite'], () => userServices.getProfile())
	if (!user) return <FullScreenLoader />

	const favoriteArray = [
		{
			id: 'Songs' + 0,
			type: 'favoriteSongs',
			name: 'Favorite songs'
		},
		...(user.favoritesAlbum.map(obj => ({ ...obj, type: 'Album' })) || []),
		...(user.favoritesArtist.map(obj => ({ ...obj, type: 'Artist' })) || []),
		...(user.favoritePlayLists.map(obj => ({ ...obj, type: 'Playlist' })) || [])
	]

	return (
		<UFlatList
			ListEmptyComponent={() => (
				<View className='h-[85vh] items-center justify-center'>
					<Title translate weight='bold' size={26} className='mb-2'>
						Add music and other
					</Title>
					<Title translate numberOfLines={3} center size={14}>
						Save your favorite songs, albums, to listen to them at any time
					</Title>
				</View>
			)}
			keyExtractor={(item, index) => index.toString()}
			data={favoriteArray}
			/*Because of the fundamental difference between the objects, it is not possible to add typing here*/
			renderItem={({ item }: any) => {
				const title = item.title ? item.title : item.name
				const picture = item.coverMedium ? item.coverMedium : item.pictureMedium
				if (item.type === 'favoriteSongs')
					return (
						<Pressable
							onPress={() => navigate('FavoriteCatalog')}
							className='mb-2 mt-4 flex-row items-center gap-2'>
							<LinearGradient
								colors={[
									shadeRGBColor(Color.primary, -20),
									shadeRGBColor(Color.primary, 0),
									shadeRGBColor(Color.primary, +20)
								]}
								start={[0.2, 0.8]}
								end={[0.8, 0.4]}
								pointerEvents='none'
								className='h-[80px] w-[80px] items-center justify-center rounded-[2px]'>
								<Icon name='heart' size={40} color={Color.white} />
							</LinearGradient>
							<View>
								<Title translate weight='bold' size={22} color={Color.primary}>
									Favorite songs
								</Title>
								<Title size={22 * 0.75} weight='medium'>
									{`${t('Playlists')} · ${user?.favoritesSong.length} ${t(
										'songs'
									)} `}
								</Title>
							</View>
						</Pressable>
					)
				return (
					<CatalogItem
						id={item.id}
						noHeart
						type={item.type}
						text2={item.type}
						key={item}
						image={{
							url: picture,
							width: 80,
							height: 80,
							border: item.type === 'artist' ? 100 : 2
						}}
						text1={title}
						onPress={() => {
							navigate(`${item.type as favoriteListType}Catalog`, {
								id: item.id
							})
						}}
					/>
				)
			}}
		/>
	)
}

export default FavoriteList
