import { FC, memo } from 'react'
import { useGetAlbumByIdQuery } from '../../../redux/api/album/album'
import { useGetArtistByIdQuery } from '../../../redux/api/artist/artistApi'
import { useGetPlaylistByIdQuery } from '../../../redux/api/playlist/playlist'
import { useGetTrackByIdQuery } from '../../../redux/api/song/song'
import { IHeartProps } from '../../../types/catalogTypes'
import CatalogAuthorItem from '../catalogItem/catalogAuthorItem'
import CatalogSongItem from '../catalogItem/catalogSongItem'
import MusicCart from '../flatlistItem/musicCart'

interface IRenderWrapper extends IHeartProps {
	playFunc: () => void
	height?: number
	width?: number
}

const RenderItem: FC<IRenderWrapper> =
	({
		 type,
		 id,
		 height = 150,
		 width = 150,
		 playFunc
	 }) => {
		switch (type) {
			case 'songs':
				const { data: track } = useGetTrackByIdQuery(id)
				if (!track) return null
				return <CatalogSongItem
					id={track.id} title={track.title} image={track.album.cover_medium} artist={track.artist.name}
					playFunc={playFunc} />
			case 'albums':
				const { data: album } = useGetAlbumByIdQuery(id)
				if (!album) return null
				console.log({
					id: album.id,
					name: album.title,
					url: album.cover_medium,
					width: width,
					height: height
				})
				return <MusicCart name={album.title} image={{
					url: album.cover_medium,
					width: width,
					height: height
				}} />
			case 'playlists':
				const { data: playlist } = useGetPlaylistByIdQuery(id)
				if (!playlist) return null
				return <MusicCart name={playlist.title} image={{
					url: playlist.picture_medium,
					width: width,
					height: height
				}} />
			case 'authors':
				const { data: author } = useGetArtistByIdQuery(id)
				if (!author) return null
				return <CatalogAuthorItem id={author.id} name={author.name} image={author.picture_medium} />
			default:
				return null
		}
	}

export default memo(RenderItem)