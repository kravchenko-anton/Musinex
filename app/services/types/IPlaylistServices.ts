import { CoverModel, defaultModelFields } from '@/services/types/global'

export interface IPlaylist extends defaultModelFields, CoverModel {
	title: string
	fans: number
	releaseDate: string
}
