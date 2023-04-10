export interface IHomeGenre {
	status: boolean
	genres: Genre[]
}

export interface Item {
	type: ItemType
	id: string
	name: string
	shareUrl: string
	description?: string
	trackCount: number
	owner?: Genre
	images?: Array<Cover[]>
	date?: Date
	artists?: Genre[]
	cover?: Cover[]
}

export interface Contents {
	totalCount: number
	items: Item[]
}

export interface Genre {
	type: string
	id: string
	name: string
	shareUrl: string
	contents?: Contents
}

export interface Cover {
	height: number | null
	url: string
	width: number | null
}

export enum ItemType {
	Album = 'album',
	Playlist = 'playlist'
}
