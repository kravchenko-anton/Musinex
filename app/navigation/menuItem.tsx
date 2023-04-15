import { Ionicons } from '@expo/vector-icons/'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
import { TypeRootStackParamList } from '../types/navigation/navigationTypes'
import { menuItems } from './menuList'

export type TypeNavigate = (screenName: keyof TypeRootStackParamList) => void

interface IMenuItemProps {
	// @ts-ignore
	item: menuItems
	nav: TypeNavigate
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ nav, item, currentRoute }) => {
	const isActive = currentRoute === item.path
	return (
		<Pressable delayHoverIn={0} onPress={() => nav(item.path)}>
			<View
				style={{ backgroundColor: isActive ? '#000' : '#151515' }}
				className='items-center justify-center p-1.5 rounded-lg'
			>
				<Ionicons
					name={item.iconName}
					size={30}
					color={isActive ? 'white' : '#D9D7D5'}
				/>
			</View>
		</Pressable>
	)
}

export default MenuItem
