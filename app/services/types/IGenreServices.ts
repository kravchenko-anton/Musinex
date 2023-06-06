import { defaultModelFields, ISong } from '@/services/types/global'
import { IAlbum } from '@/services/types/IAlbumServices'
import { IPlaylist } from '@/services/types/IPlaylistServices'

export interface IGenre extends defaultModelFields {
	color: string
	icon: string
	name: string
	songs: ISong[]
	albums: IAlbum[]
	playlists: IPlaylist[]
}

export interface IGenreList
	extends Omit<IGenre[], 'albums' | 'playlists' | 'songs'> {}
