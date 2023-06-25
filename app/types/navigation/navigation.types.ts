import { CatalogProps } from '@/types/global'
import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Home: undefined
	Search: undefined
	Auth: undefined
	Settings: undefined
	PlaylistCatalog: CatalogProps
	AlbumCatalog: CatalogProps
	ArtistCatalog: CatalogProps
	GenreCatalog: CatalogProps
	FavoriteCatalog: undefined
	Favorites: undefined
	Song: undefined
}

export interface iRoutes {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
