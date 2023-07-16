import {CoverModel, DefaultModelFields, SongType} from '@/services/types/global'
import { SearchResultType } from '@/services/types/search.services.types'

export interface PlaylistType
	extends DefaultModelFields,
		CoverModel{
	title: string
	fans: number
	releaseDate: string
	songs: SongType[]
}
