import { CoverModel, DefaultModelFields } from '@/services/types/global'
import { ISearchResult } from '@/services/types/search.services.types'

export interface IPlaylist
	extends DefaultModelFields,
		CoverModel,
		Pick<ISearchResult, 'songs'> {
	title: string
	fans: number
	releaseDate: string
}