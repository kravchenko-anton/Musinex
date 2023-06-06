import { persistor, store } from '@/redux/store'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Toast from '@/ui/toast/Toast'
import { getHexCode } from '@/utils/getColor'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'nativewind'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './app/navigation/navigation'
import ThemeProvider from './app/providers/themeProvider'

export default function App() {
	const { colorScheme } = useColorScheme()
	LogBox.ignoreAllLogs()
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				refetchOnReconnect: false
			}
		}
	})
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<PersistGate persistor={persistor} loading={<FullScreenLoader />}>
					<SafeAreaProvider
						style={{
							backgroundColor:
								colorScheme === 'light'
									? getHexCode('primaryGray')
									: getHexCode('primaryBlack')
						}}
					>
						<Navigation />
						<ThemeProvider />
						<StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
						<Toast />
					</SafeAreaProvider>
				</PersistGate>
			</QueryClientProvider>
		</Provider>
	)
}
