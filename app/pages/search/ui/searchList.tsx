import { useAction } from '@/hook/useAction'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { ISearchResult } from '@/services/types/ISearchServices'
import CatalogItem from '@/ui/flatList/catalogItem/catalogItem'
import FlatList404 from '@/ui/flatList/flatList404'
import MusicCart from '@/ui/flatList/flatlistItem/musicCart'
import UFlatList from '@/ui/flatList/uFlatList'
import Tabs from '@/ui/tabs/tabs'
import { FC } from 'react'

const SearchList: FC<{ searchResult: ISearchResult }> = ({ searchResult }) => {
	const { addToPlayer } = useAction()
	const { navigate } = useTypedNavigation()
	return (
		<Tabs
			data={[
				{
					title: 'Songs',
					name: 'songs',
					component: () => (
						<UFlatList
							key={'_'}
							keyExtractor={item => "_" + item.id}
							data={searchResult.songs}
							fixBottom
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item, index }) => (
								<CatalogItem
									onPress={() =>
										addToPlayer({
											data: searchResult.songs.map(item => {
												return {
													artist: item.artists[0].name,
													duration: item.duration,
													id: item.id,
													title: item.title,
													url: item.mp3Path,
													artwork: item.coverMedium
												}
											}),
											songIndex: index
										})
									}
									text1={item.title}
									id={item.id}
									image={{
										uri: item.coverSmall,
										width: 80,
										height: 80,
										border: 8
									}}
								/>
							)}
						/>
					)
				},
				{
					title: 'Albums',
					name: 'albums',
					component: () => (
						<UFlatList
							fixBottom
							key={'#'}
							keyExtractor={item => "#" + item.id}
							data={searchResult.albums}
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item }) => (
								<MusicCart
									onPress={() => navigate('AlbumCatalog', { id: item.id })}
									image={{
										url: item.coverMedium,
										width: 190,
										height: 190
									}}
									wrapClassNames={'mb-4'}
									name={item.title}
								/>
							)}
							numColumns={2}
						/>
					)
				},
				{
					title: 'Artists',
					name: 'artists',
					component: () => (
						<UFlatList
							fixBottom
							key={'%'}
							keyExtractor={item => "%" + item.id}
							data={searchResult.artists}
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item }) => (
								<CatalogItem
									onPress={() => navigate('ArtistCatalog', { id: item.id })}
									text1={item.name}
									id={item.id}
									image={{
										uri: item.pictureMedium,
										width: 80,
										height: 80,
										border: 100
									}}
								/>
							)}
						/>
					)
				},
				{
					title: 'Playlists',
					name: 'playlists',
					component: () => (
						<UFlatList
							fixBottom
							key={'@'}
							keyExtractor={item => "@" + item.id}
							data={searchResult.playlists}
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item }) => (
								<MusicCart
									onPress={() => navigate('PlaylistCatalog', { id: item.id })}
									image={{
										url: item.coverMedium,
										width: 190,
										height: 190
									}}
									wrapClassNames={'mb-4'}
									name={item.title}
								/>
							)}
							numColumns={2}
						/>
					)
				}
			]}
		/>
	)
}

export default SearchList
