import { useColorTheme } from '@/hook/useColorTheme'
import { MenuItemProps } from '@/navigation/ui/menu-item/menuItem.types'
import Icon from '@/ui/icon/default-icon/icon'
import { FC } from 'react'
import { View } from 'react-native'
import { menuItems } from '../../menuList'

const MenuItem: FC<MenuItemProps> = ({ nav, item, currentRoute }) => {
	const isActive = currentRoute === item.path
	const { darkToWhite, midnightToSilver } = useColorTheme()
	return (
		<View
			pointerEvents='auto'
			className='pointer-events-auto items-center justify-center rounded-lg p-1.5'>
			<Icon
				onPress={() => nav(item.path)}
				name={
					isActive
						? item.iconName
						: ((item.iconName +
								'-outline') as (typeof menuItems)[0]['iconName'])
				}
				size={30}
				color={isActive ? darkToWhite : midnightToSilver}
			/>
		</View>
	)
}

export default MenuItem
