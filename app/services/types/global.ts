import { IArtist } from '@/services/types/artist.services.types'

export interface DefaultModelFields {
	id: number
	createdAt: string
	updatedAt: string
}

export interface CoverModel {
	coverBig: string
	coverMedium: string
	coverSmall: string
}

export interface PictureModel {
	pictureBig: string
	pictureMedium: string
	pictureSmall: string
}

export interface ISong extends DefaultModelFields, CoverModel {
	title: string
	duration: number
	releaseDate: string
	mp3Path: string
	artists: IArtist[]
}
