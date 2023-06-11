import { TypeRootStackParamList } from '@/types/navigation/navigationTypes'
import UIcon from '@/ui/icon/defaultIcon/Icon'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'
import { menuItems } from './menuList'

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void

interface IMenuItemProps {
	item: (typeof menuItems)[0]
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ nav, item, currentRoute }) => {
	const isActive = currentRoute === item.path
	const { colorScheme } = useColorScheme()
	return (
		<View
			pointerEvents={'auto'}
			className='items-center pointer-events-auto justify-center p-1.5 rounded-lg'
		>
			<UIcon
				onPress={() => nav(item.path)}
				name={item.iconName}
				size={30}
				color={
					isActive
						? colorScheme === 'dark'
							? 'white'
							: 'primary'
						: colorScheme === 'dark'
						? 'lightGray'
						: 'veryLightBlack'
				}
			/>
		</View>
	)
}

export default MenuItem
