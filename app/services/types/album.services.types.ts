import { CoverModel, defaultModelFields } from '@/services/types/global'

export interface IAlbum extends defaultModelFields, CoverModel {
	"title": string,
	"fans": number,
	"releaseDate": string,
}