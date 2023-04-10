export interface ISearchArtistbyName {
	status: boolean
	type: string
	id: string
	name: string
	shareUrl: string
	verified: boolean
	visuals: Visuals
}

export interface Visuals {
	avatar: Avatar[]
}

export interface Avatar {
	url: string
	width: number
	height: number
}
