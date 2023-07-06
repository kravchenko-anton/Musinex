import { CoverModel } from '@/services/types/global'

export interface PlayerTypes
	extends Pick<CoverModel, 'coverBig' | 'coverSmall'>,
		Partial<any> {
	id?: number
	url?: string
	title?: string
	artist?: string
	color?: string
}
