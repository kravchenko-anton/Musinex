import { TypeRootStackParamList } from '@/navigation/types/navigation.types'
import { IconType } from '@/types/global'

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
