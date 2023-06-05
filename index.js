// Very important to import the default language
import '@/utils/translate/i18n'
import { registerRootComponent } from 'expo'
import TrackPlayer from 'react-native-track-player'
import App from './App'

registerRootComponent(App)
TrackPlayer.registerPlaybackService(() => require('./service.js'))
