import { FC, memo } from 'react'
import { useGetTrackByIdQuery } from '../../../redux/api/song/song'
import CatalogSongItem from '../catalogItem/catalogSongItem'

interface ISongWrapper {
	id: number | string
	playFunc: () => void
}

const SongWrapper: FC<ISongWrapper> = (props) => {
	const { data: track } = useGetTrackByIdQuery(props.id)
	if (!track) return null
	return <CatalogSongItem id={track.id} title={track.title} image={track.album.cover_medium} artist={track.artist.name}
	                        
	                        playFunc={props.playFunc} />
}

export default memo(SongWrapper)