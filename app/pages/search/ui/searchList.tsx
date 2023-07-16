import { useAction } from '@/hook/useAction'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { SearchResultType } from '@/services/types/search.services.types'
import { ListNavigateType } from '@/types/global'
import CatalogItem from '@/ui/catalog-item/catalogItem'
import UFlatList from '@/ui/flatList/uFlatList'
import FlatList404 from '@/ui/flatList/ui/flatList-404/flatList404'
import MusicCart from '@/ui/music-cart/musicCart'
import Tabs from '@/ui/tabs/tabs'
import { FC } from 'react'

const SearchList: FC<{ searchResult: SearchResultType }> = ({
	searchResult
}) => {
	const bestResultsArray = [
		...(searchResult.bestResults.artists.map(obj => ({
			...obj,
			type: 'Artist'
		})) || []),
		...(searchResult.bestResults.songs.map(obj => ({ ...obj, type: 'Song' })) ||
			[]),
		...(searchResult.bestResults.albums.map(obj => ({
			...obj,
			type: 'Album'
		})) || []),
		...(searchResult.bestResults.playlists.map(obj => ({
			...obj,
			type: 'Playlist'
		})) || [])
	]
	const { addToPlayer } = useAction()
	const { navigate } = useTypedNavigation()
	return (
		<Tabs
			wrapperStyle={{
				paddingLeft: 8
			}}
			translate={true}
			data={[
				{
					title: 'better',
					name: 'best',
					component: () => (
						<UFlatList
							key='='
							className='px-2'
							keyExtractor={item => '=' + item.id}
							data={bestResultsArray}
							fixBottom
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item, index }: any) => (
								<CatalogItem
									noHeart={true}
									type={item.type}
									onPress={() => {
										if (item.type !== 'Song') {
											navigate(`${item.type as ListNavigateType}Catalog`, {
												id: item.id
											})
										} else {
											addToPlayer({
												data: searchResult.bestResults.songs.map(track => ({
													artist: track.artist.name,
													duration: track.duration,
													id: track.id,
													title: track.title,
													url: track.mp3Path,
													coverBig: track.coverBig,
													coverSmall: track.coverSmall,
													coverMedium: track.coverMedium
												})),
												songIndex: index
											})
										}
									}}
									text1={item.title || item.name}
									text2={
										item.artist
											? item.type + ' • ' + item.artist.name
											: item.type
									}
									id={item.id}
									image={{
										url: item.coverSmall || item.pictureSmall,
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
					title: 'Songs',
					name: 'songs',
					component: () => (
						<UFlatList
							key='_'
							className='px-2'
							keyExtractor={item => '_' + item.id}
							data={searchResult.songs}
							fixBottom
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item: song, index }) => (
								<CatalogItem
									type='song'
									onPress={() =>
										addToPlayer({
											data: searchResult.songs.map(track => ({
												artist: track.artist.name,
												duration: track.duration,
												id: track.id,
												title: track.title,
												url: track.mp3Path,
												coverBig: track.coverBig,
												coverSmall: track.coverSmall
											})),
											songIndex: index
										})
									}
									text1={song.title}
									id={song.id}
									image={{
										url: song.coverSmall,
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
							key='#'
							className='px-2'
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
									wrapClassNames='mb-4'
									text1={album.title}
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
							key='%'
							className='px-2'
							keyExtractor={item => '%' + item.id}
							data={searchResult.artists}
							ListEmptyComponent={() => (
								<FlatList404 width={150} height={150} />
							)}
							renderItem={({ item: artist }) => (
								<CatalogItem
									type='artist'
									onPress={() => navigate('ArtistCatalog', { id: artist.id })}
									text1={artist.name}
									id={artist.id}
									image={{
										url: artist.pictureMedium,
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
							key='@'
							className='px-2'
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
									wrapClassNames='mb-4'
									text1={playlist.title}
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
