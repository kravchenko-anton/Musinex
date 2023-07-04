import { useColorTheme } from '@/hook/useColorTheme'
import ThemeProvider from '@/providers/themeProvider'
import { persistor, store } from '@/redux/store'
import FullScreenLoader from '@/ui/loader/fullScreenLoader'
import Toast from '@/ui/toast/toast'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { StatusBar } from 'expo-status-bar'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Navigation from './app/navigation/navigation'

export default function App() {
	const { colorScheme, silverToMidnight } = useColorTheme()
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				cacheTime: 1000 * 60 * 60 * 24,
				networkMode: 'offlineFirst'
			}
		}
	})

	const asyncStoragePersister = createAsyncStoragePersister({
		storage: AsyncStorage
	})

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={<FullScreenLoader />}>
				<PersistQueryClientProvider
					client={queryClient}
					persistOptions={{ persister: asyncStoragePersister }}
				>
					<SafeAreaProvider
						initialMetrics={initialWindowMetrics}
						style={{
							backgroundColor: silverToMidnight
						}}
					>
						<Navigation />
						<Toast />
						<ThemeProvider />
						<StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
					</SafeAreaProvider>
				</PersistQueryClientProvider>
			</PersistGate>
		</Provider>
	)
}
