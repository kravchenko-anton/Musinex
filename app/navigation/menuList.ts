import { IconType } from '@/types/global'
import { TypeRootStackParamList } from '@/types/navigation/navigation.types'

interface MenuItemType {
	iconName: IconType
	path: keyof TypeRootStackParamList
}

export const menuItems: MenuItemType[] = [
	{
		iconName: 'home',
		path: 'Home'
	},
	{
		iconName: 'search',
		path: 'Search'
	},

	{
		iconName: 'albums',
		path: 'Favorites'
	}
]
