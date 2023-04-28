import { useColorScheme } from 'nativewind'
import { FC } from 'react'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTypedNavigation } from '../../hook/useTypedNavigation'
import MenuItem from '../menuItem'
import { menuItems } from '../menuList'

const BottomMenu: FC<{ currentRoute: string | undefined }> =
	({
		 currentRoute
	 }) => {
		const { navigate } = useTypedNavigation()
		const { bottom } = useSafeAreaInsets()
		const { colorScheme } = useColorScheme()
		return (
			<View
				style={{ paddingBottom: bottom + 5, backgroundColor: colorScheme === 'light' ? '#FFF' : '#151515' }}
				className='flex-row h-[65px] pt-0 items-center pl-[20%] pr-[20%] w-full  justify-between'
			>
				{menuItems.map(item => (
					<MenuItem
						item={item}
						key={item.path}
						nav={navigate}
						currentRoute={currentRoute}
					/>
				))}
			</View>
		)
	}

export default BottomMenu
