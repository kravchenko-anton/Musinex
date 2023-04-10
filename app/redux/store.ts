import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { api } from './api/api'
import { reducer } from './favorite/favoriteSlice'

const reducers = combineReducers({
	favorites: reducer,
	[api.reducerPath]: api.reducer
})
export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware)
})
