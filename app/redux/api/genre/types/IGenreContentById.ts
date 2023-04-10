export interface IGenreContentById {
	status: boolean
	type: string
	id: string
	name: string
	shareUrl: string
	contents: Contents
}

export interface Contents {
	totalCount: number
	items: Item[]
}

export interface Item {
	type: string
	id: string
	name: string
	shareUrl: string
	description: string
	trackCount: number
	owner: Owner
	images: Array<Image[]>
}

export interface Image {
	height: null
	url: string
	width: null
}

export interface Owner {
	type: string
	id: string
	name: string
	shareUrl: string
}
