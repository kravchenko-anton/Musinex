import { ComponentType } from 'react'
import { ICatalogList, ICatalogRenderTypes } from '../catalogTypes'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Auth: undefined
	Settings: undefined
	catalog: {
		headerImage: string
		headerText: string
		data: ICatalogList[]
		headerDescription?: string
		id: number
		type: ICatalogRenderTypes
	}
	ArtistWrapperCatalog: {
		artistId: number
	}
	AlbumWrapperCatalog: {
		albumId: number
	}
	PlayListWrapperCatalog: {
		playListId: number
	}
	favorites: undefined
	Song: undefined
}

export interface iRoutes {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
