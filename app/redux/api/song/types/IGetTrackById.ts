export interface IGetTrackById {
	status: boolean
	type: string
	id: string
	name: string
	shareUrl: string
	durationMs: number
	durationText: string
	trackNumber: number
	playCount: number
	artists: Artist[]
	album: Album
}

export interface Album {
	type: string
	id: string
	shareUrl: string
	date: Date
	copyright: Copyright[]
	cover: Cover[]
}

export interface Copyright {
	text: string
	type: string
}

export interface Cover {
	width: number
	height: number
	url: string
}

export interface Artist {
	type: string
	id: string
	name: string
	shareUrl: string
	visuals: Visuals
}

export interface Visuals {
	avatar: Cover[]
}
