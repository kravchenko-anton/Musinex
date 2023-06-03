import { IAlbum } from '@/services/types/album.services.types'
import { IArtist } from '@/services/types/artist.services.types'
import { ISong } from '@/services/types/global'
import { IPlaylist } from '@/services/types/playlist.services.types'

export interface ISearchResult {
[0]: ISong[]
[1]: IArtist[]
[2]: IPlaylist[]
[3]: IAlbum[]
}

