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
							keyExtractor={item => '_' + item.id}
							data={searchResult.songs}
							fixBottom
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item: song, index }) => (
								<CatalogItem
									type={'song'}
									onPress={() =>
										addToPlayer({
											data: searchResult.songs.map(track => {
												return {
													artist: track.artists[0].name,
													duration: track.duration,
													id: track.id,
													title: track.title,
													url: track.mp3Path,
													artwork: track.coverMedium
												}
											}),
											songIndex: index
										})
									}
									text1={song.title}
									id={song.id}
									image={{
										uri: song.coverSmall,
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
							keyExtractor={item => '#' + item.id}
							data={searchResult.albums}
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item: album }) => (
								<MusicCart
									onPress={() => navigate('AlbumCatalog', { id: album.id })}
									image={{
										url: album.coverMedium,
										width: 190,
										height: 190
									}}
									wrapClassNames={'mb-4'}
									name={album.title}
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
							keyExtractor={item => '%' + item.id}
							data={searchResult.artists}
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item: artist }) => (
								<CatalogItem
									type={'artist'}
									onPress={() => navigate('ArtistCatalog', { id: artist.id })}
									text1={artist.name}
									id={artist.id}
									image={{
										uri: artist.pictureMedium,
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
							keyExtractor={item => '@' + item.id}
							data={searchResult.playlists}
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item: playlist }) => (
								<MusicCart
									onPress={() =>
										navigate('PlaylistCatalog', { id: playlist.id })
									}
									image={{
										url: playlist.coverMedium,
										width: 190,
										height: 190
									}}
									wrapClassNames={'mb-4'}
									name={playlist.title}
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
