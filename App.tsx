import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './app/navigation/navigation'
import { LanguageProvider } from './app/providers/languageProvider'
import ThemeProvider from './app/providers/themeProvider'
import { persistor, store } from './app/redux/store'
import FullScreenLoader from './app/ui/loader/fullScreenLoader'
import SongPlayer from './app/ui/songPlayer/songPlayer'
import Toast from './app/ui/Toast'

export default function App() {
	const { colorScheme } = useColorScheme()
	LogBox.ignoreAllLogs()
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<FullScreenLoader />}>
				<SafeAreaProvider>
					<Navigation />
					<ThemeProvider />
					<LanguageProvider />
					<StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
					<Toast />
					<SongPlayer />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	)
}
