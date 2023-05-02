import { FC, memo } from 'react'
import { useGetAlbumByIdQuery } from '../../../redux/api/album/album'
import MusicCart from '../flatlistItem/musicCart'

interface IAlbumWrapper {
	id: number | string
	width?: number
	height?: number
}

const AlbumWrapper: FC<IAlbumWrapper> = (props) => {
	const { data: album } = useGetAlbumByIdQuery(props.id)
	if (!album) return null
	return <MusicCart name={album.title} image={{
		url: album.cover_medium,
		height: props.height ? props.height : 180,
		width: props.width ? props.width : 180
	}}
	/>
}

export default memo(AlbumWrapper)