import { useAuth } from '@/hook/useAuth'
import BottomMenu from '@/navigation/bottom-menu/bottomMenu'
import Auth from '@/pages/auth/auth'
import { useCheckAuth } from '@/providers/auth/useCheckAuth'
import { TypeRootStackParamList } from '@/types/navigation/navigationTypes'
import { userRoutes } from '@/types/navigation/userRoutes'
import SongPlayer from '@/ui/song-player/songPlayer'
import { getHexCode } from '@/utils/getColor'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useColorScheme } from 'nativewind'
import { useEffect, useState } from 'react'

const Navigation = () => {
	const Stack = createNativeStackNavigator<TypeRootStackParamList>()
	const navRef = useNavigationContainerRef()
	const { colorScheme } = useColorScheme()
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)
	const { user } = useAuth()
	useEffect(() => {
		const listener = navRef.addListener('state', () =>
			setCurrentRoute(navRef.getCurrentRoute()?.name)
		)
		return () => {
			navRef.removeListener('state', listener)
		}
	}, [])
	useCheckAuth(currentRoute)

	return (
		<NavigationContainer ref={navRef}>
			<Stack.Navigator
				initialRouteName={'Home'}
				screenOptions={{
					animation: 'fade',
					headerShown: false,
					contentStyle: {
						backgroundColor:
							colorScheme === 'light'
								? getHexCode('lightGray')
								: getHexCode('primaryBlack'),
						flex: 1
					}
				}}
			>
				{user ? (
					userRoutes.map(route => (
						<Stack.Screen
							name={route.name}
							key={route.name}
							component={route.component}
						/>
					))
				) : (
					<Stack.Screen name={'Auth'} component={Auth} />
				)}
			</Stack.Navigator>
			{currentRoute === 'Song' ||
				(user && (
					<>
						<BottomMenu currentRoute={currentRoute} />
						<SongPlayer />
					</>
				))}
		</NavigationContainer>
	)
}

export default Navigation
