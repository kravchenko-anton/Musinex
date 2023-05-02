import { FC, memo } from 'react'
import { useGetArtistByIdQuery } from '../../../redux/api/artist/artistApi'
import MusicCart from '../flatlistItem/musicCart'

interface IAuthorWrapper {
	id: number | string
	width?: number
	height?: number
}

const AuthorWrapper: FC<IAuthorWrapper> = (props) => {
	const { data: artist } = useGetArtistByIdQuery(props.id)
	if (!artist) return null
	return <MusicCart name={artist.name} image={{
		url: artist.picture_medium,
		height: props.height ? props.height : 180,
		width: props.width ? props.width : 180
	}}
	/>
}

export default memo(AuthorWrapper)