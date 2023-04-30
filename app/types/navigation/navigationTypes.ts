import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Settings: undefined
	catalog: {
		headerImage: string
		headerText: string
		type: 'songs' | 'albums' | 'playlists' | 'authors'
		data: {
			url?: string
			title: string
			image: string
			artist: string
			id: number
		}[]
		headerDescription?: string
	}
	AuthorWrapperCatalog: {
		authorId: number | string
	}
	AlbumWrapperCatalog: {
		albumId: number | string
	}
	PlayListWrapperCatalog: {
		playListId: number | string
	}
	favorites: undefined
	Song: {
		id: number
	}
	Author: undefined
	playList: undefined
	genreCatalog: {
		genreId: number
		genreName: string
	}
	playLists: undefined
}

export interface iRoutes {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
