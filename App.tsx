import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import Navigation from './app/navigation/navigation'
import { store } from './app/redux/store'
import Toast from './app/ui/Toast'

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<Navigation />
				<StatusBar style='dark' />
				<Toast />
			</SafeAreaProvider>
		</Provider>
	)
}
