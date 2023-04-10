export interface ISearchPlayListById {
	status: boolean
	type: string
	id: string
	name: string
	shareUrl: string
	description: string
	trackCount: number
	followerCount: number
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
