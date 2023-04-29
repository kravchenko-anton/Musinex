import AsyncStorage from '@react-native-async-storage/async-storage'
import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { api } from './api/api'
import { reducers } from './rootReducer'

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['player', 'theme', 'language', 'favorites']
}

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			},
			immutableCheck: { warnAfter: 128 }
		})
			.concat(api.middleware)
})
export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof reducers>