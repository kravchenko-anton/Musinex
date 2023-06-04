import { registerRootComponent } from 'expo'
import TrackPlayer from 'react-native-track-player'
import App from './App'
// Very important to import the default language
import './app/providers/languageProvider'

registerRootComponent(App)
TrackPlayer.registerPlaybackService(() => require('./service.js'))
