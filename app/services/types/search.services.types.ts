import { ArtistType } from '@/services/types/artist.services.types'
import { SongType } from '@/services/types/global'
import { AlbumTypes } from '@/services/types/IAlbum'
import { PlaylistType } from '@/services/types/playlist.services.types'

export interface SearchResultType {
	songs: SongType[]
	artists: ArtistType[]
	playlists: PlaylistType[]
	albums: AlbumTypes[]
}
