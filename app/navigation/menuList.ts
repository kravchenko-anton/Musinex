import { Ionicons } from '@expo/vector-icons'
import { TypeRootStackParamList } from '../types/navigation/navigationTypes'

export interface IMenuItem {
	iconName: keyof typeof Ionicons.glyphMap
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
