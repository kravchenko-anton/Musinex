export interface ISearchArtistById {
	status: boolean
	type: LatestType
	id: string
	name: string
	shareUrl: string
	verified: boolean
	biography: string
	stats: Stats
	visuals: PokedexVisuals
	playlists: Playlists
	discography: Discography
	relatedContent: RelatedContent
	goods: Goods
}

export interface Discography {
	latest: Latest
	singles: Albums
	albums: Albums
	compilations: Albums
	topTracks: TopTrack[]
}

export interface Albums {
	totalCount: number
	items: Latest[]
}

export interface Latest {
	type: LatestType
	id: string
	name: string
	shareUrl: string
	label: string
	copyright: Copyright[]
	cover: Avatar[]
	trackCount: number
}

export interface Copyright {
	type: CopyrightType
	text: string
}

export enum CopyrightType {
	C = 'C',
	P = 'P'
}

export interface Avatar {
	url: string
	width: number | null
	height: number | null
}

export enum LatestType {
	Album = 'album',
	Artist = 'artist'
}

export interface TopTrack {
	type: TopTrackType
	id: string
	name: string
	shareUrl: string
	durationMs: number
	durationText: string
	discNumber: number
	playCount: number
	artists: Album[]
	album: Album
}

export interface Album {
	type: LatestType
	id: string
	shareUrl: string
	cover?: Cover[]
	name?: string
	visuals?: AlbumVisuals
}

export interface Cover {
	url: string
}

export interface AlbumVisuals {
	avatar: Avatar[]
}

export enum TopTrackType {
	Track = 'track'
}

export interface Goods {
	concerts: Concerts
	merch: Merch[]
}

export interface Concerts {
	totalCount: number
	items: ConcertsItem[]
}

export interface ConcertsItem {
	type: string
	id: string
	title: string
	shareUrl: string
	date: string
	festival: boolean
	venue: string
	location: string
	lat: number
	lon: number
	artists: Album[]
}

export interface Merch {
	name: string
	description: string
	url: string
	imageUrl: string
}

export interface Playlists {
	totalCount: number
	items: PlaylistsItem[]
}

export interface PlaylistsItem {
	type: PurpleType
	id: string
	name: string
	shareUrl: string
	description: string
	owner: Owner
	images: Array<Avatar[]>
}

export interface Owner {
	type: OwnerType
	name: string
}

export enum OwnerType {
	User = 'user'
}

export enum PurpleType {
	Playlist = 'playlist'
}

export interface RelatedContent {
	appearsOn: AppearsOn
	featuring: Playlists
	discoveredOn: Playlists
	relatedArtists: RelatedArtists
}

export interface AppearsOn {
	totalCount: number
	items: AppearsOnItem[]
}

export interface AppearsOnItem {
	type: LatestType
	id: string
	name: string
	shareUrl: string
	artists: Album[]
	cover: Avatar[]
}

export interface RelatedArtists {
	totalCount: number
	items: Album[]
}

export interface Stats {
	followers: number
	monthlyListeners: number
	worldRank: number
}

export interface PokedexVisuals {
	avatar: Avatar[]
	header: Avatar[]
	gallery: Array<Avatar[]>
}
