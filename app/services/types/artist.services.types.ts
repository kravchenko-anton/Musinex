import { defaultModelFields, PictureModel } from '@/services/types/global'
import { ISearchResult } from '@/services/types/search.services.types'

export interface IArtist
	extends defaultModelFields,
		PictureModel,
		Pick<ISearchResult, 'songs'> {
	name: string
	followers: number
}
