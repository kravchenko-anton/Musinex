import { IAlbum } from '@/services/types/album.services.types'
import { IArtist } from '@/services/types/artist.services.types'
import { DefaultModelFields, ISong } from '@/services/types/global'
import { IPlaylist } from '@/services/types/playlist.services.types'

export interface IUser extends DefaultModelFields {
	email: string
	name: string
	userPlaylists: IPlaylist[]
	favoritePlayLists: IPlaylist[]
	favoritesAlbum: IAlbum[]
	favoritesArtist: IArtist[]
	favoritesSong: ISong[]
}
