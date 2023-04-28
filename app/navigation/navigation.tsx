import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useColorScheme } from 'nativewind'
import { useEffect, useState } from 'react'
import { TypeRootStackParamList } from '../types/navigation/navigationTypes'
import { userRoutes } from '../types/navigation/userRoutes'
import BottomMenu from './bottomMenu/BottomMenu'

const Navigation = () => {
	const Stack = createNativeStackNavigator<TypeRootStackParamList>()
	const navRef = useNavigationContainerRef()
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)
	const { colorScheme } = useColorScheme()
	useEffect(() => {
		setCurrentRoute(navRef.getCurrentRoute()?.name)
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
					animation: 'slide_from_right',
					headerShown: false,
					contentStyle: { backgroundColor: colorScheme === 'light' ? '#e7e7e7' : '#101010' }
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
			{currentRoute !== 'ReadPage' ? (
				<BottomMenu currentRoute={currentRoute} />
			) : null}
		</NavigationContainer>
	)
}

export default Navigation
