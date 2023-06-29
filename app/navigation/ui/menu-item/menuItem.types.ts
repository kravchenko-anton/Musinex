import { menuItems } from '@/navigation/menuList'
import { TypeRootStackParamList } from '@/types/navigation/navigation.types'

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void
export interface MenuItemProps {
	item: (typeof menuItems)[0]
	nav: TypeNavigate
	currentRoute?: string
}