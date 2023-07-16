import {CoverModel, DefaultModelFields, SongType} from '@/services/types/global'

export interface AlbumTypes
	extends DefaultModelFields,
		CoverModel{
	title: string
	fans: number
	releaseDate: string
	songs: SongType[]
}
