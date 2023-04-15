import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Settings: undefined
	catalog: {
		headerImage: string
		headerText: string
		data: {
			title: string
			image: string
			artist: string
			id: number
		}[]
	
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
