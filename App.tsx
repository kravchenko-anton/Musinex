import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './app/navigation/navigation'
import { store } from './app/redux/store'
import FullScreenLoader from './app/ui/loader/fullScreenLoader'
import SongPlayer from './app/ui/songPlayer/songPlayer'
import Toast from './app/ui/Toast'

export default function App() {
	const { colorScheme } = useColorScheme()
	const persistor = persistStore(store)
	
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<FullScreenLoader />}>
				<SafeAreaProvider>
					<Navigation />
					<StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
					<Toast />
					<SongPlayer />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	)
}
