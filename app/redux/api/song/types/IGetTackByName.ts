export interface IGetTackByName {
	status: boolean
	type: string
	id: string
	name: string
	shareUrl: string
	durationMs: number
	durationText: string
	artists: Album[]
	album: Album
}

export interface Album {
	type: string
	id: string
	name: string
	shareUrl: string
	cover?: Cover[]
}

export interface Cover {
	url: string
	width: number
	height: number
}
