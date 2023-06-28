import { CoverModel } from '@/services/types/global'

export interface ITrack extends Pick<CoverModel, 'coverBig' | 'coverSmall'>, Partial<any>{
			id?: number
			url?: string
			title?: string
			artist?: string
			color?: string
}
