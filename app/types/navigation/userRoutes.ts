import Auth from '@/pages/auth/auth'
import AlbumCatalog from '@/pages/catalog/pages/album/AlbumCatalog'
import ArtistCatalog from '@/pages/catalog/pages/artist/ArtistCatalog'
import FavoriteCatalog from '@/pages/catalog/pages/FavoriteCatalog/FavoriteCatalog'
import GenreCatalog from '@/pages/catalog/pages/genre/GenreCatalog'
import PlaylistCatalog from '@/pages/catalog/pages/playlist/PlaylistCatalog'
import Favorites from '@/pages/favorites/favorites'
import Home from '@/pages/home/home'
import Search from '@/pages/search/search'
import Settings from '@/pages/settings/settings'
import Song from '@/pages/song/song'
import { iRoutes } from './navigationTypes'

export const userRoutes: iRoutes[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Settings',
		component: Settings
	},
	{
		name: 'PlaylistCatalog',
		component: PlaylistCatalog
	},
	{
		name: 'AlbumCatalog',
		component: AlbumCatalog
	},
	{
		name: 'ArtistCatalog',
		component: ArtistCatalog
	},
	{
		name: 'FavoriteCatalog',
		component: FavoriteCatalog
	},
	{
		name: 'GenreCatalog',
		component: GenreCatalog
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Song',
		component: Song
	},

	{
		name: 'Search',
		component: Search
	},

	{
		name: 'Auth',
		component: Auth
	}
]
