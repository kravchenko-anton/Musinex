import { DefaultModelFields, PictureModel } from '@/services/types/global'
import { SearchResultType } from '@/services/types/search.services.types'

export interface ArtistType
	extends DefaultModelFields,
		PictureModel,
		Pick<SearchResultType, 'songs'> {
	name: string
	followers: number
}
