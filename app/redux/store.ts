import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import { favoriteReducer } from './favorite/favoriteSlice'
import { playerReducer } from './player/playerSlice'

const reducers = combineReducers({
	[api.reducerPath]: api.reducer,
	favorites: favoriteReducer,
	player: playerReducer
})
export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})
export type TypeRootState = ReturnType<typeof reducers>