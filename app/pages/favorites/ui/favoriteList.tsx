import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { userServices } from '@/services/userServices'
import CatalogItem from '@/ui/flatList/catalogItem/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import Icon from '@/ui/icon/defaultIcon/Icon'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Title from '@/ui/title/title'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { Pressable, View } from 'react-native'

const FavoriteList = () => {
	const { t } = useTranslation()
	const { data: user } = useQuery(['favorite'], () => userServices.getProfile())
	const {	navigate } = useTypedNavigation()
	if (!user) return <FullScreenLoader />
	
	const FavoriteArray = [
		{
			id: 'Songs' + 0,
			type: 'favoriteSongs',
			name: 'Favorite songs'
		},
		...(user.favoritesAlbum
			? user.favoritesAlbum.map(obj => ({ ...obj, type: 'album' }))
			: []),
		...(user.favoritesArtist
			? user.favoritesArtist.map(obj => ({ ...obj, type: 'artist' }))
			: []),
		...(user.favoritePlayLists
			? user.favoritePlayLists.map(obj => ({ ...obj, type: 'playlist' }))
			: [])
	]
	
	return <UFlatList
		ListEmptyComponent={() => (
			<View className='h-[85vh] justify-center items-center'>
				<Title
					translate
					fontFamily={'Montserrat_700Bold'}
					size={26}
					className='mb-2'
				>
					Add music and other
				</Title>
				<Title translate numberOfLines={3} center size={14}>
					Save your favorite songs, albums, to listen to them at any time
				</Title>
			</View>
		)}
		keyExtractor={(item, index) => index.toString()}
		data={FavoriteArray}
		renderItem={({ item }: any) => {
			const title = item.title ? item.title : item.name
			const picture = item.coverMedium
				? item.coverMedium
				: item.pictureMedium
			if (item.type === 'favoriteSongs')
				return (
					<Pressable onPress={() => navigate('FavoriteCatalog')} className='mb-2 mt-4' key={item}>
						<View className='items-center flex-row gap-2'>
							<View className='h-[80px] w-[80px] bg-lightBlack items-center justify-center rounded-[2px]'>
								<Icon name={'heart'} size={40} color={'white'} />
							</View>
							<View>
								<Title
									translate
									fontFamily={'Montserrat_700Bold'}
									size={22}
									color={'primary'}
								>
									Favorite songs
								</Title>
								<Title size={22 * 0.75} fontFamily={'Montserrat_500Medium'}>
									{`${t('Playlists')} · ${user?.favoritesSong.length} ${t(
										'songs'
									)} `}
								</Title>
							</View>
						</View>
					</Pressable>
				)
			return (
				<CatalogItem
					id={item.id}
					type={item.type}
					text2={item.type}
					key={item}
					image={{
						uri: picture,
						width: 80,
						height: 80,
						border: item.type === 'artist' ? 100 : 2
					}}
					text1={title}
					
					onPress={() => console.log(1)}
				/>
			)
		}}
	/>
}

export default FavoriteList