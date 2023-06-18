import { useTypedNavigation } from '@/hook/useTypedNavigation'
import { getHexCode } from '@/utils/getColor'
import { LinearGradient } from 'expo-linear-gradient'
import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MenuItem from '../menuItem'
import { menuItems } from '../menuList'

const BottomMenu: FC<{ currentRoute: string | undefined }> = ({
	currentRoute
}) => {
	const { navigate } = useTypedNavigation()
	const { bottom } = useSafeAreaInsets()
	const { colorScheme } = useColorScheme()
	return (
		<>
			<LinearGradient
				pointerEvents={'none'}
				start={[0, 0.01]}
				end={[0, 0.85]}
				className='w-full absolute bottom-0 right-0 left-0 flex-1 h-[150px]'
				colors={[
					'transparent',
					colorScheme === 'light'
						? getHexCode('primaryGray')
						: getHexCode('primaryBlack')
				]}
				style={{
					paddingBottom: bottom
				}}
			/>
			<View className='flex-row justify-around w-full bottom-1 absolute items-center'>
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
