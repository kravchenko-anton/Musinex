import { LanguageProvider } from '@/providers/languageProvider'
import { persistor, store } from '@/redux/store'
import Toast from '@/ui/toast/Toast'
import { getHexCode } from '@/utils/getColor'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './app/navigation/navigation'
import ThemeProvider from './app/providers/themeProvider'
import FullScreenLoader from './app/ui/loader/fullScreenLoader'

export default function App() {
	const { colorScheme } = useColorScheme()
	LogBox.ignoreAllLogs()
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<FullScreenLoader />}>
				<SafeAreaProvider style={{
					backgroundColor: colorScheme === 'light' ? getHexCode('primaryGray') : getHexCode('primaryBlack')
				}}>
					<Navigation />
					<ThemeProvider />
					<LanguageProvider />
					<StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
					<Toast />
				</SafeAreaProvider>
			</PersistGate>
		</Provider>
	)
}
