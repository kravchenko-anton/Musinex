import { authReducer } from '@/redux/auth/authSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { favoriteReducer } from './favorite/favoriteSlice'
import { playerReducer } from './player/playerSlice'
import { LanguageReducer } from './settings/languageSlice'
import { ThemeReducer } from './settings/themeSlice'

export const reducers = combineReducers({
	favorites: favoriteReducer,
	theme: ThemeReducer,
	language: LanguageReducer,
	player: playerReducer,
	auth: authReducer,
})
