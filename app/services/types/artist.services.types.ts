import {DefaultModelFields, PictureModel, SongType} from '@/services/types/global'
import { SearchResultType } from '@/services/types/search.services.types'

export interface ArtistType
	extends DefaultModelFields,
		PictureModel{
	name: string
	followers: number
	songs: SongType[]
}
