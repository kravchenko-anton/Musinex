import { useTypedSelector } from '../../../hook/useTypedSelector'
import { ICatalogRenderTypes } from '../../../types/catalogTypes'

export const useHeart = (id: string | number, type: ICatalogRenderTypes) => {
	const selector = useTypedSelector(state => state.favorites)
	switch (type) {
		case 'songs':
			return selector.songs.includes(id)
		case 'albums':
			return selector.albums.includes(id)
		case 'authors':
			return selector.artists.includes(id)
		case 'playlists':
			return selector.playlists.includes(id)
		default:
			return false
	}
	
}