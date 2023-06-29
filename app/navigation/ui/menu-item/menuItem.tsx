import { MenuItemProps } from '@/navigation/ui/menu-item/menuItem.types'
import UIcon from '@/ui/icon/default-icon/icon'
import { FC } from 'react'
import { View } from 'react-native'
import { menuItems } from '../../menuList'

const MenuItem: FC<MenuItemProps> = ({ nav, item, currentRoute }) => {
	const isActive = currentRoute === item.path
	return (
		<View
			pointerEvents={'auto'}
			className='items-center pointer-events-auto justify-center p-1.5 rounded-lg'
		>
			<UIcon
				onPress={() => nav(item.path)}
				name={
					isActive
						? item.iconName
						: ((item.iconName +
								'-outline') as (typeof menuItems)[0]['iconName'])
				}
				size={30}
				color={isActive ? 'white' : 'silver'}
			/>
		</View>
	)
}

export default MenuItem
