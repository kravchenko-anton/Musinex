import { TypeRootStackParamList } from '@/types/navigation/navigationTypes'
import { getHexCode } from '@/utils/getColor'
import { Ionicons } from '@expo/vector-icons/'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { Pressable, View } from 'react-native'
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
		<Pressable
			pointerEvents={'auto'}
			delayHoverIn={0}
			onPress={() => nav(item.path)}
		>
			<View className='items-center pointer-events-auto justify-center p-1.5 rounded-lg'>
				<Ionicons
					name={item.iconName}
					size={30}
					color={isActive ? colorScheme === 'dark' ? getHexCode('white') : getHexCode('primary') : colorScheme === 'dark' ? getHexCode('lightGray') : getHexCode('veryLightBlack')}
				/>
			</View>
		</Pressable>
	)
}

export default MenuItem
