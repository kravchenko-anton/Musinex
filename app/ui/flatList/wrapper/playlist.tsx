import { FC, memo } from 'react'
import { useGetPlaylistByIdQuery } from '../../../redux/api/playlist/playlist'
import MusicCart from '../flatlistItem/musicCart'

interface IPlaylistWrapper {
	id: number | string
	width?: number
	height?: number
}

const PlaylistWrapper: FC<IPlaylistWrapper> = (props) => {
	const { data: playlist } = useGetPlaylistByIdQuery(props.id)
	if (!playlist) return null
	return <MusicCart name={playlist.title} image={{
		url: playlist.picture_medium,
		height: props.height ? props.height : 180,
		width: props.width ? props.width : 180
	}}
	/>
}

export default memo(PlaylistWrapper)