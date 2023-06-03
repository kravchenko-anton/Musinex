import { IAlbum } from '@/services/types/album.services.types'
import { defaultModelFields, ISong } from '@/services/types/global'
import { IPlaylist } from '@/services/types/playlist.services.types'

export interface IGenre extends defaultModelFields{
	color: string
	icon: string
	name: string,
	songs: ISong[],
	albums: IAlbum[],
	playlists: IPlaylist[],
}

export interface IGenreList extends Omit<IGenre[], "albums" | 'playlists' | "songs"> {}