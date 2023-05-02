import { FC, memo } from 'react'
import { useGetTrackByIdQuery } from '../../../redux/api/song/song'
import CatalogSongItem from '../catalogItem/catalogSongItem'

interface ISongWrapper {
	id: number | string
	playFunc: () => void
	likeFunc: () => void
}

const SongWrapper: FC<ISongWrapper> = (props) => {
	const { data: track } = useGetTrackByIdQuery(props.id)
	if (!track) return null
	return <CatalogSongItem title={track.title} image={track.album.cover_medium} artist={track.artist.name}
	                        likeFunc={props.likeFunc}
	                        playFunc={props.playFunc} />
}

export default memo(SongWrapper)