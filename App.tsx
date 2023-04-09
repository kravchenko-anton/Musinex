import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Navigation from './app/navigation/navigation'
import Toast from './app/ui/Toast'

export default function App() {

 return (
     <SafeAreaProvider>
      <Navigation />
      <StatusBar style='dark' />
      <Toast />
     </SafeAreaProvider>
  );
}


