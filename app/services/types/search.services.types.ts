import { AlbumTypes } from '@/services/types/album.services.types'
import { ArtistType } from '@/services/types/artist.services.types'
import { SongType } from '@/services/types/global'
import { PlaylistType } from '@/services/types/playlist.services.types'


export interface CatalogResultType {
	mixes: {
		mix1: SongType[]
		mix2: SongType[]
		mix3: SongType[]
	}
	lastReleases: SongType[]
	popularArtists: ArtistType[]
	popularAlbums: AlbumTypes[]
	popularPlaylists: PlaylistType[]
}


export interface SearchResultType {
	bestResults: {
		artists: ArtistType[],
		songs: SongType[],
		albums: AlbumTypes[],
		playlists: PlaylistType[]
	},
	songs: SongType[],
	albums: AlbumTypes[],
	playlists: PlaylistType[],
	artists: ArtistType[]
}