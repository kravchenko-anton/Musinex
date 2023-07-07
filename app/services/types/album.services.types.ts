import { CoverModel, DefaultModelFields } from '@/services/types/global'
import { SearchResultType } from '@/services/types/search.services.types'

export interface AlbumTypes
	extends DefaultModelFields,
		CoverModel,
		Pick<SearchResultType, 'songs'> {
	title: string
	fans: number
	releaseDate: string
}
