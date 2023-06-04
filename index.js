import { registerRootComponent } from 'expo'
import TrackPlayer from 'react-native-track-player'
import App from './App'
import i18n	from './app/providers/languageProvider'
registerRootComponent(App)
TrackPlayer.registerPlaybackService(() => require('./service.js'))
