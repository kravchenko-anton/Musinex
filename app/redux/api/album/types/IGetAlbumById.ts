export interface IGetAlbumByID {
	id: string
	title: Title
	upc: string
	link: string
	share: string
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	genre_id: number
	genres: Genres
	label: string
	nb_tracks: number
	duration: number
	fans: number
	release_date: Date
	record_type: RecordTypeEnum
	available: boolean
	tracklist: string
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	contributors: Contributor[]
	artist: IGetAlbumByIDArtist
	type: RecordTypeEnum
	tracks: Tracks
}

export interface IGetAlbumByIDArtist {
	id: string
	name: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	tracklist: string
	type: ArtistType
}

export enum ArtistType {
	Artist = 'artist'
}

export interface Contributor {
	id: number
	name: string
	link: string
	share: string
	picture: string
	picture_small: string
	picture_medium: string
	picture_big: string
	picture_xl: string
	radio: boolean
	tracklist: string
	type: ArtistType
	role: string
}

export interface Genres {
	data: GenresDatum[]
}

export interface GenresDatum {
	id: number
	name: string
	picture: string
	type: string
}

export enum RecordTypeEnum {
	Album = 'album'
}

export enum Title {
	Discovery = 'Discovery'
}

export interface Tracks {
	data: TracksDatum[]
}

export interface TracksDatum {
	id: string
	readable: boolean
	title: string
	title_short: string
	title_version: string
	link: string
	duration: string
	rank: string
	explicit_lyrics: boolean
	explicit_content_lyrics: number
	explicit_content_cover: number
	preview: string
	md5_image: string
	artist: DatumArtist
	album: Album
	type: DatumType
}

export interface Album {
	id: string
	title: Title
	cover: string
	cover_small: string
	cover_medium: string
	cover_big: string
	cover_xl: string
	md5_image: string
	tracklist: string
	type: RecordTypeEnum
}

export interface DatumArtist {
	id: string
	name: string
	tracklist: string
	type: ArtistType
}

export enum DatumType {
	Track = 'track'
}
