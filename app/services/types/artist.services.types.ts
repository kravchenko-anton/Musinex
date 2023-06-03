import { defaultModelFields, PictureModel } from '@/services/types/global'

export interface IArtist extends defaultModelFields, PictureModel{
	name: string,
	followers: number,
}