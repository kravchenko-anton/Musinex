import { authReducer } from '@/redux/auth/authSlice'
import { combineReducers } from '@reduxjs/toolkit'
import { playerReducer } from './player/playerSlice'
import { ThemeReducer } from './settings/themeSlice'

export const reducers = combineReducers({
	theme: ThemeReducer,
	player: playerReducer,
	auth: authReducer
})
