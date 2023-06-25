import { IAlbum } from '@/services/types/album.services.types'
import { IArtist } from '@/services/types/artist.services.types'
import { ISong } from '@/services/types/global'
import { IPlaylist } from '@/services/types/playlist.services.types'

export interface ISearchResult {
	songs: ISong[]
	artists: IArtist[]
	playlists: IPlaylist[]
	albums: IAlbum[]
}
