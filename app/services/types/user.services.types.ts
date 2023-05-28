import { IAlbum } from '@/services/types/album.services.types'
import { IArtist } from '@/services/types/artist.services.types'
import { defaultModelFields, ISong } from '@/services/types/global'
import { IPlaylist } from '@/services/types/playlist.services.types'

export interface IUser extends defaultModelFields{
	email: string,
	name: string,
	userPlaylists: IPlaylist[],
	favoritePlayLists: IPlaylist[],
	favoritesAlbums: IAlbum[],
	favoritesArtist: IArtist[],
	favoritesSongs: ISong[],
}

