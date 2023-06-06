import { ISong } from '@/services/types/global'
import { IAlbum } from '@/services/types/IAlbumServices'
import { IArtist } from '@/services/types/IArtistServices'
import { IPlaylist } from '@/services/types/IPlaylistServices'

export interface ISearchResult {
	songs: ISong[]
	artists: IArtist[]
	playlists: IPlaylist[]
	albums: IAlbum[]
}
