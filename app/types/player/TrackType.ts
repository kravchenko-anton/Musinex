import { CoverModel } from '@/services/types/global'

export interface TrackType extends Pick<CoverModel, 'coverBig' | 'coverSmall'>, Partial<any>{
			id?: number
			url?: string
			title?: string
			artist?: string
			color?: string
}
