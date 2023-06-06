import { defaultModelFields, ISong } from '@/services/types/global'
import { IAlbum } from '@/services/types/IAlbumServices'
import { IArtist } from '@/services/types/IArtistServices'
import { IPlaylist } from '@/services/types/IPlaylistServices'

export interface IUser extends defaultModelFields {
	email: string
	name: string
	userPlaylists: IPlaylist[]
	favoritePlayLists: IPlaylist[]
	favoritesAlbums: IAlbum[]
	favoritesArtist: IArtist[]
	favoritesSongs: ISong[]
}
