import Author from '../../pages/author/author'
import Catalog from '../../pages/catalog/catalog'
import Favorites from '../../pages/favorites/favorites'
import Home from '../../pages/home/home'
import playList from '../../pages/playLists/playList'
import playLists from '../../pages/playLists/playLists'
import Search from '../../pages/search/search'
import Settings from '../../pages/settings/settings'
import Song from '../../pages/song/song'
import { iRoutes } from './navigationTypes'

export const userRoutes: iRoutes[] = [
	{
		name: 'Home',
		component: Home,
	},
	{
		name: 'Settings',
		component: Settings
	},
	{
		name: 'catalog',
		component: Catalog
	},
	{
		name: 'favorites',
		component: Favorites
	},
	{
		name: 'Song',
		component: Song
	},
	{
		name: 'Author',
		component: Author
	},
	
	{
		name: 'playList',
		component: playList
	},
	
	{
		name: 'playLists',
		component: playLists
	},
	{
		name: 'Search',
		component: Search
	}
]
