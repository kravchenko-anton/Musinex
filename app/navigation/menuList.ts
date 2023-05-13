import { IIconName } from '@/types/IconTypes'
import { TypeRootStackParamList } from '@/types/navigation/navigationTypes'

export interface IMenuItem {
	iconName: IIconName
	path: keyof TypeRootStackParamList
}

export const menuItems: IMenuItem[] = [
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
		path: 'favorites'
	}
]
