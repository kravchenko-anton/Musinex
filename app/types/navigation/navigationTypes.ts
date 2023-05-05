import { ComponentType } from 'react'
import { ICatalogList, ICatalogRenderTypes } from '../catalogTypes'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Settings: undefined
	catalog: {
		headerImage: string
		headerText: string
		data: ICatalogList[]
		headerDescription?: string
		id: number | string
		type: ICatalogRenderTypes
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
		id: number | string
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
