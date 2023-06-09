import { defaultModelFields, PictureModel } from '@/services/types/global'
import { ISearchResult } from '@/services/types/ISearchServices'

export interface IArtist extends defaultModelFields, PictureModel, Pick<ISearchResult, 'songs'> {
	name: string
	followers: number
}
