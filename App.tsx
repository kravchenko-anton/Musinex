import { Silkscreen_400Regular, Silkscreen_700Bold, useFonts } from '@expo-google-fonts/silkscreen'
import { Text } from 'react-native'
import Layout from './app/ui/Layout/Layout'
import FullScreenLoader from './app/ui/Loader/FullScreenLoader'

export default function App() {
 let [fontsLoaded] = useFonts({
  Silkscreen_400Regular,
  Silkscreen_700Bold,
 });
 if (!fontsLoaded) {
  console.log('Fonts not loaded')
  return <FullScreenLoader />;
 }
 return (
    <Layout>
      <Text style={{
        fontFamily: 'Silkscreen_400Regular',
       fontSize: 20,
       letterSpacing: -3,
      }}>Open up App.tsx to start working on your app!</Text>
    </Layout>
  );
}


