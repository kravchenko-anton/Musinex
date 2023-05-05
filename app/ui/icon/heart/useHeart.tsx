import { useTypedSelector } from '../../../hook/useTypedSelector'
import { IHeartProps } from '../../../types/catalogTypes'

export const useHeart = ({ id, type }: IHeartProps) => {
	const selector = useTypedSelector(state => state.favorites)
	switch (type) {
		case 'songs':
			return selector.songs.some(item => item.id === id)
		case 'albums':
			return selector.albums.some(item => item.id === id)
		case 'authors':
			return selector.artists.some(item => item.id === id)
		case 'playlists':
			return selector.playlists.some(item => item.id === id)
		default:
			return false
	}
	
}