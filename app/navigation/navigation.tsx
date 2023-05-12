import { TypeRootStackParamList } from '@/types/navigation/navigationTypes'
import { userRoutes } from '@/types/navigation/userRoutes'
import SongPlayer from '@/ui/songPlayer/songPlayer'
import { getHexCode } from '@/utils/getColor'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useColorScheme } from 'nativewind'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import BottomMenu from './bottomMenu/bottomMenu'

const Navigation = () => {
	const Stack = createNativeStackNavigator<TypeRootStackParamList>()
	const navRef = useNavigationContainerRef()
	const { colorScheme } = useColorScheme()
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)
	useEffect(() => {
		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)
		
		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])
	
	return (
		<NavigationContainer ref={navRef}>
			<Stack.Navigator
				initialRouteName={'Home'}
				screenOptions={{
					animation: 'fade',
					headerShown: false,
					contentStyle: {
						backgroundColor: colorScheme === 'light' ? getHexCode('primaryGray') : getHexCode('primaryBlack'),
						flex: 1
					}
				}}
			>
				{userRoutes.map(route => (
					<Stack.Screen
						name={route.name}
						key={route.name}
						component={route.component}
					/>
				))}
			</Stack.Navigator>
			{currentRoute !== 'Song' && (
				<View>
					<BottomMenu currentRoute={currentRoute} />
					<SongPlayer />
				</View>
			)}
		</NavigationContainer>
	)
}

export default Navigation
