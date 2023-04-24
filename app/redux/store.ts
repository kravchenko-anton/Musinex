import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import { favoriteReducer } from './favorite/favoriteSlice'
import { playerReducer } from './player/playerSlice'

const reducers = combineReducers({
	favorites: favoriteReducer,
	player: playerReducer,
	[api.reducerPath]: api.reducer
})
export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})
