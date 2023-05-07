import { FC, memo } from 'react'
import { useTypedNavigation } from '../../../hook/useTypedNavigation'
import { useGetAlbumByIdQuery } from '../../../redux/api/album/album'
import { useGetArtistByIdQuery } from '../../../redux/api/artist/artistApi'
import { useGetPlaylistByIdQuery } from '../../../redux/api/playlist/playlist'
import { useGetTrackByIdQuery } from '../../../redux/api/song/song'
import { ICatalogRenderTypes } from '../../../types/catalogTypes'
import { cutString } from '../../../utils/cutString'
import CatalogAuthorItem from '../catalogItem/catalogAuthorItem'
import CatalogSongItem from '../catalogItem/catalogSongItem'
import MusicCart from '../flatlistItem/musicCart'

interface IRenderItem {
	id: number | string
	type: ICatalogRenderTypes
	playFunc?: () => void // тут должно быть что-то типа если type === 'songs' то playFunc: () => void иначе этого поля даже нет
	height?: number
	width?: number
}

const RenderItem: FC<IRenderItem> =
	({
		 type,
		 id,
		 height = 180,
		 width = '100%' as unknown as number, // string work fine, number - not
		 playFunc
	 }) => {
		const { navigate } = useTypedNavigation()
		switch (type) {
			case 'songs':
				const { data: track } = useGetTrackByIdQuery(id)
				if (!track || !playFunc) return null
				return (
					<CatalogSongItem
						id={track.id}
						title={track.title}
						image={track.album.cover_medium}
						artist={track.artist.name}
						playFunc={playFunc}
					/>
				)
			case 'albums':
				const { data: album } = useGetAlbumByIdQuery(id)
				if (!album) return null
				return (
					<MusicCart
						name={cutString(album.title, 10)}
						image={{
							url: album.cover_medium,
							height: height,
							width: width
						}}
						className='p-2 mt-2 w-[50%]'
						onPress={() => navigate('AlbumWrapperCatalog', { albumId: id })}
					/>
				)
			case 'playlists':
				const { data: playlist } = useGetPlaylistByIdQuery(id)
				if (!playlist) return null
				return (
					<MusicCart
						name={cutString(playlist.title, 10)}
						image={{
							url: playlist.picture_medium,
							width: width,
							height: height
						}}
						className='p-2 mt-2 w-[50%]'
						onPress={() => navigate('PlayListWrapperCatalog', { playListId: id })}
					/>
				)
			case 'authors':
				const { data: author } = useGetArtistByIdQuery(id)
				if (!author) return null
				return (
					<CatalogAuthorItem
						id={author.id}
						name={author.name}
						image={author.picture_medium}
					/>
				)
			default:
				return null
		}
	}

export default memo(RenderItem)
