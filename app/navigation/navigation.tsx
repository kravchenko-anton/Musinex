import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import { TypeRootStackParamList } from '../types/navigation/navigationTypes'
import { userRoutes } from '../types/navigation/userRoutes'
import BottomMenu from '../ui/bottomMenu/BottomMenu'

const Navigation = () => {
	const Stack = createNativeStackNavigator<TypeRootStackParamList>()
	const navRef = useNavigationContainerRef()
	const [currentRoute, setCurrentRoute] = useState<string | undefined>(
		undefined
	)
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
					animation: 'slide_from_bottom',
					headerShown: false,
					contentStyle: { backgroundColor: '#121212' }
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
