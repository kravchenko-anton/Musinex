import { useColorTheme } from '@/hook/useColorTheme'
import { useTypedNavigation } from '@/hook/useTypedNavigation'
import MenuItem from '@/navigation/ui/menu-item/menuItem'
import { LinearGradient } from 'expo-linear-gradient'
import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { menuItems } from '../../menuList'

const BottomMenu: FC<{ currentRoute: string | undefined }> = ({
	currentRoute
}) => {
	const { navigate } = useTypedNavigation()
	const { bottom } = useSafeAreaInsets()
	const { silverToMidnight } = useColorTheme()
	return (
		<>
			<LinearGradient
				pointerEvents={'none'}
				start={[0, 0.01]}
				end={[0, 0.85]}
				className='absolute bottom-0 left-0 right-0 h-[150px] w-full flex-1'
				colors={['transparent', silverToMidnight]}
				style={{
					paddingBottom: bottom
				}}
			/>
			<View className='absolute bottom-1 w-full flex-row items-center justify-around'>
				{menuItems.map(item => (
					<MenuItem
						item={item}
						key={item.path}
						nav={navigate}
						currentRoute={currentRoute}
					/>
				))}
			</View>
		</>
	)
}

export default BottomMenu
