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
}

const RenderItem: FC<IRenderWrapper> = (props) => {
	switch (props.type) {
		case 'songs':
			const { data: track } = useGetTrackByIdQuery(props.id)
			if (!track) return null
			return <CatalogSongItem id={track.id} title={track.title} image={track.album.cover_medium} artist={track.artist.name}
			                        playFunc={props.playFunc} />
		case 'albums':
			const { data: album } = useGetAlbumByIdQuery(props.id)
			if (!album) return null
			return <MusicCart id={album.id} name={album.title} image={{
				url: album.cover_medium,
				width: 100,
				height: 100
			}} />
		case 'playlists':
			const { data: playlist } = useGetPlaylistByIdQuery(props.id)
			if (!playlist) return null
			return <MusicCart id={playlist.id} name={playlist.title} image={{
				url: playlist.picture_medium,
				width: 100,
				height: 100
			}} />
		case 'authors':
			const { data: author } = useGetArtistByIdQuery(props.id)
			if (!author) return null
			return <CatalogAuthorItem id={author.id} name={author.name} image={author.picture_medium} />
		default:
			return null
	}
}

export default memo(RenderItem)