import { CoverModel, defaultModelFields } from '@/services/types/global'
import { ISearchResult } from '@/services/types/ISearchServices'

export interface IPlaylist
	extends defaultModelFields,
		CoverModel,
		Pick<ISearchResult, 'songs'> {
	title: string
	fans: number
	releaseDate: string
}
