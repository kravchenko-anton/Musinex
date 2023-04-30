export interface ISearchAlbum {
	data: Datum[]
	total: number
	next: string
}

export interface Datum {
	id: number
	title: string
	link: string
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	genre_id: number
	nb_tracks: number
	record_type: RecordTypeEnum
	tracklist: string
	explicit_lyrics: boolean
	artist: Artist
	type: RecordTypeEnum
}

export interface Artist {
	id: string
	name: Name
	link: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	tracklist: string
	type: ArtistType
}

export enum Name {
	Eminem = 'Eminem',
	JustinaValentine = 'Justina Valentine',
	PNk = 'P!nk'
}

export enum ArtistType {
	Artist = 'artist'
}

export enum RecordTypeEnum {
	Album = 'album',
	Single = 'single'
}
